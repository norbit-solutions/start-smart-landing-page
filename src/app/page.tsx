import Banner from "@/components/Home/Banner";
import CourseCardSection from "@/components/Home/CourseCardSection";
import Courses from "@/components/Home/CoursesSection";
export default function Home() {
  return (
    <div className="flex flex-col">
      <Banner />
      <Courses />
      <CourseCardSection />
    </div>
  );
}
