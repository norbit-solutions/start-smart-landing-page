import Image from "next/image";

export default function CourseCardSection({
  image = "/images/ban.jpg",
  title = "React for Beginners",
  price = "₹1,499",
  lessons = 24,
  tutor = "Jane Doe",
  time = "12 hours",
}) {
  return (
    <div className="bg-white rounded-xl h-120 shadow-md w-100 overflow-hidden ">
      {/* Product Image */}
      <div className="relative w-full h-68">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>
      {/* Info Section */}
      <div className="p-10 flex flex-col gap-2">
        <div className="text-base font-bold text-gray-800">{title}</div>
        <div className="text-lg font-semibold text-blue-700">{price}</div>
        <div className="flex items-center gap-3 text-sm text-gray-500">
          <span>📚 {lessons} lessons</span>
          <span>⏱ {time}</span>
        </div>
        <div className="text-xs font-medium text-gray-400 pt-2">👤 {tutor}</div>
      </div>
    </div>
  );
}
