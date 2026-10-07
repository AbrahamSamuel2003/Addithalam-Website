"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function ImpactMetricsBar() {
  const { t } = useLanguage();
  const m = t.metrics;

  const metrics = [
    {
      value: "500+",
      label: m.studentsTrained,
      description: m.studentsTrainedDesc,
    },
    {
      value: "40%",
      label: m.womenEmpowered,
      description: m.womenEmpoweredDesc,
    },
    {
      value: "25+",
      label: m.mentorsCount,
      description: m.mentorsCountDesc,
    },
    {
      value: "100%",
      label: m.freeAccess,
      description: m.freeAccessDesc,
    },
  ];

  return (
    <section className="bg-[#231F20] text-white py-4 sm:py-10 border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="grid grid-cols-4 gap-1 sm:gap-6 divide-x divide-slate-700/60 text-center sm:text-left">
          {metrics.map((metric, idx) => (
            <div
              key={metric.label}
              className={`px-1.5 sm:px-0 ${idx !== 0 ? "sm:pl-6 lg:pl-8" : ""}`}
            >
              <p className="font-heading font-extrabold text-lg xs:text-xl sm:text-3xl lg:text-4xl text-[#F68632] tracking-tight">
                {metric.value}
              </p>
              <h3 className="text-[10px] sm:text-base font-bold text-white mt-0.5 sm:mt-1 leading-tight line-clamp-2 sm:line-clamp-none">
                {metric.label}
              </h3>
              <p className="hidden sm:block text-xs text-slate-300 mt-1 leading-relaxed">
                {metric.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
