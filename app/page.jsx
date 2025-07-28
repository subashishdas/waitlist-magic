"use client";
import Card from "@/components/Card";
import Hero from "@/components/Hero";
import { features } from "@/constants/constant";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [visibleSections, setVisibleSections] = useState(new Set());
  const featuresRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set([...prev, entry.target.id]));
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "50px 0px -50px 0px",
      }
    );

    if (featuresRef.current) {
      observer.observe(featuresRef.current);
    }
    if (ctaRef.current) {
      observer.observe(ctaRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div>
      <Hero />
      <section
        ref={featuresRef}
        id="features"
        className={`py-20 sm:py-24 lg:py-28 transition-all duration-1000 ${
          visibleSections.has("features")
            ? "animate-fade-in-up"
            : "opacity-0 translate-y-10"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Key Features
            </h2>
            <p className="text-lg mt-4 text-gray-400">
              Our platform offers a suite of powerful tools designed to
              streamline your workflow and boost your team's efficiency.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      <section
        ref={ctaRef}
        id="cta"
        className={`py-20 sm:py-24 lg:py-28 bg-[#182834] transition-all duration-1000 ${
          visibleSections.has("cta")
            ? "animate-fade-in-up"
            : "opacity-0 translate-y-10"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center text-center">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight max-w-2xl">
              Ready to Transform Your Workflow?
            </h2>
            <p className="text-lg text-gray-400 mt-4 max-w-3xl">
              Sign up for our waitlist today and be the first to know when we
              launch.
            </p>
            <button className="mt-8 flex min-w-[84px] items-center justify-center overflow-hidden h-12 sm:h-14 px-6 bg-blue-500 text-base font-bold tracking-wide hover:bg-blue-600 btn-hover-effect smooth-hover hover:shadow-xl hover:shadow-blue-500/25 hover:scale-105 active:scale-95 rounded-lg cursor-pointer">
              <span className="relative z-10">Join Waitlist</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
