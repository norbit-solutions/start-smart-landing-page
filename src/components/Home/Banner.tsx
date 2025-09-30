import React from "react";
function Banner() {
  return (
    <div className=" w-full relative">
      <img
        className="w-full h-[80svh] object-cover object-top"
        src="/images/banner.jpg"
      />
      <div className="absolute top-1/2 left-50  flex flex-col gap-6">
        <h1 className="title">
          Building Knowledge, <br /> Building Leaders.
        </h1>
        <p className="description">
          Transforming education into an exciting journey where every step opens
          doors to endless opportunities and growth.
        </p>
        <div className="buttons flex gap-5">
          <div className="flex
            w-max py-2 px-3 bg-blue-700 text-white justify-center items-center  text-center  rounded-lg hover:bg-blue-900 cursor-pointer">
            Explore Courses
          </div>
          <div className="flex h-10 w-25 bg-white border text-blue-700 text-center items-center  border-blue-700 justify-center top-8 rounded-lg transform duration-300 cursor-pointer hover:bg-blue-700 hover:text-white">
            Free Trial
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
