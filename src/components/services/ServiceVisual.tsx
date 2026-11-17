
import React from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Network,
  Megaphone,
  Search,
  Target,
  TrendingUp,
  Video,
  MessageSquare,
  BarChart3,
  Play,
  Layers,
} from "lucide-react";

type ServiceVisualProps = {
  kind: string;
};

type VisualConfig = {
  image: string;
  label: string;
  color: string;
};

const visualConfig: Record<string, VisualConfig> = {
  affiliate: {
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1400&q=90",
    label: "PARTNERSHIP ECOSYSTEM",
    color: "#7C3AED",
  },

  advertising: {
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=90",
    label: "PERFORMANCE MARKETING",
    color: "#2563EB",
  },

  seo: {
    image:
      "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?auto=format&fit=crop&w=1400&q=90",
    label: "ORGANIC GROWTH",
    color: "#059669",
  },

  branding: {
    image:
      "https://images.unsplash.com/photo-1634942536790-253e4f7b6e8b?auto=format&fit=crop&w=1400&q=90",
    label: "BRAND EXPERIENCE",
    color: "#DB2777",
  },

  strategy: {
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1400&q=90",
    label: "STRATEGIC THINKING",
    color: "#4F46E5",
  },

  video: {
    image:
      "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?auto=format&fit=crop&w=1400&q=90",
    label: "VISUAL STORYTELLING",
    color: "#EA580C",
  },

  content: {
    image:
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1400&q=90",
    label: "CONTENT STUDIO",
    color: "#9333EA",
  },
};

function ImageBackground({ config }: { config: VisualConfig }) {
  return (
    <>
      <motion.img
        src={config.image}
        alt={config.label}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.08 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />

      <div className="absolute inset-0 bg-gradient-to-t from-[#101024]/90 via-[#101024]/25 to-black/10" />

      <div
        className="absolute inset-0 opacity-40"
        style={{
          background: `linear-gradient(135deg, ${config.color}60, transparent 65%)`,
        }}
      />
    </>
  );
}

function HeaderLabel({ config }: { config: VisualConfig }) {
  return (
    <div className="absolute left-5 right-5 top-5 z-20 flex items-center justify-between">
      <div className="flex items-center gap-2 rounded-full border border-white/30 bg-white/15 px-3 py-2 backdrop-blur-xl">
        <span
          className="h-2 w-2 rounded-full"
          style={{ backgroundColor: config.color }}
        />

        <span className="text-[9px] font-semibold tracking-[0.16em] text-white">
          {config.label}
        </span>
      </div>

      <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/30 bg-white/15 text-white backdrop-blur-xl">
        <ArrowUpRight size={16} />
      </div>
    </div>
  );
}

function FooterLabel() {
  return (
    <div className="absolute bottom-5 left-5 right-5 z-20">
      <div className="mb-4 h-px w-full bg-white/30" />

      <div className="flex items-center justify-between">
        <span className="text-[10px] font-medium tracking-[0.16em] text-white/70">
          AMIGO INTERACTIVE
        </span>

        <span className="text-xs font-medium text-white">
          Explore service ↗
        </span>
      </div>
    </div>
  );
}

function FloatingCard({
  icon,
  title,
  subtitle,
  color,
}: {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  color: string;
}) {
  return (
    <motion.div
      animate={{ y: [0, -6, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      className="absolute bottom-24 left-5 z-20 flex items-center gap-3 rounded-2xl border border-white/25 bg-white/15 p-4 backdrop-blur-xl"
    >
      <div
        className="flex h-11 w-11 items-center justify-center rounded-xl text-white"
        style={{ backgroundColor: color }}
      >
        {icon}
      </div>

      <div>
        <p className="text-xs font-semibold text-white">{title}</p>
        <p className="mt-1 text-[10px] text-white/70">{subtitle}</p>
      </div>
    </motion.div>
  );
}

// Affiliate Partnerships
function AffiliateVisual() {
  const config = visualConfig.affiliate;

  return (
    <div className="group relative h-full min-h-[320px] overflow-hidden rounded-[28px] bg-violet-100">
      <ImageBackground config={config} />
      <HeaderLabel config={config} />

      <FloatingCard
        icon={<Network size={22} />}
        title="Partner network"
        subtitle="Connected for growth"
        color={config.color}
      />

      <FooterLabel />
    </div>
  );
}

// Digital Advertising
function AdvertisingVisual() {
  const config = visualConfig.advertising;

  return (
    <div className="group relative h-full min-h-[320px] overflow-hidden rounded-[28px] bg-blue-100">
      <ImageBackground config={config} />
      <HeaderLabel config={config} />

      <FloatingCard
        icon={<BarChart3 size={22} />}
        title="Campaign insights"
        subtitle="Reach · Results · Growth"
        color={config.color}
      />

      <motion.div
        animate={{ rotate: [0, 4, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute right-5 top-24 z-20 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-xl"
      >
        <Megaphone size={22} />
      </motion.div>

      <FooterLabel />
    </div>
  );
}

// Search Growth & SEO
function SEOVisual() {
  const config = visualConfig.seo;

  return (
    <div className="group relative h-full min-h-[320px] overflow-hidden rounded-[28px] bg-emerald-100">
      <ImageBackground config={config} />
      <HeaderLabel config={config} />

      <FloatingCard
        icon={<Search size={22} />}
        title="Search visibility"
        subtitle="Organic growth"
        color={config.color}
      />

      <motion.div
        animate={{ scale: [1, 1.06, 1] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute right-5 top-24 z-20 flex items-center gap-2 rounded-xl border border-white/25 bg-white/15 px-3 py-2 text-white backdrop-blur-xl"
      >
        <TrendingUp size={18} />
        <span className="text-xs font-semibold">Growth</span>
      </motion.div>

      <FooterLabel />
    </div>
  );
}

// Brand Identity & Strategy
function BrandingVisual() {
  const config = visualConfig.branding;

  return (
    <div className="group relative h-full min-h-[320px] overflow-hidden rounded-[28px] bg-pink-100">
      <ImageBackground config={config} />
      <HeaderLabel config={config} />

      <FloatingCard
        icon={<Target size={22} />}
        title="Brand identity"
        subtitle="Built to stand out"
        color={config.color}
      />

      <FooterLabel />
    </div>
  );
}

// Digital Strategy Planning
function StrategyVisual() {
  const config = visualConfig.strategy;

  return (
    <div className="group relative h-full min-h-[320px] overflow-hidden rounded-[28px] bg-indigo-100">
      <ImageBackground config={config} />
      <HeaderLabel config={config} />

      <FloatingCard
        icon={<Layers size={22} />}
        title="Growth roadmap"
        subtitle="Plan · Execute · Optimize"
        color={config.color}
      />

      <FooterLabel />
    </div>
  );
}

// Video Content Creation
function VideoVisual() {
  const config = visualConfig.video;

  return (
    <div className="group relative h-full min-h-[320px] overflow-hidden rounded-[28px] bg-orange-100">
      <ImageBackground config={config} />
      <HeaderLabel config={config} />

      <FloatingCard
        icon={<Play size={22} fill="currentColor" />}
        title="Video production"
        subtitle="Stories in motion"
        color={config.color}
      />

      <motion.div
        whileHover={{ scale: 1.1 }}
        className="absolute right-5 top-24 z-20 flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-500 text-white shadow-xl"
      >
        <Video size={22} />
      </motion.div>

      <FooterLabel />
    </div>
  );
}

// Content Marketing
function ContentVisual() {
  const config = visualConfig.content;

  return (
    <div className="group relative h-full min-h-[320px] overflow-hidden rounded-[28px] bg-purple-100">
      <ImageBackground config={config} />
      <HeaderLabel config={config} />

      <FloatingCard
        icon={<MessageSquare size={22} />}
        title="Content studio"
        subtitle="Create · Connect · Convert"
        color={config.color}
      />

      <motion.div
        animate={{ rotate: [0, 5, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute right-5 top-24 z-20 flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-600 text-white shadow-xl"
      >
        <SparklesIcon />
      </motion.div>

      <FooterLabel />
    </div>
  );
}

function SparklesIcon() {
  return <span className="text-xl">✦</span>;
}

const visuals: Record<string, React.FC> = {
  affiliate: AffiliateVisual,
  advertising: AdvertisingVisual,
  seo: SEOVisual,
  branding: BrandingVisual,
  strategy: StrategyVisual,
  video: VideoVisual,
  content: ContentVisual,
};

export function ServiceVisual({ kind }: ServiceVisualProps) {
  const Visual = visuals[kind] ?? AffiliateVisual;

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="h-full w-full"
    >
      <Visual />
    </motion.div>
  );
}
