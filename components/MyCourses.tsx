"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { PlayCircle } from "lucide-react";
import { useRouter } from "next/navigation";

const MyCourses = ({ courses }: any) => {
  const router = useRouter();

  const handleRedirect = (courseId: string) => {
    router.push(`/courseOverview/${courseId}`);
  };

  return (
    <main className="container mx-auto">
      <h1 className="text-3xl font-bold mb-6">My Courses</h1>
      <ScrollArea className="h-[calc(100vh-200px)] pr-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.length > 0 &&
            courses.map((course: any) => (
              <Card
                className="overflow-hidden bg-neutral-900 rounded-lg"
                key={course.course.id}
              >
                <CardContent className="p-0">
                  <div className="relative flex justify-center items-center rounded-lg">
                    <img
                      alt={`${course.course.title} thumbnail`}
                      className=" rounded-lg h-full w-full object-cover"
                      src={course.course.imageUrl}
                      style={{
                        aspectRatio: "16/9",
                        objectFit: "contain",
                      }}  
                    />
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col items-start gap-4 p-6">
                  <h3 className="text-xl font-semibold">
                    {course.course.title}
                  </h3>
                  <Button
                    className="bg-neutral-700 hover:bg-neutral-800 text-white"
                    onClick={() => handleRedirect(course.course.id)}
                  >
                    View Course
                  </Button>
                </CardFooter>
              </Card>
            ))}
          {courses.length === 0 ? (
            <>
              <div>
                <p className="font-satoshi text-xl font-bold w-screen">
                  No courses found associated with this email id!
                </p>
                <p className="font-satoshi text-xl font-bold pt-3 w-screen">
                  You can logout and explore the available courses to buy it!
                </p>
              </div>
            </>
          ) : null}
        </div>
      </ScrollArea>
    </main>
  );
};

export default MyCourses;
