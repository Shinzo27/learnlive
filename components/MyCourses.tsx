"use client"
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { PlayCircle } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const MyCourses = () => {
    const router = useRouter();

    const handleRedirect = (courseId: string) => {
        router.push(`/courseOverview/${courseId}`);
    } 

    const courses = [
        {
          id: "1",
          title: "Advanced Web Development",
          progress: 65,
          lastAccessed: "2 days ago",
          totalLessons: 24,
          completedLessons: 16,
          thumbnail: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Big_Buck_Bunny_thumbnail_vlc.png/1200px-Big_Buck_Bunny_thumbnail_vlc.png"
        },
        {
          id: "2",
          title: "Machine Learning Fundamentals",
          progress: 30,
          lastAccessed: "1 week ago",
          totalLessons: 32,
          completedLessons: 10,
          thumbnail: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Big_Buck_Bunny_thumbnail_vlc.png/1200px-Big_Buck_Bunny_thumbnail_vlc.png"
        },
        {
          id: "3",
          title: "UX Design Principles",
          progress: 90,
          lastAccessed: "1 day ago",
          totalLessons: 18,
          completedLessons: 16,
          thumbnail: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Big_Buck_Bunny_thumbnail_vlc.png/1200px-Big_Buck_Bunny_thumbnail_vlc.png"
        },
        {
          id: "4",
          title: "iOS App Development",
          progress: 45,
          lastAccessed: "3 days ago",
          totalLessons: 28,
          completedLessons: 13,
          thumbnail: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Big_Buck_Bunny_thumbnail_vlc.png/1200px-Big_Buck_Bunny_thumbnail_vlc.png"
        },
        {
          id: "5",
          title: "Data Structures and Algorithms",
          progress: 70,
          lastAccessed: "4 days ago",
          totalLessons: 40,
          completedLessons: 28,
          thumbnail: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Big_Buck_Bunny_thumbnail_vlc.png/1200px-Big_Buck_Bunny_thumbnail_vlc.png"
        },
      ];

    return (
        <main className="container mx-auto">
        <h1 className="text-3xl font-bold mb-6">My Courses</h1>
        <ScrollArea className="h-[calc(100vh-200px)] pr-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course) => (
              <Card key={course.id} className="bg-neutral-900 cursor-pointer">
                <CardHeader>
                <div className="flex justify-center items-center text-sm mb-4">
                    <Image src={course.thumbnail} alt="Course Thumbnail" width={300} height={100} className="rounded-lg" />
                  </div>
                  <CardTitle className="text-xl font-semibold">
                    {course.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white" onClick={()=>handleRedirect(course.id)}>
                    <PlayCircle className="mr-2 h-4 w-4" />
                    Continue Learning
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </ScrollArea>
      </main>
    );
}

export default MyCourses;