import CourseDetail from "@/components/CourseDetail";
import { getCourseById } from "@/lib/db";

const page = async({
    params,
  }: {
    params: { course: string };
  }) => {
    const details = await getCourseById(parseInt(params.course))

    return (
      <main className="flex-grow container mx-auto px-4 py-8 min-h-screen pt-20">
        <CourseDetail courseDetails={details} />
      </main>
    );
}

export default page;