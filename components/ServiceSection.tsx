import { ReactNode } from "react";
import FadeIn from "@/components/ui/FadeIn";

interface ServiceSectionProps {
  title: string;
  description: string;
  capabilities: string[];
  quote?: string;
  hideCapabilities?: boolean;
  visualPlaceholder?: ReactNode;
  backgroundColor?: "white" | "gray";
  reverse?: boolean;
}

export default function ServiceSection({
  title,
  description,
  capabilities,
  quote,
  hideCapabilities,
  visualPlaceholder,
  backgroundColor = "white",
  reverse = false,
}: ServiceSectionProps) {
  const bgColor = backgroundColor === "gray" ? "bg-gray-50" : "bg-white";

  return (
    <section className={`${bgColor} py-16 lg:py-24`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <FadeIn>
          <div
            className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start ${
              reverse ? "lg:flex-row-reverse" : ""
            }`}
          >
            {/* Text Content */}
            <div className={reverse ? "lg:order-2" : ""}>
              <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
                {title}
              </h2>
              {quote && (
                <p className="text-lg sm:text-xl text-black/80 leading-relaxed mb-4 text-left italic">
                  “{quote}”
                </p>
              )}
              {description.split("\n\n").map((paragraph, index) => (
                <p
                  key={index}
                  className={`text-lg sm:text-xl text-black/80 leading-relaxed text-left ${
                    index === 0 ? "mb-4" : "mb-8"
                  }`}
                >
                  {paragraph}
                </p>
              ))}

              {/* Capabilities List */}
              {!hideCapabilities && capabilities.length > 0 && (
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
                  {capabilities.map((capability, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                      <span className="text-base sm:text-lg text-black/90 font-semibold">
                        {capability}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Visual Placeholder */}
            <div className={reverse ? "lg:order-1" : ""}>
              {visualPlaceholder || (
                <div className="relative w-full aspect-[4/3] border border-black/10 rounded-sm overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-black/30 text-xs tracking-wide uppercase">
                      Visual Placeholder
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
