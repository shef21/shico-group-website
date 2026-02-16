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

          {/* Content */}
          <div className="mb-12">
            <p className="text-xl sm:text-2xl text-black/90 leading-relaxed mb-6 text-left italic">
              "A Family Legacy Driving Your Business Forward Since 1995"
            </p>
            <p className="text-lg sm:text-xl text-black/80 leading-relaxed mb-6 text-left">
              Founded in 1995, The Shico Group is a family-run business built on trust, integrity, and a passion for helping companies grow. From our early days working alongside public and private sector clients, to today serving businesses across multiple industries, we have always focused on delivering practical solutions that create real results.
            </p>
            <p className="text-lg sm:text-xl text-black/80 leading-relaxed mb-6 text-left">
              Our leadership is deeply personal: our father, mother, and son work together to ensure every project, every client, and every solution receives the care and attention it deserves. This family approach gives our clients a sense of reliability, confidence, and peace of mind — knowing they have a partner who truly understands their business.
            </p>
            <p className="text-lg sm:text-xl text-black/80 leading-relaxed mb-6 text-left">
              We specialize in Construction, Software Development, Business Consulting, and Media & Marketing, offering each service individually or as a fully integrated package. Our team brings decades of combined experience to tackle your most complex challenges, from industrial construction projects and AI-powered software solutions to strategic business consulting and high-end media production.
            </p>
            <p className="text-lg sm:text-xl text-black/80 leading-relaxed mb-6 text-left">
              At The Shico Group, we don't just provide services — we deliver ease of mind, efficient solutions, and lasting results. Our goal is to make running your business simpler, smarter, and more profitable, so you can focus on what truly matters.
            </p>
            <p className="text-lg sm:text-xl text-black/80 leading-relaxed text-left">
              Experience the difference of a partner who cares as much about your success as you do — The Shico Group.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
