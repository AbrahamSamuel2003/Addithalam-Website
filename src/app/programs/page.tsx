"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { programsData } from "@/data/programsData";
import { ArrowRight, CheckCircle2, Clock, MapPin, ChevronLeft, ChevronRight } from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import { useLanguage } from "@/context/LanguageContext";

export default function ProgramsPage() {
  const { t, lang } = useLanguage();
  const p = t.programsPage;
  const isTa = lang === "ta";

  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Sync active dot on mobile scroll
  const handleScroll = () => {
    if (!carouselRef.current) return;
    const container = carouselRef.current;
    const scrollLeft = container.scrollLeft;
    const cardWidth = container.offsetWidth * 0.88; // Approximate item step
    const newIndex = Math.round(scrollLeft / (cardWidth || 1));
    setActiveIndex(Math.min(Math.max(newIndex, 0), programsData.length - 1));
  };

  // Scroll smoothly to target slide when dot or arrow is clicked
  const scrollToSlide = (index: number) => {
    if (!carouselRef.current) return;
    const container = carouselRef.current;
    const cards = container.querySelectorAll<HTMLElement>(".mobile-program-card");
    if (cards[index]) {
      cards[index].scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
      setActiveIndex(index);
    }
  };

  const handlePrev = () => {
    if (activeIndex > 0) {
      scrollToSlide(activeIndex - 1);
    }
  };

  const handleNext = () => {
    if (activeIndex < programsData.length - 1) {
      scrollToSlide(activeIndex + 1);
    }
  };

  return (
    <div className="bg-[#FAF8F5]">
      {/* Immersive Hero with Background Image */}
      <PageHero
        badge={p.heroBadge}
        title={p.heroTitle}
        subtitle={p.heroSubtitle}
        backgroundImage="/images/audience/students-learning.jpg"
      />

      {/* Main Section */}
      <section className="py-10 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ========================================================================= */}
        {/* MOBILE VIEW: SWIPEABLE CAROUSEL WITH INDICATING DOTS (< md)               */}
        {/* ========================================================================= */}
        <div className="block md:hidden">
          {/* Scrollable Track */}
          <div
            ref={carouselRef}
            onScroll={handleScroll}
            className="flex overflow-x-auto snap-x snap-mandatory scrollbar-none gap-4 pb-4 px-2 -mx-2 items-stretch"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {programsData.map((program, idx) => {
              const title = isTa && program.titleTa ? program.titleTa : program.title;
              const shortDesc = isTa && program.shortDescriptionTa ? program.shortDescriptionTa : program.shortDescription;
              const badge = isTa && program.badgeTa ? program.badgeTa : program.badge;
              const duration = isTa && program.durationTa ? program.durationTa : program.duration;
              const mode = isTa && program.modeTa ? program.modeTa : program.mode;
              const skills = isTa && program.skillsTa ? program.skillsTa : program.skills;

              return (
                <div
                  key={program.id}
                  className="mobile-program-card w-[86vw] max-w-[340px] shrink-0 snap-center flex flex-col justify-between rounded-2xl border border-[#EFECE8] bg-white overflow-hidden shadow-xs"
                >
                  {/* Program Thumbnail */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                    <Image
                      src={program.image}
                      alt={title}
                      fill
                      className="object-cover"
                      sizes="86vw"
                      priority={idx === 0}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-3">
                      <span className="px-2.5 py-1 rounded-md bg-[#231F20]/85 backdrop-blur-md text-[#F68632] border border-[#F68632]/40 text-xs font-bold tracking-wide">
                        0{idx + 1} | {badge}
                      </span>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-5 flex flex-col justify-between flex-1 space-y-5">
                    <div className="space-y-3.5">
                      <div className="space-y-1.5">
                        <h2 className="font-heading font-bold text-lg text-[#231F20] leading-snug">
                          {title}
                        </h2>
                        <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                          {shortDesc}
                        </p>
                      </div>

                      <div className="p-3 rounded-xl bg-[#FAF8F5] space-y-1.5 text-xs text-slate-700 border border-[#EFECE8]">
                        <div className="flex items-center space-x-2">
                          <Clock className="w-3.5 h-3.5 text-[#F68632] shrink-0" />
                          <span><strong>{p.durationLabel}</strong> {duration}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <MapPin className="w-3.5 h-3.5 text-[#F68632] shrink-0" />
                          <span><strong>{p.modeLabel}</strong> {mode}</span>
                        </div>
                      </div>

                      <div className="space-y-1">
                        <p className="text-[11px] font-bold text-[#231F20] uppercase tracking-wider">
                          {p.topicsCovered}
                        </p>
                        <ul className="space-y-1 text-xs text-slate-600">
                          {skills.slice(0, 3).map((s) => (
                            <li key={s} className="flex items-center space-x-2">
                              <CheckCircle2 className="w-3 h-3 text-[#F68632] shrink-0" />
                              <span className="truncate">{s}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-[#EFECE8] flex items-center justify-between">
                      <Link
                        href={`/programs/${program.slug}`}
                        className="inline-flex items-center space-x-1.5 text-xs font-bold text-[#F68632]"
                      >
                        <span>{p.viewSyllabusBtn}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Carousel Pagination Controls: Arrows & Indicating Dots */}
          <div className="pt-4 flex items-center justify-between px-2">
            <button
              onClick={handlePrev}
              disabled={activeIndex === 0}
              className={`p-2 rounded-full border transition-all ${
                activeIndex === 0
                  ? "border-slate-200 text-slate-300 cursor-not-allowed"
                  : "border-slate-300 text-[#231F20] hover:bg-white active:scale-95 shadow-xs"
              }`}
              aria-label="Previous Program"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {/* Indicating Dots */}
            <div className="flex items-center space-x-2">
              {programsData.map((_, dotIdx) => (
                <button
                  key={dotIdx}
                  onClick={() => scrollToSlide(dotIdx)}
                  aria-label={`Go to program ${dotIdx + 1}`}
                  className={`transition-all duration-300 rounded-full ${
                    activeIndex === dotIdx
                      ? "w-6 h-2 bg-[#F68632]"
                      : "w-2 h-2 bg-slate-300 hover:bg-slate-400"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              disabled={activeIndex === programsData.length - 1}
              className={`p-2 rounded-full border transition-all ${
                activeIndex === programsData.length - 1
                  ? "border-slate-200 text-slate-300 cursor-not-allowed"
                  : "border-slate-300 text-[#231F20] hover:bg-white active:scale-95 shadow-xs"
              }`}
              aria-label="Next Program"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* DESKTOP & TABLET VIEW: STRUCTURED MULTI-COLUMN GRID (>= md)               */}
        {/* ========================================================================= */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programsData.map((program, idx) => {
            const title = isTa && program.titleTa ? program.titleTa : program.title;
            const shortDesc = isTa && program.shortDescriptionTa ? program.shortDescriptionTa : program.shortDescription;
            const badge = isTa && program.badgeTa ? program.badgeTa : program.badge;
            const duration = isTa && program.durationTa ? program.durationTa : program.duration;
            const mode = isTa && program.modeTa ? program.modeTa : program.mode;
            const skills = isTa && program.skillsTa ? program.skillsTa : program.skills;

            return (
              <div
                key={program.id}
                className="group flex flex-col justify-between rounded-2xl border border-[#EFECE8] bg-white overflow-hidden shadow-xs hover:border-[#F68632]/50 hover:shadow-xl transition-all duration-300"
              >
                {/* Program Thumbnail */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                  <Image
                    src={program.image}
                    alt={title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3">
                    <span className="px-2.5 py-1 rounded-md bg-[#231F20]/85 backdrop-blur-md text-[#F68632] border border-[#F68632]/40 text-xs font-bold tracking-wide">
                      0{idx + 1} | {badge}
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 sm:p-7 flex flex-col justify-between flex-1 space-y-6">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <h2 className="font-heading font-bold text-xl text-[#231F20] group-hover:text-[#F68632] transition-colors">
                        {title}
                      </h2>
                      <p className="text-sm text-slate-600 leading-relaxed line-clamp-3">
                        {shortDesc}
                      </p>
                    </div>

                    <div className="p-3.5 rounded-xl bg-[#FAF8F5] space-y-1.5 text-xs text-slate-700 border border-[#EFECE8]">
                      <div className="flex items-center space-x-2">
                        <Clock className="w-3.5 h-3.5 text-[#F68632]" />
                        <span><strong>{p.durationLabel}</strong> {duration}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-3.5 h-3.5 text-[#F68632]" />
                        <span><strong>{p.modeLabel}</strong> {mode}</span>
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <p className="text-xs font-bold text-[#231F20] uppercase tracking-wider">
                        {p.topicsCovered}
                      </p>
                      <ul className="space-y-1 text-xs text-slate-600">
                        {skills.slice(0, 4).map((s) => (
                          <li key={s} className="flex items-center space-x-2">
                            <CheckCircle2 className="w-3 h-3 text-[#F68632] shrink-0" />
                            <span className="truncate">{s}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[#EFECE8] flex items-center justify-between">
                    <Link
                      href={`/programs/${program.slug}`}
                      className="inline-flex items-center space-x-1.5 text-sm font-bold text-[#F68632] group-hover:translate-x-1 transition-transform"
                    >
                      <span>{p.viewSyllabusBtn}</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </section>
    </div>
  );
}

