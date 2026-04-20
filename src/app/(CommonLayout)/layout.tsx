import Footer from "@/Components/Footer";
import NavBar from "@/Components/NavBar";
import { Toaster } from "react-hot-toast";

export const dynamic = "force-dynamic";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-grow">{children}</main>
      <Footer />
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};

export default CommonLayout;
