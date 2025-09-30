"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

function NavItems() {
  const menuList = [
    {
      title: "Home",
      href: "/",
    },

    {
      title: "Course",
      href: "/course",
    },

    {
      title: "Services",
      href: "/service",
    },
    {
      title: "About US",
      href: "/about",
    },
  ];

  const [isOpen, setIsOpen] = useState(false);

  const pathname = usePathname();

  return (
    <>
      <div className="md:flex gap-10 hidden ">
        {menuList.map((menu, index) => {
          return (
            <Link
              href={menu.href}
              key={index}
              className={`flex gap-5   ${
                pathname === menu.href ? "text-orange-600" : "text-black"
              }`}
            >
              {menu.title}
            </Link>
          );
        })}
      </div>

      <div className="flex md:hidden absolute right-8">
        <div
          className="text-lg text-black "
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          =
        </div>
      </div>
      {isOpen && (
        <div className="h-[95svh] absolute top-15 left-0 bg-black w-full">
          {" "}
        </div>
      )}
    </>
  );
}

export default NavItems;
