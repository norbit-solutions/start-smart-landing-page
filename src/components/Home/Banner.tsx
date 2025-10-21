import Link from "next/link";
import React from "react";
function Banner() {
  return (
    <div className="w-full relative">
      <img
        className="w-full h-[60svh] md:h-screen object-cover object-bottom"
        src="/images/edu.jpg"
        alt="Banner"
      />
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6 md:px-12 z-10">
        <h1 className="title text-white drop-shadow-lg text-3xl md:text-5xl leading-tight md:leading-snug">
          Building Knowledge, <br /> Building Leaders.
        </h1>
        <p className="description text-white drop-shadow-md mt-2 text-sm md:text-lg max-w-xl">
          Transforming education into an exciting journey where every step opens
          doors to endless opportunities and growth.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <Link
            href={"#course"}
            className="flex w-max py-2 px-6 bg-blue-700 text-white justify-center items-center rounded-lg hover:bg-blue-900 cursor-pointer"
          >
            Explore Courses
          </Link>
          <div className="flex h-10 w-32 bg-white border text-blue-700 border-blue-700 justify-center items-center rounded-lg cursor-pointer hover:bg-blue-700 hover:text-white transition duration-300">
            Free Trial
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
