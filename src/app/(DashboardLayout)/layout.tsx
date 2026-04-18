// import { cookies } from "next/headers";
// import { jwtDecode } from "jwt-decode";
// import { Toaster } from "react-hot-toast";
import Sidebar from "@/Components/Sidebar";
// import { getAuthUser } from "@/lib/current.auth";
// import { useRouter } from "next/navigation";

import { getAuthUser } from "@/lib/current.auth";
// import { Sidebar } from "lucide-react";
import { redirect } from "next/navigation";
// import { Toaster } from "react-hot-toast";

// type TokenPayload = {
//   id: string;
//   email: string;
//   role: "ADMIN" | "USER";
// };

// const DashboardLayout = async ({ admin, user }: any) => {
  // const token = (await cookies()).get("auth-token")?.value;

  // let role: "ADMIN" | "USER" = "USER";

  // if (token) {
  //   const decoded = jwtDecode<TokenPayload>(token);
  //   role = decoded.role;
  // }

interface DashboardLayoutProps {
  user: React.ReactNode;
  admin: React.ReactNode;
}

const DashboardLayout = async ({ user, admin }: DashboardLayoutProps) => {
  const currentUser = await getAuthUser();
  
  // Server-side protection
  if (!currentUser) {
    redirect("/login");
  }

  const role = currentUser.role;

  return (
    <div className="flex min-h-screen">
      {/* Pass role to Sidebar for dynamic links */}
      <Sidebar role={role} />

      <main className="flex-1 flex flex-col w-full md:ml-[300px] pt-20 px-6">
        <div className="max-w-7xl w-full mx-auto">
          {role === "ADMIN" ? admin : user}
        </div>

        {/* <Toaster position="top-right" /> */}
      </main>
    </div>
  );
};

export default DashboardLayout;

