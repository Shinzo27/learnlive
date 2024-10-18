import MyCourses from "@/components/MyCourses";
import { NEXT_AUTH } from "@/lib/auth";
import { getServerSession } from "next-auth";


const getCourses = async () => {
  const session = await getServerSession(NEXT_AUTH);
  // const purchase  =
};
const page = () => {
  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <MyCourses/>
    </div>
  );
};

export default page;