import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import ProjectCard from "./ProjectCard";
import { useSectionData } from "../hooks/useSectionData";
import { useAppContext } from "../context/AppContext";
import React, { useState } from "react";
import { motion } from "framer-motion";

export default function ProjectCarousel() {
  const projects = useSectionData("projects");

  const { locale } = useAppContext();
  const [currentSlide, setCurrentSlide] = useState(0);

  // Slider ref ve instance
  const [sliderRef, slider] = useKeenSlider({
    loop: true,
    slides: {
      perView: 1,
      spacing: 0,
      origin: "center",
    },
    breakpoints: {
      "(min-width: 900px)": {
        slides: { perView: 1.7, spacing: 32, origin: "center" },
      },
      "(min-width: 1260px)": {
        slides: { perView: 2.4, spacing: 48, origin: "center" },
      },
    },
    slideChanged(s) {
      setCurrentSlide(s.track.details.rel);
    },
  });

  if (!projects) return null;

  const myVariants = {
    offscreen: { y: 60, opacity: 0, scale: 0.5 },
    onscreen: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: { type: "spring", bounce: 0.3, duration: 2 },
    },
  };

  return (
    <section className="pt-16 pb-14 px-2 md:px-0 lg:pb-30 w-auto mx-auto dark:bg-[#484148]">
      <h2 className="text-4xl font-medium text-center leading-[100%] pb-12 text-[#0A0A14] dark:text-white font-inter">
        {locale === "tr" ? "Projeler" : "Projects"}
      </h2>
      <motion.div
        variants={myVariants}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: false, amount: 0.3 }}
        ref={sliderRef}
        className="keen-slider w-full max-w-7xl mx-auto"
      >
        {projects.map((project, idx) => (
          <div
            className="keen-slider__slide flex justify-center items-center md:items-stretch"
            key={idx}
          >
            <div className="h-auto max-w-full md:w-[500px] md:h-[800px]">
              <ProjectCard project={project} />
            </div>
          </div>
        ))}
      </motion.div>
      {/* Dot navigation */}
      <div className="flex justify-center mt-6 gap-3">
        {projects.map((_, idx) => (
          <button
            key={idx}
            aria-label={`Slide ${idx + 1}`}
            onClick={() => slider.current?.moveToIdx(idx)}
            className={`w-3 h-3 rounded-full transition-all duration-300
              ${
                currentSlide === idx
                  ? "bg-pink-500 scale-125 shadow"
                  : "bg-gray-300 dark:bg-gray-400 opacity-60"
              }`}
          ></button>
        ))}
      </div>
    </section>
  );
}
