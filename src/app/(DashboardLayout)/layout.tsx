import Sidebar from "@/Components/Sidebar";

import { getAuthUser } from "@/lib/current.auth";
import { redirect } from "next/navigation";

export const dynamic = "force-dynamic";

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
      </main>
    </div>
  );
};

export default DashboardLayout;
