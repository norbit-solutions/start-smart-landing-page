import React from "react";
import Image from "next/image";

const Faculties = () => {
  return (
    <div
      id="faculties"
      className="flex flex-col items-center bg-blue-950 text-white py-10"
    >
      {/* Heading */}
      <h1 className="text-4xl font-bold mb-8">Meet Our Team</h1>
      {/* Faculty Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
        {/* Card 1 */}
        <div className="relative h-80 w-64 rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/images/t1.jpg"
            alt="Faculty 1"
            fill
            className="object-cover"
          />
          <div className="absolute bottom-3 left-3 flex flex-col">
            <h4 className="text-lg font-semibold">Rashi</h4>
            <h5 className="text-sm">Maths Tutor</h5>
          </div>
        </div>

        {/* Card 2 */}
        <div className="relative h-80 w-64 rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/images/t2.jpg"
            alt="Faculty 2"
            fill
            className="object-cover"
          />
          <div className="absolute bottom-3 left-3 flex flex-col">
            <h4 className="text-lg font-semibold">Rashi</h4>
            <h5 className="text-sm">Maths Tutor</h5>
          </div>
        </div>

        {/* Card 3 */}
        <div className="relative h-80 w-64 rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/images/t3.jpg"
            alt="Faculty 3"
            fill
            className="object-cover"
          />
          <div className="absolute bottom-3 left-3 flex flex-col">
            <h4 className="text-lg font-semibold">Rashi</h4>
            <h5 className="text-sm">Maths Tutor</h5>
          </div>
        </div>
        <div className="relative h-80 w-64 rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/images/t3.jpg"
            alt="Faculty 3"
            fill
            className="object-cover"
          />
          <div className="absolute bottom-3 left-3 flex flex-col">
            <h4 className="text-lg font-semibold">Rashi</h4>
            <h5 className="text-sm">Maths Tutor</h5>
          </div>
        </div>
        <div className="relative h-80 w-64 rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/images/t3.jpg"
            alt="Faculty 3"
            fill
            className="object-cover"
          />
          <div className="absolute bottom-3 left-3 flex flex-col">
            <h4 className="text-lg font-semibold">Rashi</h4>
            <h5 className="text-sm">Maths Tutor</h5>
          </div>
        </div>
        <div className="relative h-80 w-64 rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/images/t3.jpg"
            alt="Faculty 3"
            fill
            className="object-cover"
          />
          <div className="absolute bottom-3 left-3 flex flex-col">
            <h4 className="text-lg font-semibold">Rashi</h4>
            <h5 className="text-sm">Maths Tutor</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faculties;
