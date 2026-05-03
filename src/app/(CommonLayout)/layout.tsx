import Footer from "@/Components/Footer";
import NavBar from "@/Components/NavBar";
import ChatWidget from "@/Components/Chatbot/ChatWidget";

export const dynamic = "force-dynamic";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-grow">{children}</main>
      <Footer />

      {/* 🤖 Chatbot — visible on all public pages, no login required */}
      <ChatWidget />
    </div>
  );
};

export default CommonLayout;
