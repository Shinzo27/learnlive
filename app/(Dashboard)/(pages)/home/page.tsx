"use client"
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ScrollArea } from "@/components/ui/scroll-area";
import { GraduationCap, PlayCircle, Settings } from "lucide-react";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();

  const courses = [
    {
      id: "1",
      title: "Advanced Web Development",
      progress: 65,
      lastAccessed: "2 days ago",
      totalLessons: 24,
      completedLessons: 16,
    },
    {
      id: "2",
      title: "Machine Learning Fundamentals",
      progress: 30,
      lastAccessed: "1 week ago",
      totalLessons: 32,
      completedLessons: 10,
    },
    {
      id: "3",
      title: "UX Design Principles",
      progress: 90,
      lastAccessed: "1 day ago",
      totalLessons: 18,
      completedLessons: 16,
    },
    {
      id: "4",
      title: "iOS App Development",
      progress: 45,
      lastAccessed: "3 days ago",
      totalLessons: 28,
      completedLessons: 13,
    },
    {
      id: "5",
      title: "Data Structures and Algorithms",
      progress: 70,
      lastAccessed: "4 days ago",
      totalLessons: 40,
      completedLessons: 28,
    },
  ];

  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    avatar: "/placeholder.svg?height=100&width=100",
  };

  const handleRedirect = (courseId: string) => {
    router.push(`/courseOverview/${courseId}`);
  } 

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <main className="container mx-auto">
        <h1 className="text-3xl font-bold mb-6">My Courses</h1>
        <ScrollArea className="h-[calc(100vh-200px)] pr-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course) => (
              <Card key={course.id} className="bg-neutral-900 cursor-pointer">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold">
                    {course.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Progress value={course.progress} className="w-full mb-4" />
                  <div className="flex justify-between text-sm mb-4">
                    <span>{course.progress}% complete</span>
                    <span>
                      {course.completedLessons} / {course.totalLessons} lessons
                    </span>
                  </div>
                  <p className="text-sm mb-4">
                    Last accessed: {course.lastAccessed}
                  </p>
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
    </div>
  );
};

export default page;
