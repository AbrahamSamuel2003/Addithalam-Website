"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { galleryEvents, GalleryItem } from "@/data/galleryData";
import PageHero from "@/components/layout/PageHero";
import { useLanguage } from "@/context/LanguageContext";
import { MapPin, Calendar, X, MessageSquare } from "lucide-react";

export default function GalleryPage() {
  const { t, lang } = useLanguage();
  const g = t.galleryPage;
  const isTa = lang === "ta";

  const [selectedPhoto, setSelectedPhoto] = useState<GalleryItem | null>(null);

  // Divide the events: First is Aspire Session, rest are Freedom Carnival
  const aspireEvent = galleryEvents[0];
  const carnivalEvents = galleryEvents.slice(1);
  const carnivalRow1 = carnivalEvents.slice(0, 4); // 4 cards in Row 1
  const carnivalRow2 = carnivalEvents.slice(4, 7); // 3 cards in Row 2 (centered)

  return (
    <div className="bg-[#FAF8F5]">
      {/* Immersive PageHero with Background Image */}
      <PageHero
        badge={g.heroBadge}
        title={g.heroTitle}
        subtitle={g.heroSubtitle}
        backgroundImage="/images/hero/hero-student-lab.jpg"
      />

      {/* Main Gallery Section */}
      <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* ========================================================================= */}
        {/* STORY 1: ASPIRE SESSION 2 (FEATURED WORKSHOP SPOTLIGHT - A4 SECTION)      */}
        {/* ========================================================================= */}
        <div className="space-y-6">
          {/* Section Heading at the top */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-2">
              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#231F20]">
                {isTa ? aspireEvent.titleTa : aspireEvent.title}
              </h2>
              <p className="text-sm sm:text-base font-bold text-[#231F20]">
                {isTa ? aspireEvent.subtitleTa : aspireEvent.subtitle}
              </p>
            </div>

            <div className="flex items-center space-x-2 text-xs font-semibold text-slate-500 bg-white px-3.5 py-2 rounded-xl border border-[#EFECE8] shrink-0">
              <MapPin className="w-3.5 h-3.5 text-[#F68632]" />
              <span>{isTa ? aspireEvent.venueTa : aspireEvent.venue}</span>
            </div>
          </div>

          {/* Main Content Card (A4 Document Format) */}
          <div className="max-w-5xl mx-auto rounded-3xl border border-[#EFECE8] bg-white overflow-hidden shadow-xs hover:border-[#F68632]/40 transition-all">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
              
              {/* Image Preview Slot (Clean container, no dark bg) */}
              <div 
                onClick={() => setSelectedPhoto(aspireEvent)}
                className="lg:col-span-5 relative cursor-pointer group min-h-[360px] sm:min-h-[440px] flex items-center justify-center p-4 sm:p-6 overflow-hidden bg-white border-b lg:border-b-0 lg:border-r border-[#EFECE8]"
              >
                <div className="relative w-full h-full min-h-[340px] sm:min-h-[420px]">
                  <Image
                    src={aspireEvent.image}
                    alt={isTa ? aspireEvent.titleTa : aspireEvent.title}
                    fill
                    className="object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                    sizes="(max-width: 1024px) 100vw, 45vw"
                    priority
                  />
                </div>
              </div>

              {/* Story & Context Details */}
              <div className="lg:col-span-7 p-7 sm:p-10 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500">
                    <span className="inline-flex items-center space-x-1.5 font-semibold text-slate-700">
                      <Calendar className="w-3.5 h-3.5 text-[#F68632]" />
                      <span>{aspireEvent.date}</span>
                    </span>
                    <span>•</span>
                    <span className="inline-flex items-center space-x-1.5 font-semibold text-slate-700">
                      <MapPin className="w-3.5 h-3.5 text-[#F68632]" />
                      <span>{isTa ? aspireEvent.venueTa : aspireEvent.venue}</span>
                    </span>
                  </div>

                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    {isTa ? aspireEvent.descriptionTa : aspireEvent.description}
                  </p>

                  {/* Tags */}
                  <div className="pt-2">
                    <p className="text-xs font-bold text-[#231F20] uppercase tracking-wider mb-2">
                      {g.focusAreas}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {(isTa ? aspireEvent.tagsTa : aspireEvent.tags).map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 rounded-md bg-[#FAF8F5] border border-[#EFECE8] text-xs font-semibold text-slate-700"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#EFECE8] flex items-center justify-end">
                  <Link
                    href="/contact"
                    className="inline-flex items-center space-x-1.5 px-5 py-2.5 rounded-lg bg-[#F68632] text-white text-xs font-bold hover:bg-[#E07418] transition-colors shadow-xs"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>{g.shareMission}</span>
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* STORY 2: FREEDOM CARNIVAL 2026 (4 IN ROW 1, 3 CENTERED IN ROW 2)          */}
        {/* ========================================================================= */}
        <div className="space-y-6 pt-4 border-t border-[#EFECE8]">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-2">
              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#231F20]">
                {isTa ? "ஃப்ரீடம் திருவிழா 2026 — வேல்ஸ் பல்கலைக்கழகம்" : "Freedom Carnival 2026 — Vels University, Chennai"}
              </h2>
              <p className="text-sm sm:text-base text-slate-600 max-w-2xl">
                {isTa 
                  ? "ஊருணி அறக்கட்டளையுடன் இணைந்து வேல்ஸ் பல்கலைக்கழகத்தில் நடைபெற்ற ஃப்ரீடம் திருவிழா 2026-ல் அடித்தளம் அறக்கட்டளையின் தன்னார்வலர் பணிகள் மற்றும் சிறப்புத் தருணங்கள்."
                  : "Moments of youth leadership, on-ground crowd facilitation, and social impact partnership alongside Ooruni Foundation at Vels University, Chennai."}
              </p>
            </div>

            <div className="flex items-center space-x-2 text-xs font-semibold text-slate-500 bg-white px-3.5 py-2 rounded-xl border border-[#EFECE8] shrink-0">
              <MapPin className="w-3.5 h-3.5 text-[#F68632]" />
              <span>Vels University, Chennai</span>
            </div>
          </div>

          <div className="space-y-6">
            {/* Row 1: 4 Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {carnivalRow1.map((item) => (
                <div
                  key={item.id}
                  onClick={() => setSelectedPhoto(item)}
                  className="group flex flex-col justify-between bg-white rounded-2xl border border-[#EFECE8] overflow-hidden shadow-xs hover:border-[#F68632]/50 hover:shadow-md transition-all cursor-pointer"
                >
                  {/* Photo Thumbnail Container */}
                  <div className="relative aspect-[4/5] bg-white overflow-hidden flex items-center justify-center p-2 border-b border-[#EFECE8]">
                    <Image
                      src={item.image}
                      alt={isTa ? item.titleTa : item.title}
                      fill
                      className="object-contain transition-transform duration-500 group-hover:scale-[1.03]"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  </div>

                  {/* Card Information */}
                  <div className="p-4 space-y-2 flex-1 flex flex-col justify-between">
                    <div className="space-y-1">
                      <h3 className="font-heading font-bold text-sm text-[#231F20] leading-snug group-hover:text-[#F68632] transition-colors">
                        {isTa ? item.titleTa : item.title}
                      </h3>
                      <p className="text-xs text-slate-500 line-clamp-2">
                        {isTa ? item.subtitleTa : item.subtitle}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-[#EFECE8] flex items-center justify-between text-[11px] text-slate-500 font-medium">
                      <span>{item.date}</span>
                      <span className="text-[#F68632] font-bold group-hover:underline">
                        {isTa ? "காண்க →" : "View →"}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Row 2: 3 Cards Centered in the middle with equal padding on both sides */}
            <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {carnivalRow2.map((item) => (
                <div
                  key={item.id}
                  onClick={() => setSelectedPhoto(item)}
                  className="group flex flex-col justify-between bg-white rounded-2xl border border-[#EFECE8] overflow-hidden shadow-xs hover:border-[#F68632]/50 hover:shadow-md transition-all cursor-pointer"
                >
                  {/* Photo Thumbnail Container */}
                  <div className="relative aspect-[4/5] bg-white overflow-hidden flex items-center justify-center p-2 border-b border-[#EFECE8]">
                    <Image
                      src={item.image}
                      alt={isTa ? item.titleTa : item.title}
                      fill
                      className="object-contain transition-transform duration-500 group-hover:scale-[1.03]"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>

                  {/* Card Information */}
                  <div className="p-4 space-y-2 flex-1 flex flex-col justify-between">
                    <div className="space-y-1">
                      <h3 className="font-heading font-bold text-sm text-[#231F20] leading-snug group-hover:text-[#F68632] transition-colors">
                        {isTa ? item.titleTa : item.title}
                      </h3>
                      <p className="text-xs text-slate-500 line-clamp-2">
                        {isTa ? item.subtitleTa : item.subtitle}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-[#EFECE8] flex items-center justify-between text-[11px] text-slate-500 font-medium">
                      <span>{item.date}</span>
                      <span className="text-[#F68632] font-bold group-hover:underline">
                        {isTa ? "காண்க →" : "View →"}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </section>

      {/* ========================================================================= */}
      {/* INTERACTIVE LIGHTBOX MODAL PREVIEW                                        */}
      {/* ========================================================================= */}
      {selectedPhoto && (
        <div 
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 overflow-y-auto animate-in fade-in duration-200"
          onClick={() => setSelectedPhoto(null)}
        >
          <div 
            className="bg-white rounded-3xl max-w-4xl w-full max-h-[92vh] overflow-y-auto border border-slate-200 shadow-2xl relative my-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Close Button */}
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 z-20 p-2 rounded-full bg-slate-900/80 text-white hover:bg-[#F68632] transition-colors shadow-md"
              aria-label={g.closeModal}
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Content Grid */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
              
              {/* Image Preview (7 Cols) */}
              <div className="md:col-span-7 bg-white flex items-center justify-center p-4 sm:p-6 min-h-[380px] sm:min-h-[500px] relative rounded-t-3xl md:rounded-tr-none md:rounded-l-3xl border-b md:border-b-0 md:border-r border-[#EFECE8]">
                <div className="relative w-full h-[360px] sm:h-[480px]">
                  <Image
                    src={selectedPhoto.image}
                    alt={isTa ? selectedPhoto.titleTa : selectedPhoto.title}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 60vw"
                    priority
                  />
                </div>
              </div>

              {/* Details Pane (5 Cols) */}
              <div className="md:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-6 bg-white rounded-b-3xl md:rounded-bl-none md:rounded-r-3xl">
                <div className="space-y-4">
                  <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-slate-500">
                    <span className="flex items-center space-x-1 text-slate-700">
                      <Calendar className="w-3.5 h-3.5 text-[#F68632]" />
                      <span>{selectedPhoto.date}</span>
                    </span>
                    <span>•</span>
                    <span className="flex items-center space-x-1 text-slate-700">
                      <MapPin className="w-3.5 h-3.5 text-[#F68632]" />
                      <span>{isTa ? selectedPhoto.venueTa : selectedPhoto.venue}</span>
                    </span>
                  </div>

                  <h3 className="font-heading font-extrabold text-xl text-[#231F20] leading-snug">
                    {isTa ? selectedPhoto.titleTa : selectedPhoto.title}
                  </h3>

                  <p className="text-xs font-bold text-[#F68632]">
                    {isTa ? selectedPhoto.subtitleTa : selectedPhoto.subtitle}
                  </p>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {isTa ? selectedPhoto.descriptionTa : selectedPhoto.description}
                  </p>

                  {/* Tags */}
                  <div className="pt-2">
                    <p className="text-[11px] font-bold text-[#231F20] uppercase tracking-wider mb-2">
                      {g.focusAreas}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {(isTa ? selectedPhoto.tagsTa : selectedPhoto.tags).map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-md bg-[#FAF8F5] border border-[#EFECE8] text-[11px] font-medium text-slate-700"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#EFECE8] flex items-center justify-between">
                  <button
                    onClick={() => setSelectedPhoto(null)}
                    className="px-4 py-2 rounded-xl bg-slate-100 text-slate-700 font-bold text-xs hover:bg-slate-200 transition-colors"
                  >
                    {g.closeModal}
                  </button>
                  <Link
                    href="/contact"
                    className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-xl bg-[#F68632] text-white text-xs font-bold hover:bg-[#E07418] transition-colors shadow-xs"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>{g.shareMission}</span>
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </div>
      )}

    </div>
  );
}

