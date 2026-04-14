import React from "react";
import { ArrowUpRight } from "lucide-react";

const CompanyCollaboration = () => {
  const data = [
    {
      id: 1,
      name: "Programming Hero",
      image: "/programminghero.svg",
      description:
        "A leading platform providing high-quality programming courses to students worldwide.",
    },
    {
      id: 2,
      name: "Creative IT",
      image: "/creativeitlogo.png",
      description:
        "Specializing in professional creative skills and industry-standard IT training.",
    },
    {
      id: 3,
      name: "CodemanBD",
      image: "/Codemanbd-logo-main-file.webp",
      description:
        "Empowering the next generation of freelancers and web developers in Bangladesh.",
    },
    {
      id: 4,
      name: "European IT",
      image: "/europeanItlogo.webp",
      description:
        "Global education platform focused on modern software engineering and tech stacks.",
    },
    {
      id: 5,
      name: "Ostad",
      image: "/osdadlogo.png",
      description:
        "A live-learning platform dedicated to skill development with industry experts.",
    },
  ];

  return (
    <section className="py-24 ">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-ec-accent font-bold uppercase tracking-widest text-sm">
              Our Partners
            </span>
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 mt-2 leading-tight">
              Collaborating with <br />
              <span className="text-gray-400">Industry Leaders.</span>
            </h2>
          </div>
          <p className="text-gray-500 text-lg max-w-sm">
            We partner with the best education platforms to bring you exclusive
            events and learning opportunities.
          </p>
        </div>

        {/* Unique Flex/Grid Layout */}
        <div className="flex flex-wrap gap-6">
          {data.map((company, index) => (
            <div
              key={company.id}
              className={`group relative flex-grow basis-full md:basis-[calc(50%-1.5rem)] lg:basis-[calc(33.33%-1.5rem)] 
              ${index === 0 ? "lg:basis-[calc(66.66%-1.5rem)]" : ""} 
              bg-gray-50 rounded-[2.5rem] p-8 border border-gray-100 transition-all duration-500 hover:bg-black hover:translate-y-[-8px]`}
            >
              <div className="flex flex-col h-full">
                <div className="flex justify-between items-start mb-10">
                  <div className="w-20 h-20 bg-white rounded-2xl p-4 shadow-sm group-hover:bg-white/10 transition-colors">
                    <img
                      src={company.image}
                      alt={company.name}
                      className="w-full h-full object-contain group-hover:brightness-0 group-hover:invert transition-all"
                    />
                  </div>
                  <div className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center group-hover:border-ec-accent group-hover:text-ec-accent transition-all">
                    <ArrowUpRight size={20} />
                  </div>
                </div>

                <div className="mt-auto">
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-white transition-colors mb-3">
                    {company.name}
                  </h3>
                  <p className="text-gray-500 group-hover:text-gray-400 transition-colors leading-relaxed">
                    {company.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyCollaboration;
