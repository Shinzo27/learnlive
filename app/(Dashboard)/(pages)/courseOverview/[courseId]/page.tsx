import CourseOverview from "@/components/CourseOverview";
import { NEXT_AUTH } from "@/lib/auth";
import { getCourseContent, getProgressOfUser } from "@/lib/db";
import { getServerSession } from "next-auth";

const page = async({params}: { params: { courseId: string } }) => {
  const session = await getServerSession(NEXT_AUTH)
  const courseId = parseInt(params.courseId)
  const content = await getCourseContent(courseId)
  const progress = await getProgressOfUser(session?.user?.id)

  return (
   <CourseOverview userProgress={progress} courseId={parseInt(params.courseId)} content={content} />
  )
};

export default page;
