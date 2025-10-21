import CourseCardSection from "./CourseCardSection";

const courses = [
  {
    image: "/images/ban.jpg",
    title: "React for Beginners",
    price: "₹1,499",
    lessons: 24,
    tutor: "Jane Doe",
    time: "12 hours",
  },
  {
    image: "/images/banner.jpg",
    title: "Flutter Masterclass",
    price: "₹2,999",
    lessons: 40,
    tutor: "Ravi Kumar",
    time: "25 hours",
  },
  {
    image: "/images/ban.jpg",
    title: "React for Beginners",
    price: "₹1,499",
    lessons: 24,
    tutor: "Jane Doe",
    time: "12 hours",
  },
  {
    image: "/images/banner.jpg",
    title: "Flutter Masterclass",
    price: "₹2,999",
    lessons: 40,
    tutor: "Ravi Kumar",
    time: "25 hours",
  },
  {
    image: "/images/ban.jpg",
    title: "React for Beginners",
    price: "₹1,499",
    lessons: 24,
    tutor: "Jane Doe",
    time: "12 hours",
  },
  {
    image: "/images/banner.jpg",
    title: "Flutter Masterclass",
    price: "₹2,999",
    lessons: 40,
    tutor: "Ravi Kumar",
    time: "25 hours",
  },
];

export default function CourseList() {
  return (
    <div className="flex flex-col gap-6 p-4 sm:p-6 md:p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {courses.map((course, index) => (
          <CourseCardSection
            key={index}
            image={course.image}
            title={course.title}
            price={course.price}
            lessons={course.lessons}
            tutor={course.tutor}
            time={course.time}
          />
        ))}
      </div>
      <div className="flex justify-center mt-4">
        <div className="btn flex h-10 w-32 bg-white border text-blue-700 border-blue-700 justify-center items-center rounded-lg cursor-pointer hover:bg-blue-700 hover:text-white transition duration-300 text-sm font-medium">
          View All Courses
        </div>
      </div>
    </div>
  );
}
