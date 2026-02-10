import type { ReactNode } from "react";

export interface CapabilityItem {
  title: string;
  description?: string;
}

interface ServiceCapabilitiesProps {
  items: CapabilityItem[];
  className?: string;
  /** Optional header element to visually group the capabilities (e.g. an accent rule) */
  header?: ReactNode;
}

export default function ServiceCapabilities({
  items,
  className = "",
  header,
}: ServiceCapabilitiesProps) {
  if (!items || items.length === 0) return null;

  return (
    <div className={className}>
      {header}
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((item, index) => (
          <li key={index}>
            <article className="rounded-sm border border-black/5 bg-white/80 backdrop-blur-sm px-4 py-3 shadow-sm transition-all duration-150 hover:-translate-y-px hover:shadow-md hover:border-accent/70">
              <div className="flex items-center gap-3">
                {/* Subtle accent marker */}
                <div className="h-2 w-2 flex-shrink-0 rounded-full bg-accent/80" />
                <div>
                  <h3 className="text-sm sm:text-base font-semibold text-black">
                    {item.title}
                  </h3>
                </div>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </div>
  );
}

