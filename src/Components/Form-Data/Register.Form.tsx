"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import Link from "next/link";
import { IRegisterFormInput } from "@/Types/fetchDataType";
import { registerUser } from "@/action/auth/auth.register";
import { useRouter } from "next/navigation";

const RegisterForm = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterFormInput>();

  // action for register
  const onSubmit: SubmitHandler<IRegisterFormInput> = async (data) => {
    try {
      const result = await registerUser(data);
      console.log("Register Result:", result);
      if (result && result.success) {
        localStorage.setItem("token", result.token);
        router.refresh();
        router.push("/");
      }
    } catch (error) {
      console.error("Registration failed:", error);
    }
  };

  // Using your brand variables directly
  const labelStyle = "block text-sm font-medium text-gray-100 mb-2";
  const inputStyle =
    "w-full px-4 py-3 bg-black border border-gray-200 rounded-lg text-white focus:outline-none focus:border-ec-accent transition-colors placeholder:text-ec-gray-200";
  const errorStyle = "text-ec-accent text-xs mt-1 font-medium";

  return (
    <section className="min-h-screen flex items-center justify-center bg-black px-6">
      <div className="w-full max-w-md bg-[#191919] p-8 rounded-2xl border border-ec-gray-200 shadow-xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white mb-2">Create Account</h2>
          <p className="text-ec-gray-100">Create an account to manage events</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Name Field */}
          <div>
            <label className={labelStyle}>Full Name</label>
            <input
              type="text"
              {...register("name", { required: "Name is required" })}
              className={`${inputStyle} ${errors.name ? "border-ec-accent" : "border-ec-gray-200"}`}
              placeholder="Enter your name"
            />
            {errors.name && <p className={errorStyle}>{errors.name.message}</p>}
          </div>

          {/* Email Field */}
          <div>
            <label className={labelStyle}>Email Address</label>
            <input
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Invalid email format",
                },
              })}
              className={`${inputStyle} ${errors.email ? "border-ec-accent" : "border-ec-gray-200"}`}
              placeholder="name@example.com"
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
                minLength: { value: 6, message: "Minimum 6 characters" },
              })}
              className={`${inputStyle} ${errors.password ? "border-ec-accent" : "border-ec-gray-200"}`}
              placeholder="••••••••"
            />
            {errors.password && (
              <p className={errorStyle}>{errors.password.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <button
              type="submit"
              className="w-full py-3 bg-ec-accent text-white font-bold rounded-lg hover:bg-ec-primary transition-all transform active:scale-95 cursor-pointer"
            >
              Create Account
            </button>
          </div>
        </form>

        {/* Footer Link */}
        <p className="mt-6 text-center text-gray-100 text-sm">
          Already have an account?
          <Link
            href="/login"
            className="text-ec-secondary ml-1 hover:underline font-medium"
          >
            Login here
          </Link>
        </p>
      </div>
    </section>
  );
};

export default RegisterForm;
