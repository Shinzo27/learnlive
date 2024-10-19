import CourseCard from "@/components/Courses";
import MyCourses from "@/components/MyCourses";
import { NEXT_AUTH } from "@/lib/auth";
import { getServerSession } from "next-auth";


const getCourses = async () => {
  const session = await getServerSession(NEXT_AUTH);
  // const purchase  =
};
const page = () => {
  const courses = [
    {
      id: 1,
      title: "Advanced Web Development",
      progress: 65,
      lastAccessed: "2 days ago",
      totalLessons: 24,
      completedLessons: 16,
      imageUrl: "/images/course-1.webp"
    },
    {
      id: 2,
      title: "Machine Learning Fundamentals",
      progress: 30,
      lastAccessed: "1 week ago",
      totalLessons: 32,
      completedLessons: 10,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Big_Buck_Bunny_thumbnail_vlc.png/1200px-Big_Buck_Bunny_thumbnail_vlc.png"
    },
    {
      id: 3,
      title: "UX Design Principles",
      progress: 90,
      lastAccessed: "1 day ago",
      totalLessons: 18,
      completedLessons: 16,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Big_Buck_Bunny_thumbnail_vlc.png/1200px-Big_Buck_Bunny_thumbnail_vlc.png"
    },
    {
      id: 4,
      title: "iOS App Development",
      progress: 45,
      lastAccessed: "3 days ago",
      totalLessons: 28,
      completedLessons: 13,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Big_Buck_Bunny_thumbnail_vlc.png/1200px-Big_Buck_Bunny_thumbnail_vlc.png"
    },
    {
      id: 5,
      title: "Data Structures and Algorithms",
      progress: 70,
      lastAccessed: "4 days ago",
      totalLessons: 40,
      completedLessons: 28,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Big_Buck_Bunny_thumbnail_vlc.png/1200px-Big_Buck_Bunny_thumbnail_vlc.png"
    },
  ];

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      {
          <MyCourses/>
      }
    </div>
  );
};

export default page;