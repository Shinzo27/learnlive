import CourseContent from "@/components/CourseContent";
import { getContentDetails } from "@/lib/db";

const page = async({params}: { params: { contentId: string } }) => { 
  const contentDetails = await getContentDetails(parseInt(params.contentId))

  return (
    <CourseContent params={params} contentDetails={contentDetails} />
  )
};

export default page;
