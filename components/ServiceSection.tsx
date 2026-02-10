import { ReactNode } from "react";
import FadeIn from "@/components/ui/FadeIn";
import ServiceCapabilities, {
  type CapabilityItem,
} from "@/components/ServiceCapabilities";

interface ServiceSectionProps {
  title: string;
  description: string;
  capabilities: CapabilityItem[];
  quote?: string;
  hideCapabilities?: boolean;
  visualPlaceholder?: ReactNode;
  backgroundColor?: "white" | "gray";
  reverse?: boolean;
  splitCapabilitiesAcrossColumns?: boolean;
  titleAccent?: "left-line" | "right-line";
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
  splitCapabilitiesAcrossColumns = false,
  titleAccent,
}: ServiceSectionProps) {
  const bgColor = backgroundColor === "gray" ? "bg-gray-50" : "bg-white";
  const visualColumnClasses = [
    reverse ? "lg:order-1" : "",
    // When there is a quote (like Construction), offset the media down
    // so it visually aligns with the italic intro line rather than the heading.
    quote ? "lg:mt-24" : "",
  ]
    .join(" ")
    .trim();

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
              {titleAccent === "left-line" ? (
                <div className="mb-6 flex items-center gap-4">
                  <div className="hidden sm:block h-px bg-accent flex-1 -ml-[50vw]" />
                  <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
                    {title}
                  </h2>
                </div>
              ) : titleAccent === "right-line" ? (
                <div className="mb-6 flex items-center gap-4">
                  <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
                    {title}
                  </h2>
                  <div className="hidden sm:block h-px bg-accent flex-1 -mr-[50vw]" />
                </div>
              ) : (
                <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
                  {title}
                </h2>
              )}
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

            </div>

            {/* Visual Placeholder */}
            <div className={visualColumnClasses}>
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

          {/* Unified Capabilities Grid (full-width, below text + media) */}
          {!hideCapabilities &&
            Array.isArray(capabilities) &&
            capabilities.length > 0 && (
              <ServiceCapabilities
                items={capabilities}
                className="mt-10"
                header={
                  <div
                    className="mb-6 h-px w-full max-w-[220px] bg-accent/70 mx-auto"
                    aria-hidden="true"
                  />
                }
              />
            )}
        </FadeIn>
      </div>
    </section>
  );
}
