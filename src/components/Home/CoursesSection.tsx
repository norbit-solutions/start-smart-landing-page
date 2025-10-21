import React from "react";
import CoursesNav from "./CoursesNav";
import CourseCardSection from "./CourseCardSection";
import CourseList from "./CourseList";

function Courses() {
  return (
    <div
      id="course"
      className="  bg-white w-full overflow-clip container flex flex-col gap-6"
    >
      <div className="flex flex-col gap-6">
        <h1 className="title text-black font-medium flex">Explore Courses</h1>
        <p className="description text-black">
          Discovering new courses helped me explore different career options.
        </p>
      </div>

      <CoursesNav />
      <CourseList />
    </div>
  );
}

export default Courses;
