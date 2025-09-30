import Link from "next/link";
import React from "react";

function CoursesNav() {


  const navItem = [
    {
      label: "All Courses",
      href: "",
    },
    {
      label: "Video Courses",
      href: "",
    },
    {
      label: "Live Classes",
      href: "",
    },
    {
      label: "Free Courses",
      href: "",
    },
  ];

  return (
    <div className="flex h-7 w-max gap-8  text-black bg-gray-200 py-4 px-6 rounded-2xl items-center justify-start">
      {navItem.map((item, index) => {
        return (
          <Link key={index} href={item.href} className="hover:text-blue-700">
            {item.label}
          </Link>
        );
      })}
    </div>
  );
}

export default CoursesNav;
