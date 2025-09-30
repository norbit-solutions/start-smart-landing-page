import React from "react";
function Banner() {
  return (
    <div className=" w-full relative">
      <img
        className="w-full h-[80svh] object-cover object-top"
        src="/images/banner.jpg"
      />
      <div className="absolute top-1/2 left-50 w-full flex flex-col gap-6">
        <h1 className="title">
          Building Knowledge, <br /> Building Leaders.
        </h1>
        <p className="description">
          Transforming education into an exciting journey where every step opens
          doors to endless opportunities and growth.
        </p>
        <div className="buttons flex gap-5">
          <div className="flex h-10 w-25 bg-blue-700 text-white justify-center items-center  text-center top-8 rounded-lg hover:bg-amber-200">
            hi
          </div>
          <div className="flex h-10 w-25 bg-white border text-blue-800 text-center items-center  border-blue-700 justify-center top-8 rounded-lg hover:bg-amber-400">
            hi
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
