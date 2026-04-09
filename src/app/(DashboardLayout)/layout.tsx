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
    <div className="flex min-h-screen">
      {/* 1. Sidebar Component (Handles its own fixed positioning) */}
      <Sidebar />

      {/* 2. Main Content Area */}
      <main
        className={`
          flex-1 
          flex flex-col 
          w-full 
          transition-all 
          duration-300
          /* On mobile: no margin. On desktop: match sidebar width (300px) */
          md:ml-[300px] 
          /* Extra padding for mobile so content doesn't touch the top toggle button */
          pt-20 md:pt-10 
          px-6
        `}
      >
        <div className="max-w-7xl w-full mx-auto">
          {role === "USER" ? user : admin}
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
