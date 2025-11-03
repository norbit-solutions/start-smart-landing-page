"use client";
import { IconArrowNarrowRight } from "@tabler/icons-react";
import { useState, useRef, useId, useEffect } from "react";
import Image from "next/image";

interface TestimonialData {
  name: string;
  role?: string;
  company?: string;
  content: string;
  avatar: string;
  rating?: number;
}

interface TestimonialProps {
  testimonial: TestimonialData;
  index: number;
  current: number;
  handleTestimonialClick: (index: number) => void;
}

const Testimonial = ({
  testimonial,
  index,
  current,
  handleTestimonialClick,
}: TestimonialProps) => {
  const testimonialRef = useRef<HTMLDivElement>(null);
  const xRef = useRef(0);
  const yRef = useRef(0);
  const frameRef = useRef<number>(0);

  useEffect(() => {
    const animate = () => {
      if (!testimonialRef.current) return;
      const x = xRef.current;
      const y = yRef.current;
      testimonialRef.current.style.setProperty("--x", `${x}px`);
      testimonialRef.current.style.setProperty("--y", `${y}px`);
      frameRef.current = requestAnimationFrame(animate);
    };
    frameRef.current = requestAnimationFrame(animate);
    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, []);

  const handleMouseMove = (event: React.MouseEvent) => {
    const el = testimonialRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    xRef.current = event.clientX - (r.left + Math.floor(r.width / 2));
    yRef.current = event.clientY - (r.top + Math.floor(r.height / 2));
  };

  const handleMouseLeave = () => {
    xRef.current = 0;
    yRef.current = 0;
  };

  const { name, role, company, content, avatar, rating } = testimonial;

  const renderStars = (rating: number = 5) =>
    Array.from({ length: 5 }, (_, i) => (
      <span
        key={i}
        className={`text-sm md:text-lg ${
          i < rating ? "text-yellow-400" : "text-gray-300"
        }`}
      >
        ★
      </span>
    ));

  return (
    <div
      ref={testimonialRef}
      className="relative flex flex-col bg-white dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700 shadow-lg rounded-2xl w-full h-full cursor-pointer hover:shadow-xl transition-transform duration-600"
      onClick={() => handleTestimonialClick(index)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform:
          current !== index
            ? "scale(0.96) rotateX(6deg)"
            : "scale(1) rotateX(0deg)",
        transformOrigin: "bottom",
      }}
    >
      <div
        className="absolute inset-0 rounded-2xl pointer-events-none"
        style={{
          transform:
            current === index
              ? "translate3d(calc(var(--x) / 30), calc(var(--y) / 30), 0)"
              : "none",
          transition: "transform 120ms linear",
        }}
      />

      <article
        className={`relative p-4 md:p-6 flex flex-col h-full transition-opacity duration-500 ${
          current === index ? "opacity-100" : "opacity-60"
        }`}
      >
        <div className="mb-3">{renderStars(rating)}</div>

        <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base leading-relaxed flex-grow mb-4 italic">
          “{content}”
        </p>

        <div className="flex items-center mt-auto">
          <div className="relative w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden mr-3 flex-shrink-0">
            <Image
              src={avatar}
              alt={name}
              fill
              className="object-cover"
              sizes="40px"
            />
          </div>
          <div>
            <h3 className="font-bold text-gray-900 dark:text-white text-sm md:text-base">
              {name}
            </h3>
            {(role || company) && (
              <p className="text-gray-500 dark:text-gray-400 text-xs md:text-sm">
                {role}
                {role && company ? " at " : ""}
                {company}
              </p>
            )}
          </div>
        </div>
      </article>
    </div>
  );
};

interface CarouselControlProps {
  type: "previous" | "next";
  title: string;
  handleClick: () => void;
}

const CarouselControl = ({
  type,
  title,
  handleClick,
}: CarouselControlProps) => {
  return (
    <button
      className={`w-8 h-8 md:w-10 md:h-10 flex items-center justify-center bg-neutral-200 dark:bg-neutral-800 border-3 border-transparent rounded-full focus:border-[#6D64F7] focus:outline-none hover:-translate-y-0.5 active:translate-y-0.5 transition duration-200 ${
        type === "previous" ? "rotate-180" : ""
      }`}
      title={title}
      onClick={handleClick}
    >
      <IconArrowNarrowRight className="text-neutral-600 dark:text-neutral-200 w-4 h-4 md:w-5 md:h-5" />
    </button>
  );
};

interface TestimonialCarouselProps {
  testimonials: TestimonialData[];
}

export default function TestimonialCarousel({
  testimonials,
}: TestimonialCarouselProps) {
  const [current, setCurrent] = useState(0);
  const id = useId();

  const handlePreviousClick = () =>
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const handleNextClick = () =>
    setCurrent((c) => (c + 1) % testimonials.length);

  const handleTestimonialClick = (index: number) => {
    if (current !== index) setCurrent(index);
  };

  if (!testimonials || testimonials.length === 0) return null;

  const slideCount = testimonials.length;
  const slideWidthPercent = 100 / slideCount;

  return (
    <div className="flex flex-col items-center">
      {/* Carousel container */}
      <div
        className="relative w-[90vw] md:w-[70vmin] h-[60vmin] md:h-[40vmin] mx-auto overflow-hidden"
        aria-labelledby={`testimonial-carousel-heading-${id}`}
      >
        <ul
          className="absolute left-0 top-0 flex h-full"
          style={{
            width: `${slideCount * 100}%`,
            transform: `translateX(-${current * slideWidthPercent}%)`,
            transition: "transform 700ms cubic-bezier(.22,.9,.28,1)",
          }}
        >
          {testimonials.map((testimonial, index) => (
            <li
              key={index}
              className="flex-shrink-0 flex justify-center items-stretch h-full"
              style={{
                width: `${slideWidthPercent}%`,
              }}
            >
              <div className="w-[92%] md:w-[80%] h-[92%] md:h-[86%] my-auto">
                <Testimonial
                  testimonial={testimonial}
                  index={index}
                  current={current}
                  handleTestimonialClick={handleTestimonialClick}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Arrows BELOW the carousel */}
      <div className="flex justify-center gap-3 mt-6 md:mt-8">
        <CarouselControl
          type="previous"
          title="Previous"
          handleClick={handlePreviousClick}
        />
        <CarouselControl
          type="next"
          title="Next"
          handleClick={handleNextClick}
        />
      </div>
    </div>
  );
}
