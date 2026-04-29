import bcrypt from "bcryptjs";

async function run() {
  const hash = await bcrypt.hash("kasir123", 10);
  console.log("HASH PASSWORD:");
  console.log(hash);
}

run();

//admin1
//$2b$10$isIbITlTWr1DSwoWXxSWuO.a2IbgFj2r0ul7Te1Rm0rdy0FBZL7tK
//kasir1
//$2b$10$3OhPoNasmNuRftfJJjEK3OFxyjvCOaOTyGKeqQB.61yC.htCQkOc6