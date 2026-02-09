import { positioningStatement } from "@/lib/brand";
import Button from "@/components/ui/Button";
import FadeIn from "@/components/ui/FadeIn";

export default function Hero() {

  return (
    <section className="relative bg-black text-white py-16 lg:py-24 overflow-hidden">
      {/* Background video */}
      <div className="pointer-events-none absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Dark overlay to ensure text readability */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Foreground content */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <FadeIn className="max-w-3xl">
          {/* Subtle accent line */}
          <div className="h-1 w-16 bg-accent mb-8" />

          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6 text-left">
            Build. Optimize. Scale.
          </h1>

          {/* Subheading */}
          <p className="text-xl sm:text-2xl text-white/80 leading-relaxed mb-10 max-w-2xl text-left">
            From construction and software development to business consulting and
            media &amp; marketing, The Shico Group delivers end-to-end solutions
            that remove complexity, solve real problems, and give you peace of
            mind by knowing the job is done, properly.
          </p>

          {/* CTA Button */}
          <Button href="#contact">Get Started</Button>
        </FadeIn>
      </div>
    </section>
  );
}
