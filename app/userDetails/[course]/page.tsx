import UserDetails from "@/components/UserDetails";
import { getCourseById } from "@/lib/db";

const page = async({
  params,
}: {
  params: { course: string };
}) => {
  const course = await getCourseById(parseInt(params.course))

  return (
    <UserDetails course={course} />
  )
};

export default page;
