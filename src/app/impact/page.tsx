"use client";

import React from "react";
import Link from "next/link";
import { learnerStories } from "@/data/impactData";
import { Quote, CheckCircle2 } from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import { useLanguage } from "@/context/LanguageContext";

export default function ImpactPage() {
  const { t, lang } = useLanguage();
  const im = t.impactPage;
  const m = t.metrics;
  const s = t.stories;

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
    <div className="bg-[#FAF8F5]">
      {/* Immersive PageHero with Background Image */}
      <PageHero
        badge={im.heroBadge}
        title={im.heroTitle}
        subtitle={im.heroSubtitle}
        backgroundImage="/images/features/women-in-tech.jpg"
      />

      {/* Verified Metrics Strip */}
      <section className="py-8 sm:py-10 bg-white border-b border-[#EFECE8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {metrics.map((item) => (
              <div key={item.label} className="space-y-1">
                <span className="font-heading font-extrabold text-3xl sm:text-4xl text-[#F68632]">
                  {item.value}
                </span>
                <h3 className="font-bold text-base text-[#231F20]">
                  {item.label}
                </h3>
                <p className="text-xs text-slate-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* In-Depth Stories */}
      <section className="py-10 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="max-w-3xl space-y-2 text-center sm:text-left mx-auto sm:mx-0">
          <span className="text-xs font-bold text-[#F68632] uppercase tracking-widest block">
            {im.caseStudiesBadge}
          </span>
          <h2 className="font-heading font-extrabold text-3xl text-[#231F20]">
            {im.caseStudiesTitle}
          </h2>
          <p className="text-base text-slate-600">
            {im.caseStudiesDesc}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {learnerStories.map((story) => {
            const isTa = lang === "ta";
            const name = isTa && story.nameTa ? story.nameTa : story.name;
            const background = isTa && story.backgroundTa ? story.backgroundTa : story.background;
            const quote = isTa && story.quoteTa ? story.quoteTa : story.quote;
            const outcomeRole = isTa && story.outcomeRoleTa ? story.outcomeRoleTa : story.outcomeRole;
            const companyCategory = isTa && story.companyCategoryTa ? story.companyCategoryTa : story.companyCategory;

            return (
              <div
                key={story.id}
                className="bg-white rounded-2xl border border-[#EFECE8] p-6 sm:p-7 shadow-xs hover:border-[#F68632]/50 hover:shadow-lg transition-all flex flex-col justify-between space-y-6 text-left"
              >
                <div className="space-y-4">
                  <Quote className="w-8 h-8 text-[#F68632] opacity-80 shrink-0" />
                  <p className="text-sm sm:text-base text-slate-800 leading-relaxed italic">
                    &ldquo;{quote}&rdquo;
                  </p>
                </div>

                <div className="space-y-3 pt-4 border-t border-[#EFECE8]">
                  <div>
                    <h4 className="font-heading font-bold text-base text-[#231F20]">
                      {name}
                    </h4>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      {background}
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-[#FFF2E7] border border-[#F68632]/30 space-y-1 text-xs">
                    <span className="font-bold text-[#231F20] block">
                      {s.verifiedOutcome}:
                    </span>
                    <div className="flex items-center space-x-1.5 text-[#F68632] font-bold">
                      <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                      <span>{outcomeRole} ({companyCategory})</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 sm:py-16 bg-white border-t border-[#EFECE8] text-[#231F20]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#231F20]">
            {im.ctaTitle}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            {im.ctaDesc}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <Link
              href="/contact"
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-[#F68632] text-white font-bold text-sm hover:bg-[#E07418] active:scale-[0.98] transition-all shadow-xs"
            >
              {im.donateBtn}
            </Link>
            <Link
              href="/programs"
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-[#FAF8F5] text-[#231F20] font-bold text-sm border border-[#EFECE8] hover:bg-slate-100 transition-colors shadow-xs"
            >
              {lang === "ta" ? "பயிற்சித் திட்டங்கள்" : "Explore Programs"}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
