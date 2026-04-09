import Link from "next/link";

export default function NotFound() {

return (
    <div className="min-h-screen bg-white flex items-center justify-center px-6 overflow-hidden relative">
      {/* Background Decorative Blobs */}
      <div className="absolute top-[-10%] right-[-5%] w-[30vw] h-[30vw] bg-[var(--ec-primary)]/10 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-[-10%] left-[-5%] w-[30vw] h-[30vw] bg-[var(--ec-accent)]/10 rounded-full blur-[100px]"></div>

      <div className="text-center relative z-10">
        {/* Extraordinary 404 Visual */}
        <div className="relative inline-block">
          <h1 className="text-[150px] md:text-[250px] font-black leading-none tracking-tighter text-[var(--ec-gray-100)] opacity-20">
            404
          </h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <img 
              src="/logo.png" 
              alt="EventCircle" 
              className="h-16 md:h-24 w-auto animate-pulse"
            />
          </div>
        </div>

        {/* Error Message */}
        <h2 className="text-3xl md:text-5xl font-black text-[var(--ec-primary)] mt-[-20px] md:mt-[-40px]">
          Event Not <span className="text-[var(--ec-accent)]">Found</span>
        </h2>
        
        <p className="text-[var(--ec-gray-300)] mt-6 text-lg max-w-md mx-auto leading-relaxed">
          The circle you're looking for has closed or moved to a different venue. Let's get you back to the main stage.
        </p>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link 
            href="/" 
            className="px-8 py-4 bg-[var(--ec-primary)] text-white font-bold rounded-2xl hover:bg-[var(--ec-accent)] transition-all shadow-lg shadow-[var(--ec-primary)]/20 hover:-translate-y-1"
          >
            Return Home
          </Link>
          <Link 
            href="/contact" 
            className="px-8 py-4 border-2 border-[var(--ec-gray-200)] text-[var(--ec-gray-300)] font-bold rounded-2xl hover:border-[var(--ec-primary)] hover:text-[var(--ec-primary)] transition-all"
          >
            Report Issue
          </Link>
        </div>
      </div>
    </div>
  );
};

