"use client";

import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Send, BellRing, CheckCircle2, Loader2 } from "lucide-react";
import toast from "react-hot-toast";

type Inputs = {
  email: string;
};

const NewsletterCTA = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 1500));
      if (!data.email) {
        toast.error("Please enter your email address");
        return;
      } else {
        console.log("Subscribing email:", data.email);
        setIsSubmitted(true);
        toast.success("Welcome to the inner circle!");
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="relative overflow-hidden bg-[#0A0A0A] rounded-[3rem] p-10 md:p-20 border border-white/5 shadow-2xl">
        {/* Background Glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-ec-accent/10 blur-[120px] -z-0" />

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-ec-accent/10 border border-ec-accent/20 px-4 py-2 rounded-full text-ec-accent text-xs font-bold uppercase tracking-widest mb-8">
            <BellRing size={14} className="animate-bounce" /> Stay Updated
          </div>

          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
            Never miss an <span className="text-ec-accent">epic event.</span>
          </h2>

          <p className="text-gray-400 text-lg md:text-xl mb-10 leading-relaxed">
            Join 5,000+ event enthusiasts. Get early access to tickets,
            exclusive discounts, and weekly tech event roundups.
          </p>

          {!isSubmitted ? (
            <div className="w-full">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className={`relative flex flex-col sm:flex-row items-center gap-4 bg-white/5 p-2 rounded-[2rem] border transition-all ${
                  errors.email ? "border-red-500" : "border-white/10"
                } backdrop-blur-md`}
              >
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 bg-transparent border-none text-white px-6 py-4 focus:ring-0 outline-none placeholder:text-gray-500"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /\S+@\S+\.\S+/,
                      message: "Invalid email format",
                    },
                  })}
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto cursor-pointer flex items-center justify-center gap-2 px-8 py-4 bg-ec-accent hover:bg-white text-white hover:text-black font-black rounded-full transition-all duration-300 group disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <Loader2 className="animate-spin" size={20} />
                  ) : (
                    <>
                      Subscribe Now
                      <Send
                        size={18}
                        className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                      />
                    </>
                  )}
                </button>
              </form>
              {errors.email && (
                <p className="text-red-500 text-sm mt-3 font-medium">
                  {errors.email.message}
                </p>
              )}
            </div>
          ) : (
            <div className="flex items-center justify-center gap-3 text-ec-accent bg-ec-accent/10 py-6 rounded-[2rem] border border-ec-accent/20 animate-in fade-in zoom-in duration-500">
              <CheckCircle2 size={24} />
              <span className="font-bold text-lg">
                You&apos;re on the list! Check your inbox soon.
              </span>
            </div>
          )}

          <p className="mt-6 text-gray-500 text-xs">
            We value your privacy. No spam, ever.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterCTA;
