import { cookies } from "next/headers";
import { jwtDecode } from "jwt-decode";
import { Toaster } from "react-hot-toast";
import Sidebar from "@/Components/Sidebar";

type TokenPayload = {
  id: string;
  email: string;
  role: "ADMIN" | "USER";
};

const DashboardLayout = async ({ admin, user }: any) => {
  const token = (await cookies()).get("auth-token")?.value;

  let role: "ADMIN" | "USER" = "USER";

  if (token) {
    const decoded = jwtDecode<TokenPayload>(token);
    role = decoded.role;
  }

  return (
    <div className="flex min-h-screen">
      <Sidebar role={role} />

      <main className="flex-1 flex flex-col w-full md:ml-[300px] pt-20 px-6">
        <div className="max-w-7xl w-full mx-auto">
          {role === "USER" ? user : admin}
        </div>

        <Toaster position="top-right" />
      </main>
    </div>
  );
};

export default DashboardLayout;
