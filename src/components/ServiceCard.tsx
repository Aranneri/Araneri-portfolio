import type { Service } from "@/types";
import { SafeImage } from "@/components/shared/SafeImage";
import { SafeLink } from "@/components/shared/SafeLink";
import { Sparkles, Users, Compass, ArrowRight } from "lucide-react";

interface ServiceCardProps {
  readonly service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  // Determine tailored icon based on service title
  const renderIcon = () => {
    const title = service.title.toLowerCase();
    const iconClass = "h-5 w-5 text-[#424b33]";

    if (title.includes("arathadam")) {
      return <Sparkles className={iconClass} />;
    }
    if (title.includes("kuralneri")) {
      return <Users className={iconClass} />;
    }
    return <Compass className={iconClass} />;
  };

  return (
    <div
      className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#f3e8d6] to-[#ebdcc4] hover:from-[#eae0cd] hover:to-[#ebdcc4] border border-[#424b33]/15 hover:border-[#424b33]/35 hover:shadow-[0_24px_48px_-12px_rgba(44,53,30,0.12),_0_0_20px_rgba(66,75,51,0.04)] transition-all duration-500 hover:-translate-y-2 flex flex-col h-full"
      data-section-card
    >
      {/* 1. Diagonal light-beam shimmer sweep across the card on hover */}
      <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-[1200ms] ease-out bg-gradient-to-r from-transparent via-[#424b33]/6 to-transparent -skew-x-12 pointer-events-none" />

      {/* 2. Ambient gold spotlight radial glow behind the top icon */}
      <div className="absolute top-0 left-0 w-24 h-24 bg-[#424b33]/5 rounded-full blur-2xl -translate-x-1/2 -translate-y-1/2 group-hover:bg-[#424b33]/10 group-hover:scale-150 transition-all duration-700 pointer-events-none" />

      {/* Image container frame */}
      <div className="relative w-full h-48 overflow-hidden bg-emerald-950/20">
        <SafeImage
          src={service.image.src}
          alt={service.image.alt}
          width={service.image.width}
          height={service.image.height}
          className="h-full w-full object-cover brightness-[0.92] saturate-[0.88] transition-transform duration-1000 group-hover:scale-105 group-hover:brightness-[0.88]"
        />
        {/* Soft edge-blended overlay vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#ebdcc4]/20 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* Card Content Column */}
      <div className="relative z-10 p-6 flex flex-col flex-1 justify-between space-y-4">
        <div className="space-y-3">
          {/* Header Row: Title & Tailored Icon */}
          <div className="flex items-center justify-between gap-3">
            <h3 className="text-xl md:text-2xl font-bold text-[#2c351e] group-hover:text-[#1b2410] transition-colors duration-300">
              {service.title}
            </h3>
            <div className="flex items-center justify-center w-9 h-9 rounded-full bg-[#424b33]/8 group-hover:bg-[#424b33]/15 transition-all duration-500 shadow-sm border border-[#424b33]/10">
              {renderIcon()}
            </div>
          </div>

          {/* Description Copy */}
          <p className="text-sm md:text-base leading-relaxed text-[#2c351e]/75 group-hover:text-[#2c351e]/90 transition-colors duration-300">
            {service.description}
          </p>
        </div>

        {/* CTA Link Trigger */}
        {service.externalHref ? (
          <div className="pt-2">
            <SafeLink
              href={service.externalHref}
              className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-[#424b33] hover:text-[#2c351e] transition-colors duration-300"
            >
              <span>Explore Program</span>
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#424b33]/10 group-hover:bg-[#424b33] group-hover:text-[#ebdcc4] transition-all duration-500">
                <ArrowRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-0.5" />
              </span>
            </SafeLink>
          </div>
        ) : null}
      </div>
    </div>
  );
}
