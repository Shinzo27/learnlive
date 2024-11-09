import CourseCard from "@/components/Courses";
import { getAllCourses } from "@/lib/db";
import Image from "next/image";
import { useRouter } from "next/navigation";

const page = async() => {
  const allCourses = await getAllCourses()
  
  return (
    <div className="flex  items-center min-h-screen flex-col pt-20">
        <div>
            <h1 className="text-4xl font-bold text-center">All courses</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-5">
        {allCourses.map((course: any, index: number) => (
          <CourseCard courseId={course.id} key={index} title={course.title} imageUrl={course.imageUrl} />
        ))}
      </div>
    </div>
  );
};

export default page;

