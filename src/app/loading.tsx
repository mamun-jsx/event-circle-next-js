"use client";

import Image from "next/image";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#c53074] opacity-20 blur-[120px] rounded-full animate-pulse" />
      <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-[#5b3d88] opacity-10 blur-[100px] rounded-full animate-bounce-slow" />

      {/* Main Content */}
      <div className="relative flex flex-col items-center">
        {/* Logo Container with Glassmorphism */}
        <div className="relative group p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl transition-all duration-500 hover:scale-105">
          <div className="relative w-48 h-20 md:w-64 md:h-28 animate-pulse">
            <Image
              src="/logoIcon.png"
              alt="EventCircle"
              fill
              className="object-contain filter drop-shadow-[0_0_15px_rgba(197,48,116,0.5)]"
              priority
            />
          </div>
          
          {/* Animated Ring */}
          <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-[#c53074] to-[#5b3d88] opacity-20 blur-sm animate-spin-slow" />
        </div>

        {/* Loading Text */}
        <div className="mt-10 flex flex-col items-center space-y-3">
          <div className="flex space-x-2">
            <span className="w-3 h-3 bg-[#c53074] rounded-full animate-bounce [animation-delay:-0.3s]" />
            <span className="w-3 h-3 bg-[#c53074] rounded-full animate-bounce [animation-delay:-0.15s]" />
            <span className="w-3 h-3 bg-[#c53074] rounded-full animate-bounce" />
          </div>
          <p className="text-[#a0a1a1] font-medium tracking-[0.2em] uppercase text-sm animate-pulse">
            Preparing your experience
          </p>
        </div>
      </div>
    </div>
  );
}
