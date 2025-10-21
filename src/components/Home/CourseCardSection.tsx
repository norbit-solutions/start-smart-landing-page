import Image from "next/image";

interface CourseCardProps {
  image?: string;
  title?: string;
  price?: string;
  lessons?: number;
  tutor?: string;
  time?: string;
}

export default function CourseCardSection({
  image = "/images/ban.jpg",
  title = "React for Beginners",
  price = "₹1,499",
  lessons = 24,
  tutor = "Jane Doe",
  time = "12 hours",
}: CourseCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 w-full">
      {/* Product Image */}
      <div className="relative w-full h-48 sm:h-56 md:h-64">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>
      {/* Info Section */}
      <div className="p-4 sm:p-6 flex flex-col gap-2 sm:gap-3">
        <div className="text-sm sm:text-base font-bold text-gray-800 line-clamp-2 min-h-[2.5rem]">
          {title}
        </div>
        <div className="text-base sm:text-lg font-semibold text-blue-700">
          {price}
        </div>
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm text-gray-500">
          <span className="flex items-center gap-1">📚 {lessons} lessons</span>
          <span className="flex items-center gap-1">⏱ {time}</span>
        </div>
        <div className="text-xs font-medium text-gray-400 pt-1 sm:pt-2 flex items-center gap-1">
          👤 {tutor}
        </div>
      </div>
    </div>
  );
}
