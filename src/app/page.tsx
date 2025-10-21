import Banner from "@/components/Home/Banner";
import CourseCardSection from "@/components/Home/CourseCardSection";
import CoursesNav from "@/components/Home/CoursesNav";
import Courses from "@/components/Home/CoursesSection";
import Testimonials from "@/components/Home/Carousel";
import Footer from "@/components/layouts/Footer";
import CarouselContent from "@/components/Home/CarouselContent";

export default function Home() {
  return (
    <div className="flex flex-col scroll-smooth">
      <Banner />
      <Courses />
      <CarouselContent />
    </div>
  );
}
