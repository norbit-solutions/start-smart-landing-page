import React from "react";
import CoursesNav from "./CoursesNav";

function Courses() {
  return (
    <div className="w-full bg-white  container">
      <h1 className="title text-black flex">Explore Courses</h1>
      <p className="description text-black">
        Discovering new courses helped me explore different career options.
      </p>

      <CoursesNav />
    </div>
  );
}

export default Courses;
