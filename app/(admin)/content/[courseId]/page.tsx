import AddContent from "@/components/admin/AddContent";
import { getContentOfCourse } from "@/lib/db";

const page = async() => {
  const courseId = 2;
  const courseFolders = await getContentOfCourse(courseId);
  return (
    <>
    <AddContent folders={courseFolders} />
    </>
  );
}

export default page;
