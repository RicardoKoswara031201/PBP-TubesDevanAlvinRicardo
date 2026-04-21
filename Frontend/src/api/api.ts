export const API_BASE_URL = 'http://localhost:3000/api';

async function request<T = any>(
  path: string,
  options: RequestInit = {},
  useAuth: boolean = true
): Promise<T> {
  const headers: Record<string, string> = {
    ...(options.headers || {}) as Record<string, string>
  };

  // Tambahkan token jika perlu
  if (useAuth) {
    const token = localStorage.getItem('token');
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }
  }

  // Content-Type default
  if (!(options.body instanceof FormData) && !headers['Content-Type']) {
    headers['Content-Type'] = 'application/json';
  }

  try {
    const res = await fetch(`${API_BASE_URL}${path}`, {
      ...options,
      headers,
    });

    // Handle response kosong
    const text = await res.text();
    const payload = text ? JSON.parse(text) : {};

    if (!res.ok) {
      const msg = payload?.message || res.statusText;
      throw new Error(msg);
    }

    return payload as T;
  } catch (error: any) {
    console.error("API Error:", error.message);
    throw error;
  }
}

// EXPORT API METHODS
export const api = {
  get: <T = any>(path: string, useAuth = true) =>
    request<T>(path, { method: 'GET' }, useAuth),

  post: <T = any>(path: string, body: any, useAuth = true) =>
    request<T>(
      path,
      {
        method: 'POST',
        body: JSON.stringify(body),
      },
      useAuth
    ),

  put: <T = any>(path: string, body: any, useAuth = true) =>
    request<T>(
      path,
      {
        method: 'PUT',
        body: JSON.stringify(body),
      },
      useAuth
    ),

  delete: <T = any>(path: string, useAuth = true) =>
    request<T>(path, { method: 'DELETE' }, useAuth),

  postFormData: <T = any>(path: string, formData: FormData, useAuth = true) =>
    request<T>(
      path,
      {
        method: 'POST',
        body: formData,
      },
      useAuth
    ),

  putFormData: <T = any>(path: string, formData: FormData, useAuth = true) =>
    request<T>(
      path,
      {
        method: 'PUT',
        body: formData,
      },
      useAuth
    ),
};