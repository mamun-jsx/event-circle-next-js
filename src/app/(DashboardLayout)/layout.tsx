"use client";
import Sidebar from "@/Components/Sidebar";

const DashboardLayout = ({
  admin,
  user,
}: {
  admin: React.ReactNode;
  user: React.ReactNode;
}) => {
  const role = "ADMIN";
  return (
    <div className="flex flex-col min-h-screen">
      <Sidebar />
      {role === "USER" ? user : admin}
    </div>
  );
};

export default DashboardLayout;
