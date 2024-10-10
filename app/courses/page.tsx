"use client";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import Image from "next/image";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();
  const handleRedirect = (id: number) => {
    router.push(`/courseDetail/${id}`);
  };

  const courses = [
    {
        id: 1,
        title: "Learn React",
        description: "Learn React from scratch",
        image: "/images/course-1.webp",
    },
    {
        id: 2,
        title: "Learn Next.js",
        description: "Learn Next.js from scratch",
        image: "/images/course-1.webp",
    },
    {
        id: 3,
        title: "Learn Tailwind",
        description: "Learn Tailwind from scratch",
        image: "/images/course-1.webp",
    }
  ]

  return (
    <div className="flex  items-center min-h-screen flex-col pt-20">
        <div>
            <h1 className="text-4xl font-bold text-center">All courses</h1>
        </div>
      <div className="pt-10 flex items-center justify-center gap-16 flex-wrap px-10">
        {
            courses.map((course) => (
                <CardSpotlight
                    key={course.id}
                    className="h-96 w-96 border-white border-4 cursor-pointer"
                    onClick={()=>handleRedirect(course.id)}
                >
                    <Image
                        className="relative z-50"
                        src={course.image}
                        alt="course"
                        width={400}
                        height={400}
                    />
                    <span className="flex justify-center items-center pt-5 font-satoshi font-bold text-xl relative z-10">{course.title}</span>
                </CardSpotlight>
            ))
        }
      </div>
    </div>
  );
};

export default page;
