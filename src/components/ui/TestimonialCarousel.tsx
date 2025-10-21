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
  const testimonialRef = useRef<HTMLLIElement>(null);

  const xRef = useRef(0);
  const yRef = useRef(0);
  const frameRef = useRef<number>();

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
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
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

  const renderStars = (rating: number = 5) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span
        key={i}
        className={`text-lg ${
          i < rating ? "text-yellow-400" : "text-gray-300"
        }`}
      >
        ★
      </span>
    ));
  };

  return (
    <div className="[perspective:1200px] [transform-style:preserve-3d]">
      <li
        ref={testimonialRef}
        className="flex flex-1 flex-col bg-white dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700 shadow-lg text-left opacity-100 transition-all duration-300 ease-in-out rounded-2xl w-[50vmin] h-[30vmin] mx-[4vmin] z-10 cursor-pointer hover:shadow-xl"
        onClick={() => handleTestimonialClick(index)}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform:
            current !== index
              ? "scale(0.98) rotateX(8deg)"
              : "scale(1) rotateX(0deg)",
          transition: "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
          transformOrigin: "bottom",
        }}
      >
        <div
          className="absolute top-0 left-0 w-full h-full rounded-2xl overflow-hidden transition-all duration-150 ease-out"
          style={{
            transform:
              current === index
                ? "translate3d(calc(var(--x) / 30), calc(var(--y) / 30), 0)"
                : "none",
          }}
        ></div>

        <article
          className={`relative p-6 h-full flex flex-col transition-opacity duration-1000 ease-in-out ${
            current === index ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          {/* Author Info - TOP */}
          <div className="flex items-center mb-4">
            <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4 flex-shrink-0">
              <Image
                src={avatar}
                alt={name}
                fill
                className="object-cover"
                sizes="48px"
              />
            </div>
            <div>
              <h3 className="font-bold text-gray-900 dark:text-white text-base">
                {name}
              </h3>
              {(role || company) && (
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  {role}
                  {role && company ? " at " : ""}
                  {company}
                </p>
              )}
            </div>
          </div>

          {/* Testimonial Content - MIDDLE */}
          <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed flex-grow mb-4 line-clamp-4">
            "{content}"
          </p>

          {/* Rating Stars - BOTTOM */}
          <div className="mt-auto pt-4 border-t border-gray-100 dark:border-neutral-700">
            {renderStars(rating)}
          </div>
        </article>
      </li>
    </div>
  );
};

interface CarouselControlProps {
  type: string;
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
      className={`w-10 h-10 flex items-center mx-2 justify-center bg-neutral-200 dark:bg-neutral-800 border-3 border-transparent rounded-full focus:border-[#6D64F7] focus:outline-none hover:-translate-y-0.5 active:translate-y-0.5 transition duration-200 ${
        type === "previous" ? "rotate-180" : ""
      }`}
      title={title}
      onClick={handleClick}
    >
      <IconArrowNarrowRight className="text-neutral-600 dark:text-neutral-200" />
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

  const handlePreviousClick = () => {
    const previous = current - 1;
    setCurrent(previous < 0 ? testimonials.length - 1 : previous);
  };

  const handleNextClick = () => {
    const next = current + 1;
    setCurrent(next === testimonials.length ? 0 : next);
  };

  const handleTestimonialClick = (index: number) => {
    if (current !== index) {
      setCurrent(index);
    }
  };

  const id = useId();

  return (
    <div
      className="relative w-[70vmin] h-[70vmin] mx-auto"
      aria-labelledby={`testimonial-carousel-heading-${id}`}
    >
      <ul
        className="absolute flex mx-[-4vmin] transition-transform duration-1000 ease-in-out"
        style={{
          transform: `translateX(-${current * (100 / testimonials.length)}%)`,
        }}
      >
        {testimonials.map((testimonial, index) => (
          <Testimonial
            key={index}
            testimonial={testimonial}
            index={index}
            current={current}
            handleTestimonialClick={handleTestimonialClick}
          />
        ))}
      </ul>

      <div className="absolute flex justify-center w-full top-[calc(100%+1rem)]">
        <CarouselControl
          type="previous"
          title="Go to previous testimonial"
          handleClick={handlePreviousClick}
        />

        <CarouselControl
          type="next"
          title="Go to next testimonial"
          handleClick={handleNextClick}
        />
      </div>
    </div>
  );
}
