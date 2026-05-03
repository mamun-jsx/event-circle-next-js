"use client";

import React from "react";
import * as Icons from "lucide-react";

interface Stat {
  label: string;
  value: string | number;
  iconName: keyof typeof Icons;
  color: string;
  bgColor: string;
}

interface StatsOverviewProps {
  stats: Stat[];
}

const StatsOverview = ({ stats }: StatsOverviewProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 max-w-5xl mx-auto px-4">
      {stats.map((stat, index) => {
        const Icon = Icons[stat.iconName] as React.ElementType;
        
        return (
          <div
            key={index}
            className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-all group overflow-hidden relative"
          >
            {/* Subtle background decoration */}
            <div 
              className={`absolute -right-4 -top-4 w-24 h-24 rounded-full opacity-5 ${stat.color} group-hover:scale-110 transition-transform`}
            />
            
            <div className="flex items-center gap-5">
              <div
                className={`p-4 rounded-2xl ${stat.bgColor} ${stat.color} shadow-sm group-hover:scale-105 transition-transform`}
              >
                {Icon ? <Icon size={24} /> : null}
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-black uppercase tracking-widest text-gray-400 mb-1">
                  {stat.label}
                </span>
                <span className="text-3xl font-black text-gray-900 tabular-nums">
                  {stat.value}
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default StatsOverview;
