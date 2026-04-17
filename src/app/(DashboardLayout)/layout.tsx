import Sidebar from "@/Components/Sidebar";
import { Toaster } from "react-hot-toast";
import { cookies } from "next/headers";

function decodeRoleFromToken(token: string): string {
  try {
    const payloadBase64Url = token.split('.')[1];
    if (!payloadBase64Url) return "USER";
    
    // Fix Base64Url encoding issues
    let base64 = payloadBase64Url.replace(/-/g, '+').replace(/_/g, '/');
    const pad = base64.length % 4;
    if (pad) {
      if (pad === 1) return "USER";
      base64 += new Array(5 - pad).join('=');
    }
    
    const decodedJson = typeof Buffer !== 'undefined' ? Buffer.from(base64, 'base64').toString('utf8') : atob(base64);
    const payload = JSON.parse(decodedJson);
    console.log("=== SERVER LAYOUT PARSED JWT ===");
    console.log("Token payload:", payload);
    return payload?.role === "ADMIN" ? "ADMIN" : "USER";
  } catch (error) {
    console.error("=== SERVER LAYOUT JWT ERROR ===", error);
    return "USER";
  }
}

const DashboardLayout = async ({
  admin,
  user,
}: {
  admin: React.ReactNode;
  user: React.ReactNode;
}) => {
  const cookieStore = await cookies();
  const authToken = cookieStore.get("auth-token")?.value;
  const role = authToken ? decodeRoleFromToken(authToken) : "USER";

  return (
    <div className="flex min-h-screen">
      <Sidebar role={role} />

      <main
        className="
          flex-1 
          flex flex-col 
          w-full 
          transition-all 
          duration-300
          md:ml-[300px] 
          pt-20 md:pt-10 
          px-6
        "
      >
        <div className="max-w-7xl w-full mx-auto">
          {role === "USER" ? user : admin}
        </div>

        <Toaster position="top-right" reverseOrder={false} />
      </main>
    </div>
  );
};

export default DashboardLayout;
