"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  className?: string;
}

export default function FadeIn({ children, className = "" }: FadeInProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (typeof IntersectionObserver === "undefined") {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, []);

  const baseClasses =
    "transition-all duration-300 ease-out will-change-transform";
  const hiddenClasses = "opacity-90 translate-y-2";
  const visibleClasses = "opacity-100 translate-y-0";

  return (
    <div
      ref={ref}
      className={`${baseClasses} ${
        isVisible ? visibleClasses : hiddenClasses
      } ${className}`}
    >
      {children}
    </div>
  );
}

