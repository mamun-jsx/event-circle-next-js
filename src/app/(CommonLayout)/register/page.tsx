"use client";

import Link from "next/link";
import { registerAction } from "@/action/auth/auth.register";

export default function Register() {
    return (
        <section className="min-h-screen flex items-center justify-center bg-black px-6 py-12">
            <div className="w-full max-w-md bg-[#191919] p-8 rounded-2xl border border-[#868787] shadow-xl">
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-white mb-2">Create Account</h2>
                    <p className="text-[#a0a1a1]">Join EventCircle to start hosting</p>
                </div>

                <form action={registerAction as unknown as string | ((formData: FormData) => void | Promise<void>) | undefined | any} className="space-y-5">
                    {/* Full Name Field */}
                    <div>
                        <label className="block text-sm font-medium text-[#a0a1a1] mb-2">Full Name</label>
                        <input
                            type="text"
                            name="name"
                            required
                            placeholder="Abdullah Al Mamun"
                            className="w-full px-4 py-3 bg-black border border-[#868787] rounded-lg text-white focus:outline-none focus:border-[#c53074] transition-colors"
                        />
                    </div>

                    {/* Email Field */}
                    <div>
                        <label className="block text-sm font-medium text-[#a0a1a1] mb-2">Email Address</label>
                        <input
                            type="email"
                            name="email"
                            required
                            placeholder="name@example.com"
                            className="w-full px-4 py-3 bg-black border border-[#868787] rounded-lg text-white focus:outline-none focus:border-[#c53074] transition-colors"
                        />
                    </div>

                    {/* Password Field */}
                    <div>
                        <label className="block text-sm font-medium text-[#a0a1a1] mb-2">Password</label>
                        <input
                            type="password"
                            name="password"
                            required
                            placeholder="••••••••"
                            className="w-full px-4 py-3 bg-black border border-[#868787] rounded-lg text-white focus:outline-none focus:border-[#c53074] transition-colors"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full py-3 bg-[#c53074] text-white font-bold rounded-lg hover:bg-[#5b3d88] transition-all transform active:scale-95 mt-4"
                    >
                        Create Account
                    </button>
                </form>

                <p className="mt-6 text-center text-[#a0a1a1] text-sm">
                    Already have an account?
                    <Link href="/login" className="text-[#19729f] ml-1 hover:underline font-medium">
                        Login here
                    </Link>
                </p>
            </div>
        </section>
    );
}
