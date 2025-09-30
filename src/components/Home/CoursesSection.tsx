import React from "react";
import CoursesNav from "./CoursesNav";

function Courses() {
  return (
    <div className="w-full bg-white  container py-8 md:py-12 lg:py-16 flex flex-col gap-6">
      <h1 className="title text-black font-medium flex">Explore Courses</h1>
      <p className="description text-black">
        Discovering new courses helped me explore different career options.
      </p>

      <CoursesNav />
    </div>
  );
}

export default Courses;
