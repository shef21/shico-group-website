import { brandName, positioningStatement } from "@/lib/brand";
import FadeIn from "@/components/ui/FadeIn";

export default function About() {
  return (
    <section id="about" className="bg-gray-50 border-t border-black/5 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <FadeIn className="max-w-4xl">
          {/* Section Header */}
          <div className="h-1 w-12 bg-accent mb-6" />
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-8">
            About {brandName}
          </h2>

          {/* Mission Statement */}
          <div className="mb-12">
            <p className="text-xl sm:text-2xl text-black/90 leading-relaxed mb-6 text-left">
              {positioningStatement}
            </p>
            <p className="text-lg sm:text-xl text-black/80 leading-relaxed text-left">
              We combine expertise across multiple disciplines to deliver
              integrated solutions that drive measurable results.
            </p>
          </div>

          {/* Credibility Statements */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-8 border-t border-black/10">
            <div>
              <h3 className="text-2xl font-bold mb-2">Strategic Focus</h3>
              <p className="text-base text-black/80">
                Every project begins with understanding your business objectives
                and ends with measurable outcomes.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">Integrated Approach</h3>
              <p className="text-base text-black/80">
                Our multi-disciplinary expertise allows us to address complex
                challenges from multiple angles.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">Partnership Model</h3>
              <p className="text-base text-black/80">
                We work as an extension of your team, committed to your
                long-term success.
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
