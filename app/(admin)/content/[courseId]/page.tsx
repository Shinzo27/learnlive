import AddContent from "@/components/admin/AddContent";
import { getContentOfCourse } from "@/lib/db";
import { useRouter } from "next/router";

const page = async({params}: any) => {
  const courseId = params.courseId;
  let id = parseInt(courseId as string)

  const courseFolders = await getContentOfCourse(id);
  
  return (
    <>
    <AddContent folders={courseFolders} courseId={id} />
    </>
  );
}

export default page;
