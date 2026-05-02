import bcrypt from "bcryptjs";

async function run() {
  const hash = await bcrypt.hash("kasir123", 10);
  console.log("HASH PASSWORD:");
  console.log(hash);
}

run();