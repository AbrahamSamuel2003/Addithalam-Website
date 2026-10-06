import React from "react";
import Image from "next/image";

interface PageHeroProps {
  badge?: string;
  title: string;
  subtitle?: string;
  backgroundImage: string;
  children?: React.ReactNode;
}

export default function PageHero({
  badge,
  title,
  subtitle,
  backgroundImage,
  children,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden py-10 sm:py-14 lg:py-16 bg-[#1A1A1A] text-white">
      {/* Background Image with Dark Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt={title}
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1A1A1A]/90 via-[#1A1A1A]/85 to-[#231F20]/90 sm:bg-gradient-to-r sm:from-[#1A1A1A]/95 sm:via-[#1A1A1A]/85 sm:to-[#231F20]/75" />
      </div>

      {/* Content Container (Centered on Mobile, Left-Aligned on Desktop) */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 flex flex-col items-center sm:items-start text-center sm:text-left">
        {badge && (
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-md bg-[#F68632]/20 border border-[#F68632]/40 text-[#F68632] text-xs font-bold uppercase tracking-wider animate-hero-1 mx-auto sm:mx-0">
            <span>{badge}</span>
          </div>
        )}

        <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight max-w-3xl animate-hero-1 mx-auto sm:mx-0">
          {title}
        </h1>

        {subtitle && (
          <p className="text-base sm:text-lg text-white/90 leading-relaxed max-w-2xl animate-hero-2 mx-auto sm:mx-0">
            {subtitle}
          </p>
        )}

        {children && <div className="pt-2 animate-hero-3 w-full flex justify-center sm:justify-start">{children}</div>}
      </div>
    </section>
  );
}
