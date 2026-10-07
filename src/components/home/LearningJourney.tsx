"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function LearningJourney() {
  const { t } = useLanguage();
  const j = t.journey;

  const steps = [
    {
      step: "01",
      title: j.step1Title,
      desc: j.step1Desc,
    },
    {
      step: "02",
      title: j.step2Title,
      desc: j.step2Desc,
    },
    {
      step: "03",
      title: j.step3Title,
      desc: j.step3Desc,
    },
    {
      step: "04",
      title: j.step4Title,
      desc: j.step4Desc,
    },
    {
      step: "05",
      title: j.step5Title,
      desc: j.step5Desc,
    },
    {
      step: "06",
      title: j.step6Title,
      desc: j.step6Desc,
    }
  ];

  return (
    <section className="py-12 sm:py-16 bg-[#FAF8F5] border-b border-[#EFECE8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="max-w-3xl space-y-3 text-center sm:text-left mx-auto sm:mx-0">
          <p className="text-xs font-bold text-[#F68632] tracking-widest uppercase">
            {j.badge}
          </p>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#231F20] tracking-tight">
            {j.title}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            {j.desc}
          </p>
        </div>

        {/* 6 Steps Grid - 2 columns per row on mobile */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
          {steps.map((item) => (
            <div
              key={item.step}
              className="p-4 sm:p-6 rounded-2xl bg-white border border-[#EFECE8] shadow-xs hover:border-[#F68632]/50 hover:shadow-md transition-all flex flex-col justify-between space-y-3 sm:space-y-4"
            >
              <div>
                <span className="font-heading font-extrabold text-lg sm:text-2xl text-[#F68632] block">
                  {item.step}
                </span>
              </div>

              <div className="space-y-1 sm:space-y-1.5 flex-1">
                <h3 className="font-heading font-bold text-sm sm:text-lg text-[#231F20]">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
