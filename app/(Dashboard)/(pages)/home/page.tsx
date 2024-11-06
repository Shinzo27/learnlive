import CourseCard from "@/components/Courses";
import MyCourses from "@/components/MyCourses";
import { NEXT_AUTH } from "@/lib/auth";
import { getPurchases } from "@/lib/db";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const page = async() => {
  const session = await getServerSession(NEXT_AUTH);
  if (session?.user?.role === "ADMIN") {
    return redirect("/admin");
  } else if (!session?.user?.role || session?.user?.role !== "USER") {
    return redirect("/");
  }

  const userId = session?.user?.id || null;
  const courses = await getPurchases(parseInt(userId));

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      {
          <MyCourses courses={courses}/>
      }
    </div>
  );
};

export default page;