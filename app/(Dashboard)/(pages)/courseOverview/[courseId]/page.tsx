import CourseOverview from "@/components/CourseOverview";
import { getCourseContent } from "@/lib/db";

const page = async({params}: { params: { courseId: string } }) => {
  const courseId = parseInt(params.courseId)
  const content = await getCourseContent(courseId)

  return (
   <CourseOverview courseId={parseInt(params.courseId)} content={content} />
  )
};

export default page;
