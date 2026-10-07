"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ShieldCheck, Mail, MapPin, ArrowRight } from "lucide-react";
import { trustData } from "@/data/trustData";
import SocialIcon from "@/components/ui/SocialIcon";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t, lang } = useLanguage();
  const fT = t.footer;

  const programsList = [
    { href: "/programs/technical-skills", en: "IT Technical Skills", ta: "தகவல் தொழில்நுட்ப திறன்கள்" },
    { href: "/programs/soft-skills", en: "Soft Skills & Communication", ta: "மென்திறன் & உரையாடல் பயிற்சி" },
    { href: "/programs/mentorship", en: "1-on-1 Mentorship", ta: "நேரடி வழிகாட்டல் (Mentorship)" },
    { href: "/programs/career-guidance", en: "Career Guidance", ta: "தொழில் வழிகாட்டுதல்" },
    { href: "/programs/college-training", en: "College Student Training", ta: "கல்லூரி மாணவர் சிறப்புப் பயிற்சி" },
    { href: "/programs/women-in-tech", en: "Women Empowerment in Tech", ta: "தொழில்நுட்பத்தில் பெண்கள்" },
  ];

  return (
    <footer className="bg-[#1A1A1A] text-white pt-12 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-slate-800 text-center md:text-left">
          
          {/* Column 1 & 2: Organization Snapshot & Logo */}
          <div className="lg:col-span-2 space-y-4 flex flex-col items-center md:items-start">
            <Link href="/" className="inline-block focus:outline-none" aria-label="Addithalam Foundation Home">
              <div className="relative h-12 w-52">
                <Image
                  src="/images/logo/addithalam-logo-white.avif"
                  alt="Addithalam Foundation"
                  fill
                  className="object-contain object-center md:object-left"
                />
              </div>
            </Link>

            <p className="text-slate-300 text-sm leading-relaxed max-w-sm mx-auto md:mx-0">
              {fT.tagline}
            </p>

            {/* Social Media Channels */}
            <div className="pt-2">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2.5 text-center md:text-left">
                {lang === "ta" ? "சமூக வலைத்தளங்கள்" : "Follow Our Channels"}
              </span>
              <div className="flex items-center justify-center md:justify-start space-x-2.5">
                {trustData.socials.map((social) => (
                  <a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-[#231F20] text-slate-300 hover:text-white hover:bg-[#F68632] border border-slate-700/80 transition-all flex items-center justify-center active:scale-95 shadow-xs"
                    aria-label={`Addithalam Foundation on ${social.platform}`}
                    title={social.platform}
                  >
                    <SocialIcon platform={social.platform} className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Tax & Registration Strip */}
            <div className="p-3.5 rounded-xl bg-[#231F20] border border-slate-700/80 space-y-1.5 text-xs text-slate-300 max-w-sm mx-auto md:mx-0 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start space-x-2 text-[#F68632] font-semibold">
                <ShieldCheck className="w-4 h-4" />
                <span>{fT.statutoryTrust}</span>
              </div>
              <p>{fT.registeredDetails}</p>
              <p className="text-slate-400">{fT.taxBenefitNote}</p>
            </div>
          </div>

          {/* Column 3: Quick Navigation */}
          <div className="space-y-3 flex flex-col items-center md:items-start">
            <h4 className="text-xs font-bold text-[#F68632] tracking-wider uppercase">
              {fT.exploreTitle}
            </h4>
            <ul className="space-y-2 text-sm text-slate-300 flex flex-col items-center md:items-start">
              <li>
                <Link href="/about" className="hover:text-[#F68632] transition-colors">
                  {fT.ourMissionStory}
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-[#F68632] transition-colors">
                  {lang === "ta" ? "புகைப்படங்கள் & களப் பணிகள்" : "Gallery & Groundwork"}
                </Link>
              </li>
              <li>
                <Link href="/impact" className="hover:text-[#F68632] transition-colors">
                  {fT.impactPlacements}
                </Link>
              </li>
              <li>
                <Link href="/team" className="hover:text-[#F68632] transition-colors">
                  {fT.leadershipTeam}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Programs Directory */}
          <div className="space-y-3 flex flex-col items-center md:items-start">
            <h4 className="text-xs font-bold text-[#F68632] tracking-wider uppercase">
              {fT.programsTitle}
            </h4>
            <ul className="space-y-2 text-sm text-slate-300 flex flex-col items-center md:items-start">
              {programsList.map((prog) => (
                <li key={prog.href}>
                  <Link href={prog.href} className="hover:text-[#F68632] transition-colors">
                    {lang === "ta" ? prog.ta : prog.en}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Support & Contact */}
          <div className="space-y-3 flex flex-col items-center md:items-start">
            <h4 className="text-xs font-bold text-[#F68632] tracking-wider uppercase">
              {fT.supportTitle}
            </h4>
            <ul className="space-y-2 text-sm text-slate-300 flex flex-col items-center md:items-start">
              <li>
                <Link href="/contact" className="hover:text-[#F68632] transition-colors flex items-center justify-center md:justify-start space-x-1">
                  <span>{fT.donate80G}</span>
                  <ArrowRight className="w-3 h-3 text-[#F68632]" />
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#F68632] transition-colors flex items-center justify-center md:justify-start space-x-1">
                  <span>{fT.volunteerInquiries}</span>
                  <ArrowRight className="w-3 h-3 text-[#F68632]" />
                </Link>
              </li>
            </ul>

            <div className="pt-2 text-xs text-slate-400 space-y-1 flex flex-col items-center md:items-start">
              <div className="flex items-center justify-center md:justify-start space-x-2">
                <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <span>{fT.locationChennai}</span>
              </div>
              <div className="flex items-center justify-center md:justify-start space-x-2">
                <Mail className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <a href={`mailto:${trustData.email}`} className="hover:text-white underline">
                  {trustData.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400 text-center md:text-left">
          <div>
            &copy; {new Date().getFullYear()} Addithalam Foundation. {fT.copyright}
          </div>

          <div className="flex items-center justify-center space-x-1.5 text-slate-400">
            <span>Built with Care by</span>
            <a
              href="https://ss40network.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#F68632] hover:text-white font-bold transition-colors underline decoration-slate-600 hover:decoration-[#F68632]"
            >
              SS40 Network
            </a>
          </div>

          <div className="flex items-center justify-center space-x-6">
            <Link href="/privacy" className="hover:text-white transition-colors">
              {fT.privacyPolicy}
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              {fT.termsOfService}
            </Link>
          </div>

          <div className="flex items-center justify-center space-x-3">
            {trustData.socials.map((social) => (
              <a
                key={social.platform}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-800/60 text-slate-400 hover:text-white hover:bg-[#F68632] transition-all flex items-center justify-center active:scale-95"
                aria-label={`Addithalam Foundation on ${social.platform}`}
                title={social.platform}
              >
                <SocialIcon platform={social.platform} className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
