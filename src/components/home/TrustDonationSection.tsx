"use client";

import React from "react";
import Link from "next/link";
import { ShieldCheck, ArrowRight, FileCheck, CheckCircle2, Building2 } from "lucide-react";
import { trustData } from "@/data/trustData";
import { useLanguage } from "@/context/LanguageContext";

export default function TrustDonationSection() {
  const { t } = useLanguage();
  const td = t.trustDonation;

  return (
    <section className="py-12 sm:py-16 bg-[#FAF8F5] text-[#231F20] border-b border-[#EFECE8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Trust Standards & Governance */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-md bg-white text-[#F68632] text-xs font-bold border border-[#EFECE8] shadow-xs">
              <ShieldCheck className="w-4 h-4" />
              <span>{td.badge}</span>
            </div>

            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#231F20] leading-tight tracking-tight">
              {td.title}
            </h2>

            <p className="text-base text-slate-700 leading-relaxed">
              {td.desc}
            </p>

            <div className="space-y-3 pt-2 text-left">
              {trustData.taxExemptions.map((item) => (
                <div
                  key={item.section}
                  className="p-4 rounded-xl bg-white border border-[#EFECE8] shadow-xs space-y-1"
                >
                  <div className="flex items-center space-x-2 text-[#F68632] font-bold text-sm">
                    <FileCheck className="w-4 h-4 shrink-0" />
                    <span>{item.section}</span>
                  </div>
                  <p className="text-xs text-slate-600">
                    {item.details}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Giving & Partnership Card */}
          <div className="lg:col-span-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-white text-[#231F20] shadow-xl border border-[#EFECE8] space-y-6">
              
              <div className="space-y-2 text-center sm:text-left">
                <div className="inline-flex items-center space-x-1.5 text-xs font-bold text-[#F68632] uppercase tracking-wider">
                  <Building2 className="w-4 h-4" />
                  <span>{td.cardSubtitle}</span>
                </div>
                <h3 className="font-heading font-extrabold text-2xl text-[#231F20]">
                  {td.cardTitle}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {td.cardSubtitle}
                </p>
              </div>

              {/* Engagement Tiers */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3">
                <div className="p-3 sm:p-3.5 rounded-xl border border-[#EFECE8] bg-[#FAF8F5] text-center flex flex-row items-center justify-between sm:flex-col sm:justify-center gap-1">
                  <span className="font-heading font-extrabold text-xs sm:text-xs text-[#231F20] block">
                    {td.tier1Label}
                  </span>
                  <span className="text-[11px] text-slate-500 font-medium block">
                    Mentorship & Kits
                  </span>
                </div>
                <div className="p-3 sm:p-3.5 rounded-xl border-2 border-[#F68632] bg-[#FFF2E7] text-center flex flex-row items-center justify-between sm:flex-col sm:justify-center gap-1 shadow-xs">
                  <span className="font-heading font-extrabold text-xs sm:text-xs text-[#F68632] block">
                    {td.tier2Label}
                  </span>
                  <span className="text-[11px] text-[#231F20] font-bold block">
                    Workstation Labs
                  </span>
                </div>
                <div className="p-3 sm:p-3.5 rounded-xl border border-[#EFECE8] bg-[#FAF8F5] text-center flex flex-row items-center justify-between sm:flex-col sm:justify-center gap-1">
                  <span className="font-heading font-extrabold text-xs sm:text-xs text-[#231F20] block">
                    {td.tier3Label}
                  </span>
                  <span className="text-[11px] text-slate-500 font-medium block">
                    Strategic CSR
                  </span>
                </div>
              </div>

              {/* Value Checks */}
              <div className="space-y-2 text-xs text-slate-700">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-[#F68632] shrink-0" />
                  <span>{td.check1}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-[#F68632] shrink-0" />
                  <span>{td.check2}</span>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-2">
                <Link
                  href="/contact"
                  className="flex items-center justify-center space-x-2 w-full py-4 rounded-xl bg-[#F68632] text-white font-bold text-sm hover:bg-[#E07418] active:scale-[0.98] transition-all shadow-md"
                >
                  <span>{td.donateBtn}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="pt-1 text-center">
                <Link
                  href="/about"
                  className="text-xs font-semibold text-slate-500 hover:text-slate-800 underline"
                >
                  {td.trustLink}
                </Link>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
