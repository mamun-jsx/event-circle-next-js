"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Cookies from "js-cookie";
import { useRouter, usePathname } from "next/navigation";

// 1. Removed 'async' from the component definition
const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [token, setToken] = useState<string | undefined>(undefined);
  const router = useRouter();
  const pathname = usePathname();
  // Read cookie only once when component mounts
  useEffect(() => {
    const savedToken = Cookies.get("auth-token");
    setToken(savedToken);
  }, [pathname]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Events", href: "/events" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    token
      ? { name: "Dashboard", href: "/dashboard" }
      : { name: "Login", href: "/login" },
  ];

  const handleLogout = () => {
    // 3. Clear the cookie so proxy.ts blocks access
    Cookies.remove("auth-token");
    Cookies.remove("user-email");
    Cookies.remove("user-role");
    localStorage.removeItem("token"); // Optional backup
    localStorage.removeItem("user-role"); // Optional backup
    localStorage.removeItem("user-email"); // Optional backup

    setToken(undefined); // Update local state
    router.refresh(); // Tell Next.js to re-sync server components
    router.push("/login");
  };
  return (
    <nav className=" text-white bg-black sticky top-0 z-50 border-b border-[#868787]">
      <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
        {/* Left Side: Logo */}
        <div className="flex items-center">
          <Link href="/">
            <img
              src="/logoIcon.png"
              alt="EventCircle"
              className="h-16 md:h-22 w-auto object-contain"
            />
          </Link>
        </div>

        {/* Desktop Links (Hidden on Mobile) */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[#a0a1a1] hover:text-[#c53074] transition-colors font-semibold tracking-wide"
            >
              {link.name}
            </Link>
          ))}
          {token && <button onClick={handleLogout}>Logout</button>}
        </div>

        {/* Mobile Menu Button (Hamburger) */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-[#c53074] p-2 transition-transform active:scale-90"
          >
            {isOpen ? (
              // X Icon
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              // Hamburger Icon
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden bg-black transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? "max-h-64 border-b border-[#868787]" : "max-h-0"}`}
      >
        <div className="flex flex-col space-y-4 p-6 pt-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-[#a0a1a1] hover:text-white transition-colors text-lg border-l-2 border-transparent hover:border-[#c53074] pl-2"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
