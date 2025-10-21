import Link from "next/link";
import React from "react";

function CoursesNav() {
  const navItem = [
    { label: "All Courses", href: "" },
    { label: "Video Courses", href: "" },
    { label: "Live Classes", href: "" },
    { label: "Free Courses", href: "" },
  ];

  return (
    <div className=" numb flex gap-8 text-black h-8 bg-gray-200 opacity-70 px-6 rounded-md items-center justify-start overflow-auto w-full  md:w-max">
      {navItem.map((item, index) => (
        <Link
          key={index}
          href={item.href}
          className="shrink-0 hover:text-blue-700"
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
}

export default CoursesNav;
