import CourseCard from "@/components/Courses";
import MyCourses from "@/components/MyCourses";
import { NEXT_AUTH } from "@/lib/auth";
import { getPurchases } from "@/lib/db";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { useState } from "react";


const getCourses = async () => {
  return getCourses;
};
const page = async() => {
  const session = await getServerSession(NEXT_AUTH);
  if(session?.user?.role === "ADMIN") {
    return redirect('/admin');
  } else if (session?.user?.role !== "USER") {
    return redirect('/signin');
  }
  const userId = session?.user?.id || null;
  const getCourses = await getPurchases(parseInt(userId));

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      {
          <MyCourses courses={getCourses}/>
      }
    </div>
  );
};

export default page;