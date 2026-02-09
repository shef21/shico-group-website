import FadeIn from "@/components/ui/FadeIn";

const processSteps = [
  {
    step: "01",
    title: "Discovery & Strategy",
    description:
      "We begin by understanding your business objectives, challenges, and opportunities. Through collaborative consultation, we develop a strategic roadmap aligned with your goals.",
  },
  {
    step: "02",
    title: "Planning & Design",
    description:
      "Our team creates detailed plans and designs tailored to your specific needs. We establish clear timelines, milestones, and success metrics before execution begins.",
  },
  {
    step: "03",
    title: "Execution & Implementation",
    description:
      "With your approval, we execute the plan with precision and transparency. Regular communication ensures you stay informed and can provide input throughout the process.",
  },
  {
    step: "04",
    title: "Optimization & Scale",
    description:
      "We monitor results, gather feedback, and continuously optimize. Our partnership extends beyond delivery to help you scale and achieve long-term success.",
  },
];

export default function HowWeWork() {
  return (
    <section className="bg-white border-t border-black/5 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <FadeIn className="max-w-3xl mb-16">
          <div className="h-1 w-12 bg-accent mb-6" />
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            How We Work
          </h2>
          <p className="text-xl sm:text-2xl text-black/80 leading-relaxed text-left">
            A structured approach that ensures clarity, accountability, and
            results at every stage of our partnership.
          </p>
        </FadeIn>

        {/* Process Steps */}
        <FadeIn className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {processSteps.map((step, index) => (
            <div key={index} className="flex flex-col">
              {/* Step Number with Accent Line */}
              <div className="flex items-center gap-4 mb-4">
                <span className="text-2xl sm:text-3xl font-bold text-black/20">
                  {step.step}
                </span>
                <div className="h-px bg-accent flex-1" />
              </div>

              {/* Step Title */}
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                {step.title}
              </h3>

              {/* Step Description */}
              <p className="text-lg text-black/80 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </FadeIn>
      </div>
    </section>
  );
}
