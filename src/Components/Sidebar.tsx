"use client";

import { useState } from "react";
import Link from "next/link";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const role = "ADMIN";

  const LinksForAdmin = [
    { name: "Dashboard", href: "/dashboard" },
    { name: "Add Events", href: "/dashboard/add-events" },
    { name: "Manage Events", href: "/dashboard/manage-events" },
    { name: "All Users", href: "/dashboard/all-users" },
    { name: "Ticket List", href: "/dashboard/all-tickets" },
    { name: "Home", href: "/" },
  ];

  const LinksForUser = [
    { name: "Home", href: "/" },
    { name: "Buy Events", href: "/dashboard/buy-events" },
    { name: "My Tickets", href: "/dashboard/my-tickets" },
  ];

  const activeLinks = role === "ADMIN" ? LinksForAdmin : LinksForUser;

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden fixed top-4 left-4 z-[60] p-2 bg-[var(--ec-accent)] rounded-lg text-white"
      >
        {isOpen ? (
          <svg
            className="w-6 h-6"
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
          <svg
            className="w-6 h-6"
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

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-[40] md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar Container */}
      <aside
        className={`
        fixed top-0 left-0 h-full bg-gray-900 border-r border-[var(--ec-gray-200)] z-[50] transition-transform duration-300
        w-[250px] md:w-[300px]
        ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
      `}
      >
        <div className="flex flex-col h-full p-6">
          {/* Logo Section */}
          <div className="mb-10 flex justify-center">
            <img
              src="/logo.png"
              alt="EventCircle"
              className="w-[200px] md:w-[250px] object-contain"
            />
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col space-y-4">
            <p className="text-[var(--ec-gray-200)] text-xs uppercase font-bold tracking-widest px-2 mb-2">
              {role} Menu
            </p>
            {activeLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 font-semibold transition-all duration-300 
                           text-[var(--ec-primary)] 
                           hover:text-white hover:underline decoration-[var(--ec-primary)] underline-offset-8"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Bottom Branding */}
          <div className="mt-auto pt-6 border-t border-[var(--ec-gray-200)] text-center">
            <p className="text-[var(--ec-accent)] text-xs font-bold uppercase tracking-tighter">
              Powered by Abdullah Al Mamun
            </p>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
