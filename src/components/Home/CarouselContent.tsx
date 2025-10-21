import React from "react";
import TestimonialCarousel from "../ui/TestimonialCarousel";

const TestimonialContent = () => {
  const testimonialData = [
    {
      name: "Sarah Johnson",
      role: "Marketing Director",
      company: "TechCorp",
      content:
        "This service completely transformed our workflow. The team is professional, responsive, and delivered beyond our expectations. We've seen a 40% increase in productivity since implementation.",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Product Manager",
      company: "InnovateLabs",
      content:
        "Outstanding results and exceptional customer service. The attention to detail and creative approach helped us solve complex challenges efficiently. Highly recommended!",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      role: "CEO",
      company: "StartUp Ventures",
      content:
        "Working with this team has been a game-changer for our business. Their expertise and dedication are unmatched. We're already planning our next project together.",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      rating: 4,
    },
    {
      name: "David Thompson",
      role: "CTO",
      company: "Digital Solutions Inc",
      content:
        "The quality of work and professionalism exceeded all expectations. They delivered on time and within budget, while maintaining excellent communication throughout the project.",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      rating: 5,
    },
  ];

  return (
    <div className="py-12 bg-gray-50 dark:bg-neutral-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          What Our Clients Say
        </h2>
        <TestimonialCarousel testimonials={testimonialData} />
      </div>
    </div>
  );
};

export default TestimonialContent;
