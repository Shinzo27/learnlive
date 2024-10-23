import CourseCard from "@/components/Courses";
import MyCourses from "@/components/MyCourses";
import { NEXT_AUTH } from "@/lib/auth";
import { getPurchases } from "@/lib/db";
import { getServerSession } from "next-auth";
import { useState } from "react";


const getCourses = async () => {
  const session = await getServerSession(NEXT_AUTH);
  const userId = session?.user?.id || null;
  const getCourses = await getPurchases(parseInt(userId));
  return getCourses;
};
const page = async() => {
  const courses = await getCourses();

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      {
          <MyCourses courses={courses}/>
      }
    </div>
  );
};

export default page;