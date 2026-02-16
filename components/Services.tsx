import ServiceSection from "./ServiceSection";
import type { CapabilityItem } from "./ServiceCapabilities";

const servicesData: {
  title: string;
  description: string;
  quote?: string;
  capabilities: CapabilityItem[];
  backgroundColor: "white" | "gray";
  reverse: boolean;
  hideCapabilities?: boolean;
  visualPlaceholder?: React.ReactNode;
  splitCapabilitiesAcrossColumns?: boolean;
  titleAccent?: "left-line" | "right-line";
}[] = [
  {
    title: "Construction",
    description:
      "The Shico Group delivers industrial, commercial, and residential construction solutions with a focus on safety, compliance, and long-term performance. From complex industrial maintenance to public infrastructure and residential builds, we manage every detail so you don’t have to.\n\nWhether you’re operating a factory, managing public infrastructure, or developing property, our role is simple: solve the problem properly, reduce risk, and leave you with a finished result you can trust — today and years from now.",
    quote:
      "Construction built to last. Managed to give you peace of mind.",
    capabilities: [
      {
        title: "Industrial construction & maintenance",
        description:
          "Delivery of complex industrial and commercial projects in active environments.",
      },
      {
        title: "Epoxy flooring & surface systems",
        description:
          "High-performance floors engineered for heavy use, safety, and compliance.",
      },
      {
        title: "Road resurfacing & paving",
        description:
          "Durable resurfacing and rehabilitation with minimal disruption to operations.",
      },
      {
        title: "Public & residential builds",
        description:
          "Schools, housing, and residential projects managed with industrial-grade rigor.",
      },
      {
        title: "Compliance, safety & oversight",
        description:
          "End-to-end regulatory, safety, and quality management across every project.",
      },
    ],
    backgroundColor: "white" as const,
    reverse: false,
    hideCapabilities: false,
    visualPlaceholder: (
      <div className="relative w-full aspect-[4/3] border border-black/10 rounded-sm overflow-hidden bg-black">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover"
        >
          <source src="/constructionvideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    ),
    splitCapabilitiesAcrossColumns: true,
    titleAccent: "right-line",
  },
  {
    title: "Software Development",
    description:
      "The Shico Group designs and builds custom software and applications tailored to how your business actually operates — not generic tools that force you to adapt. Our focus is simple: solve your biggest operational and decision-making challenges through intelligent, reliable technology.\n\nThe result is software that replaces uncertainty with clarity, intuition with insight, and complexity with control — giving you confidence that your decisions are backed by real data and built to support long-term growth.",
    quote: "Software That Brings Clarity, Control, and Better Decisions",
    capabilities: [
      { title: "Custom web & mobile application development" },
      { title: "Bespoke internal business systems" },
      { title: "Shico AI decision intelligence" },
      { title: "POS, financial & data integration" },
      { title: "Automation, analytics & optimisation" },
    ],
    backgroundColor: "gray" as const,
    reverse: true,
    visualPlaceholder: (
      <div className="relative w-full aspect-[4/3] border border-black/10 rounded-sm overflow-hidden bg-black">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover"
        >
          <source src="/softwaredevelopmentvideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    ),
    titleAccent: "left-line",
  },
  {
    title: "Business Consulting",
    description:
      "At The Shico Group, we provide comprehensive business consulting solutions designed to optimize your operations and drive measurable growth. Our team personally analyzes your business, evaluating its current position and identifying the strategies and systems required to improve efficiency, profitability, and long-term success.\n\nWe combine hands-on expertise with data-driven insights, ensuring every recommendation is practical, actionable, and tailored to your unique business goals. Our consultants include top-tier data analysis graduates from South Africa’s leading universities, equipped with the skills to translate complex data into clear strategies that solve your business’s most pressing challenges.\n\nWe’re not just consultants — we’re your strategic partner. With The Shico Group, you gain clarity, confidence, and peace of mind, knowing your business is guided by experts who ensure every decision is informed, every process optimized, and every goal achievable.",
    quote:
      "Strategic Business Consulting for Growth, Efficiency, and Clarity",
    capabilities: [
      { title: "Business Diagnostics." },
      { title: "Strategic Planning." },
      { title: "Data-Driven Decisions." },
      { title: "Performance Optimization." },
      { title: "Implementation Support." },
      { title: "Industry Insights." },
    ],
    backgroundColor: "white" as const,
    reverse: false,
    visualPlaceholder: (
      <div className="relative w-full max-w-xs sm:max-w-sm mx-auto aspect-[9/16] border border-black/10 rounded-sm overflow-hidden bg-black">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover"
        >
          <source src="/businessvideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    ),
    titleAccent: "right-line",
  },
  {
    title: "Media & Marketing",
    quote: "Elite Media & Marketing for Brands That Lead",
    description:
      "With just six years in the industry, The Shico Group has risen to the top, delivering strategic media, high-end content, and performance marketing that sets brands apart. We work with world-class clients such as Tyla, Table Mountain Aerial Cableway Company, Cape Royal Yacht Club, and Veldskoen.\n\nWe combine creative storytelling with data-driven marketing strategy to ensure every campaign delivers visibility, credibility, and measurable results.\n\nWith The Shico Group, media and marketing no longer feels chaotic or overwhelming. You gain clarity, confidence, and momentum, knowing your brand is represented at the highest level. Every campaign is intentional, every strategy precise — giving you the peace of mind that your brand is leading, not following.",
    capabilities: [
      { title: "Strategic Brand Positioning" },
      { title: "High-End Content Production" },
      { title: "Performance Advertising" },
      { title: "Digital Marketing Systems" },
      { title: "Creative Campaign Development" },
      { title: "Analytics & Optimization" },
    ],
    backgroundColor: "gray" as const,
    reverse: true,
    visualPlaceholder: (
      <div className="relative w-full aspect-square border border-black/10 rounded-sm overflow-hidden bg-black">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover"
        >
          <source src="/mediavideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    ),
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-white">
      {servicesData.map((service, index) => (
        <ServiceSection
          key={index}
          title={service.title}
          description={service.description}
          capabilities={service.capabilities}
          quote={service.quote}
          hideCapabilities={service.hideCapabilities}
          visualPlaceholder={service.visualPlaceholder}
          backgroundColor={service.backgroundColor}
          reverse={service.reverse}
          splitCapabilitiesAcrossColumns={service.splitCapabilitiesAcrossColumns}
          titleAccent={service.titleAccent}
        />
      ))}
    </section>
  );
}
