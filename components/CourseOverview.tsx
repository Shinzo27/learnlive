"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ScrollArea } from "@/components/ui/scroll-area";
import { getCourseContent } from "@/lib/db";
import { Check, CheckCircle, FileText, PlayCircle } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const CourseOverview = ({
  courseId,
  content,
  userProgress
}: {
  courseId: number;
  content: any;
  userProgress: any;
}) => {
  const [progress, setProgress] = useState(30);

  return (
    <div className="min-h-screen bg-neutral-950 text-white flex flex-col">
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 sm:gap-8">
          <div className="lg:col-span-2 space-y-6">
            <h1 className="text-3xl font-bold">{content[0].course.title}</h1>
            <p className="text-white">{content[0].course.description}</p>
            <div className="flex items-center space-x-4">
              <p className="text-sm text-white">Instructor: Pratham Patel</p>
              <p className="text-sm text-white">Duration: 10 weeks</p>
            </div>
            <Card className="bg-neutral-900">
              <CardHeader>
                <CardTitle className="text-white">Course Progress</CardTitle>
              </CardHeader>
              <CardContent>
                <Progress value={progress} className="w-full" />
                <p className="mt-2 text-sm text-white">{progress}% complete</p>
              </CardContent>
            </Card>
            <ScrollArea className="h-[600px] w-full pr-4">
              <Accordion type="single" collapsible className="w-full">
                {content.map((module: any, moduleIndex: any) => (
                  <AccordionItem
                    value={`module-${moduleIndex}`}
                    key={moduleIndex}
                  >
                    <AccordionTrigger className="text-lg font-semibold text-white text-left">
                      {module.content.title}
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2">
                        {module.content.children.map(
                          (lesson: any, lessonIndex: any) => (
                            <Link
                              href={`/courseContent/${lesson.id}`}
                              key={lessonIndex}
                            >
                              <div className="flex items-center justify-between p-2 rounded hover:bg-neutral-800">
                                <div className="flex items-center space-x-2">
                                  {lesson.type === "video" ? (
                                    <PlayCircle className="h-5 w-5 text-blue-500" />
                                  ) : (
                                    <FileText className="h-5 w-5 text-green-500" />
                                  )}
                                  <div className="flex items-center justify-between space-x-4">
                                    <div className="text-white">
                                      {lesson.title}
                                    </div>
                                    <div className="">
                                      {userProgress.find((progress: any) => progress.contentId === lesson.id)?.markAsCompleted === true ? <Check className="text-blue-500 rounded-sm"/> : null}
                                    </div>
                                  </div>
                                </div>
                                <div className="flex items-center space-x-2">
                                  <span className="text-sm text-white">
                                    {lesson.duration}
                                  </span>
                                  {lesson.completed && (
                                    <CheckCircle className="h-5 w-5 text-green-500" />
                                  )}
                                </div>
                              </div>
                            </Link>
                          )
                        )}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </ScrollArea>
          </div>
          <div className="lg:col-span-1">
            <Card className="bg-neutral-900">
              <CardHeader>
                <CardTitle className="text-white">Course Resources</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>
                    <Link href="#" className="text-blue-500 hover:underline">
                      Course Syllabus
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-blue-500 hover:underline">
                      Recommended Reading List
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-blue-500 hover:underline">
                      Project Guidelines
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-blue-500 hover:underline">
                      Discussion Forum
                    </Link>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CourseOverview;
