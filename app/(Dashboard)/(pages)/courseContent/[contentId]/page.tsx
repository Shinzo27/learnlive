import CourseContent from "@/components/CourseContent";
import { NEXT_AUTH } from "@/lib/auth";
import { getContentDetails } from "@/lib/db";
import { getServerSession } from "next-auth";

const page = async({params}: { params: { contentId: string } }) => { 
  const contentDetails = await getContentDetails(parseInt(params.contentId))
  const session = await getServerSession(NEXT_AUTH)
  const userId = session?.user?.id
  return (
    <CourseContent params={params} contentDetails={contentDetails} userId={userId} />
  )
};

export default page;
