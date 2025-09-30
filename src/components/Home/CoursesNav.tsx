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
    <div className="flex h-6 w-xl gap-6 bg-gray-400">
      {navItem.map((item, index) => {
        return (
          <Link key={index} href={item.href} className="hover:text-red-700">
            {item.label}
          </Link>
        );
      })}
    </div>
  );
}

export default CoursesNav;
