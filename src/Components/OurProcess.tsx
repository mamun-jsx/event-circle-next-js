import React from "react";
import { CheckCircle2 } from "lucide-react";

const OurProcess = () => {
  const steps = [
    {
      id: "01",
      title: "Discovery & Consultation",
      description:
        "We meet to understand your vision, goals, and specific requirements for the perfect event.",
    },
    {
      id: "02",
      title: "Proposal & Planning",
      description:
        "Our team drafts a comprehensive plan, including venue selection, catering, and budget estimates.",
    },
    {
      id: "03",
      title: "Collaborative Development",
      description:
        "Work closely with our designers to finalize themes, tech setups, and guest experiences.",
    },
    {
      id: "04",
      title: "Vendor Coordination",
      description:
        "We handle all logistics with third-party vendors, ensuring seamless integration and quality control.",
    },
    {
      id: "05",
      title: "Final Preparation",
      description:
        "A final walkthrough and rehearsal to ensure every detail is polished before the big day.",
    },
  ];

  return (
    <section className="py-24 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Column */}
        <div className="space-y-8">
          <div>
            <span className="bg-purple-100 text-purple-600 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
              • Our Process •
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mt-6 leading-tight">
              A Clear Path to Your <br /> Perfect Event
            </h2>
            <p className="text-gray-500 mt-6 text-lg leading-relaxed max-w-md">
              We take the stress out of planning by following a proven framework
              designed to deliver excellence at every stage.
            </p>
          </div>

          {/* Visual Element */}
          <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white">
            <img
              src="/teammeating.webp"
              alt="Team Meeting"
              className="w-full h-80 object-cover"
            />
            {/* Floating Satisfaction Badge */}
            <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md p-4 rounded-2xl flex items-center gap-3 shadow-lg">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white overflow-hidden"
                  >
                    <img src={`/usericon.webp`} alt="user" />
                  </div>
                ))}
              </div>
              <div>
                <p className="text-sm font-black text-gray-900 leading-none">
                  98%
                </p>
                <p className="text-[10px] text-gray-500 font-bold uppercase">
                  Satisfaction Rate
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Timeline Steps */}
        <div className="space-y-12 relative">
          {/* Vertical Line Connector */}
          <div className="absolute left-6 top-2 bottom-2 w-0.5 bg-gray-100 hidden md:block" />

          {steps.map((step) => (
            <div
              key={step.id}
              className="relative pl-0 md:pl-16 flex flex-col md:flex-row gap-4 group"
            >
              {/* Step Number Circle */}
              <div className="z-10 w-12 h-12 rounded-full bg-white border-2 border-purple-100 flex items-center justify-center text-purple-600 font-black shrink-0 transition-all group-hover:bg-purple-600 group-hover:text-white">
                {step.id}
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                  {step.title}
                </h3>
                <p className="text-gray-500 leading-relaxed text-sm max-w-sm">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurProcess;
