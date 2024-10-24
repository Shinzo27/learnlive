import CourseOverview from "@/components/CourseOverview";
import { getCourseContent } from "@/lib/db";

const page = async({params}: { params: { courseId: string } }) => {
  // const contentId = parseInt(params.courseId)
  const content = await getCourseContent(2)

  return (
   <CourseOverview courseId={parseInt(params.courseId)} content={content} />
  )
};

export default page;
