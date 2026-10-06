"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Globe, Menu, X, MessageSquare } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Header() {
  const pathname = usePathname();
  const { lang, toggleLang, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  // Close menu instantly on route change or ESC
  const closeMenu = useCallback(() => {
    setMobileMenuOpen(false);
  }, []);

  useEffect(() => {
    closeMenu();
  }, [pathname, closeMenu]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [closeMenu]);

  // High-performance scroll tracking using requestAnimationFrame
  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          setScrolled(currentScrollY > 20);

          if (mobileMenuOpen) {
            setIsVisible(true);
            lastScrollY = currentScrollY;
            ticking = false;
            return;
          }

          if (currentScrollY > lastScrollY && currentScrollY > 80) {
            setIsVisible(false);
          } else if (currentScrollY < lastScrollY) {
            setIsVisible(true);
          }
          lastScrollY = currentScrollY;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [mobileMenuOpen]);

  const navT = t.nav;

  const navLinks = [
    { href: "/", label: navT.home },
    { href: "/about", label: navT.about },
    { href: "/programs", label: navT.programs },
    { href: "/impact", label: navT.impact },
    { href: "/gallery", label: navT.gallery },
    { href: "/team", label: navT.team },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-transform duration-200 ease-out will-change-transform ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-xs border-b border-[#EFECE8] py-2.5"
          : "bg-[#FAF8F5] border-b border-[#EFECE8] py-3.5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Official Brand Logo */}
        <Link
          href="/"
          prefetch={true}
          className="flex items-center space-x-2 focus:outline-none"
          aria-label="Addithalam Foundation Home"
          onClick={closeMenu}
        >
          <div className="relative h-10 sm:h-11 w-44 sm:w-48">
            <Image
              src="/images/logo/addithalam-logo.png"
              alt="Addithalam Foundation"
              fill
              priority
              className="object-contain object-left"
              sizes="(max-width: 640px) 176px, 192px"
            />
          </div>
        </Link>

        {/* Desktop Navigation (Instant 0-latency prefetching) */}
        <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
          {navLinks.map((link) => {
            const isActive = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                prefetch={true}
                className={`px-3.5 py-2 rounded-md text-sm font-medium transition-colors duration-100 ${
                  isActive
                    ? "text-[#F68632] bg-[#FFF2E7] font-bold"
                    : "text-[#231F20] hover:text-[#F68632] hover:bg-black/5"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right Actions: Language Switch & Contact Button */}
        <div className="hidden lg:flex items-center space-x-3">
          {/* Language Toggle Button */}
          <button
            onClick={toggleLang}
            type="button"
            className="flex items-center space-x-1.5 px-3 py-1.5 rounded-md text-xs font-semibold text-[#231F20] border border-slate-300 bg-white hover:bg-slate-50 transition-colors duration-100 active:scale-95 focus:outline-none cursor-pointer"
            title="Switch Language / மொழியை மாற்றவும்"
            aria-label="Switch between English and Tamil"
          >
            <Globe className="w-3.5 h-3.5 text-[#F68632]" />
            <span>{lang === "en" ? "தமிழ்" : "English"}</span>
          </button>

          {/* Contact CTA */}
          <Link
            href="/contact"
            prefetch={true}
            className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-lg bg-[#F68632] text-white text-sm font-bold hover:bg-[#E07418] active:scale-[0.98] transition-all duration-100 shadow-xs"
          >
            <MessageSquare className="w-4 h-4" />
            <span>{navT.donate}</span>
          </Link>
        </div>

        {/* Mobile Actions Button */}
        <div className="flex items-center space-x-2 lg:hidden">
          <button
            onClick={toggleLang}
            type="button"
            className="px-2.5 py-1 text-xs font-semibold text-[#231F20] border border-slate-300 rounded bg-white active:scale-95 transition-transform"
            aria-label="Switch Language"
          >
            {lang === "en" ? "தமிழ்" : "EN"}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            type="button"
            className="p-2 rounded-md text-[#231F20] hover:bg-slate-100 active:scale-90 transition-all duration-75 focus:outline-none cursor-pointer"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6 animate-in spin-in-90 duration-75" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* 0-Latency Hardware-Accelerated Mobile Drawer */}
      <div
        className={`lg:hidden fixed inset-x-0 top-[60px] sm:top-[65px] bg-white border-b border-slate-200 shadow-2xl px-4 pt-3 pb-6 space-y-2 z-50 transition-all duration-150 ease-out ${
          mobileMenuOpen
            ? "opacity-100 translate-y-0 pointer-events-auto visible"
            : "opacity-0 -translate-y-2 pointer-events-none invisible"
        }`}
        aria-hidden={!mobileMenuOpen}
      >
        <div className="space-y-1">
          {navLinks.map((link) => {
            const isActive = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                prefetch={true}
                onClick={closeMenu}
                className={`block px-3.5 py-2.5 rounded-lg text-base font-medium transition-colors duration-75 active:scale-[0.98] ${
                  isActive
                    ? "text-[#F68632] bg-[#FFF2E7] font-bold"
                    : "text-slate-800 hover:bg-slate-50"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <div className="pt-3 border-t border-slate-200 space-y-2">
          <Link
            href="/contact"
            prefetch={true}
            onClick={closeMenu}
            className="flex items-center justify-center space-x-2 w-full py-3 rounded-lg bg-[#F68632] text-white font-bold text-center active:scale-[0.98] transition-all duration-75 shadow-xs"
          >
            <MessageSquare className="w-5 h-5" />
            <span>{navT.donate}</span>
          </Link>
        </div>
      </div>

      {/* Instant Backdrop Overlay */}
      {mobileMenuOpen && (
        <div
          onClick={closeMenu}
          className="lg:hidden fixed inset-0 top-[60px] sm:top-[65px] bg-black/25 z-40 backdrop-blur-xs animate-in fade-in duration-100"
          aria-hidden="true"
        />
      )}
    </header>
  );
}
