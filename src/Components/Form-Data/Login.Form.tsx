"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import Link from "next/link";
// import { loginAction } from "@/action/auth/auth.login"; // Use this in your onSubmit

interface ILoginFormInput {
  email: string;
  password: string;
}

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginFormInput>();

  const onSubmit: SubmitHandler<ILoginFormInput> = async (data) => {
    console.log("Form Data:", data);
    // You can call your Server Action or API here:
    // const formData = new FormData();
    // formData.append("email", data.email);
    // formData.append("password", data.password);
    // await loginAction(formData);
  };

  // Styles pulled from your specific design
  const labelStyle = "block text-sm font-medium text-[#a0a1a1] mb-2";
  const inputStyle =
    "w-full px-4 py-3 bg-black border border-[#868787] rounded-lg text-white focus:outline-none focus:border-[#c53074] transition-colors placeholder:text-gray-600";
  const errorStyle = "text-[#c53074] text-xs mt-1 font-medium";

  return (
    <section className="min-h-screen flex items-center justify-center bg-black px-6">
      <div className="w-full max-w-md bg-[#191919] p-8 rounded-2xl border border-[#868787] shadow-xl">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white mb-2">Welcome Back</h2>
          <p className="text-[#a0a1a1]">Login to manage your events</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Email Field */}
          <div>
            <label className={labelStyle}>Email Address</label>
            <input
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Invalid email address",
                },
              })}
              placeholder="name@example.com"
              className={`${inputStyle} ${errors.email ? "border-[#c53074]" : "border-[#868787]"}`}
            />
            {errors.email && (
              <p className={errorStyle}>{errors.email.message}</p>
            )}
          </div>

          {/* Password Field */}
          <div>
            <label className={labelStyle}>Password</label>
            <input
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Must be at least 6 characters",
                },
              })}
              placeholder="••••••••"
              className={`${inputStyle} ${errors.password ? "border-[#c53074]" : "border-[#868787]"}`}
            />
            {errors.password && (
              <p className={errorStyle}>{errors.password.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-[#c53074] text-white font-bold rounded-lg hover:bg-[#5b3d88] transition-all transform active:scale-95"
          >
            Sign In
          </button>
        </form>

        <p className="mt-6 text-center text-[#a0a1a1] text-sm">
          Don't have an account?
          <Link
            href="/register"
            className="text-[#19729f] ml-1 hover:underline font-medium"
          >
            Register here
          </Link>
        </p>
      </div>
    </section>
  );
}
