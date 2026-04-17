const b64 = process.argv[2];
const atobFallback = (str) => Buffer.from(str, 'base64').toString('utf8');

function decodeRoleFromToken(token) {
  try {
    const payloadBase64Url = token.split('.')[1];
    if (!payloadBase64Url) return "USER 1";
    
    // Fix Base64Url encoding issues
    let base64 = payloadBase64Url.replace(/-/g, '+').replace(/_/g, '/');
    const pad = base64.length % 4;
    if (pad) {
      if (pad === 1) return "USER 2";
      base64 += new Array(5 - pad).join('=');
    }
    
    // Use the atob fallback to match middleware's atob or Node's Buffer
    const decodedJson = atobFallback(base64);
    const payload = JSON.parse(decodedJson);
    console.log(payload);
    return payload?.role === "ADMIN" ? "ADMIN" : "USER 3";
  } catch (error) {
    console.error(error);
    return "USER ERROR";
  }
}

// Generate a dummy JWT
const jwt = require('jsonwebtoken');
const token = jwt.sign({ id: 1, email: "admin@gmail.com", role: "ADMIN" }, "secret");
console.log(decodeRoleFromToken(token));
