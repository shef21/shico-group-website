import ServiceSection from "./ServiceSection";

const servicesData = [
  {
    title: "Construction",
    description:
      "The Shico Group delivers industrial, commercial, and residential construction solutions with a focus on safety, compliance, and long-term performance. From complex industrial maintenance to public infrastructure and residential builds, we manage every detail so you don’t have to.\n\nWhether you’re operating a factory, managing public infrastructure, or developing property, our role is simple: solve the problem properly, reduce risk, and leave you with a finished result you can trust — today and years from now.",
    quote:
      "Construction built to last. Managed to give you peace of mind.",
    capabilities: [
      "Industrial construction & maintenance specialists",
      "Epoxy flooring & high-performance surface systems",
      "Road resurfacing & paving solutions",
      "School, housing & residential builds",
      "Full compliance, safety & regulatory oversight",
    ],
    backgroundColor: "white" as const,
    reverse: false,
    hideCapabilities: false,
  },
  {
    title: "Software Development",
    description:
      "Custom software solutions engineered to drive measurable business growth. We build scalable applications that streamline operations, enhance user experiences, and deliver competitive advantages.",
    quote: "Software That Brings Clarity, Control, and Better Decisions",
    capabilities: [
      "Custom applications tailored to your needs",
      "Scalable architecture for future growth",
      "Performance optimization and maintenance",
    ],
    backgroundColor: "gray" as const,
    reverse: true,
  },
  {
    title: "Business Consulting",
    description:
      "Strategic guidance that transforms operations and accelerates growth. We analyze, optimize, and implement solutions that improve efficiency, reduce costs, and position your business for long-term success.",
    capabilities: [
      "Strategic planning and process optimization",
      "Operational efficiency and cost reduction",
      "Change management and transformation",
    ],
    backgroundColor: "white" as const,
    reverse: false,
  },
  {
    title: "Media & Marketing",
    description:
      "Integrated marketing strategies that amplify your brand and drive measurable results. We create compelling campaigns that connect with your audience and deliver ROI across all channels.",
    capabilities: [
      "Multi-channel campaign development and execution",
      "Brand positioning and market penetration",
      "Data-driven optimization and performance tracking",
    ],
    backgroundColor: "gray" as const,
    reverse: true,
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
          backgroundColor={service.backgroundColor}
          reverse={service.reverse}
        />
      ))}
    </section>
  );
}
