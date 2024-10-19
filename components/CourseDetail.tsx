"use client"

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart, ChevronRight, Clock, GraduationCap, Star, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const CourseDetail = ({ courseDetails }: { courseDetails: any }) => {
    const [selectedTab, setSelectedTab] = useState("overview");

    const course = {
      title: "Advanced Web Development with React and Node.js",
      description: "Master the art of full-stack development with this comprehensive course on React and Node.js. Learn to build scalable, efficient web applications from scratch.",
      price: 99.99,
      duration: "10 weeks",
      level: "Intermediate",
      students: 1234,
      rating: 4.8,
      image: "/images/course-1.webp",
      instructor: {
        name: "Dr. Jane Smith",
        bio: "Full-stack developer with 15 years of industry experience. PhD in Computer Science from MIT.",
        avatar: "/images/person.jpg"
      },
      topics: [
        "React Hooks and Context API",
        "Node.js and Express",
        "RESTful API Design",
        "MongoDB and Mongoose",
        "Authentication and Authorization",
        "Deployment and DevOps"
      ]
    }

    useEffect(() => {
        console.log(courseDetails)
    }, [])

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-6">
          <h1 className="text-3xl font-bold">{courseDetails.title}</h1>
          <p className="text-gray-400">{courseDetails.description}</p>
          
          <div className="flex flex-wrap gap-4">
            <Badge variant="secondary" className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              {course.duration}
            </Badge>
            <Badge variant="secondary" className="flex items-center gap-1">
              <BarChart className="h-4 w-4" />
              {course.level}
            </Badge>
            <Badge variant="secondary" className="flex items-center gap-1">
              <Users className="h-4 w-4" />
              {course.students} students
            </Badge>
            <Badge variant="secondary" className="flex items-center gap-1">
              <Star className="h-4 w-4" />
              {course.rating} rating
            </Badge>
          </div>

          <Tabs value={selectedTab} onValueChange={setSelectedTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
              <TabsTrigger value="instructor">Instructor</TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="mt-4">
              <Card className="bg-neutral-900">
                <CardContent className="p-6 text-white">
                  <h2 className="text-xl font-semibold mb-4">What you'll learn</h2>
                  <ul className="list-disc pl-5 space-y-2">
                    {course.topics.map((topic, index) => (
                      <li key={index}>{topic}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="curriculum" className="mt-4">
              <Card className="bg-neutral-900">
                <CardContent className="p-6 text-white">
                  <h2 className="text-xl font-semibold mb-4">Course Curriculum</h2>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Introduction to React and Node.js</li>
                    <li>Setting up the Development Environment</li>
                    <li>React Fundamentals and Hooks</li>
                    <li>Node.js and Express Basics</li>
                    <li>Building RESTful APIs</li>
                    <li>Database Integration with MongoDB</li>
                    <li>Authentication and Authorization</li>
                    <li>Advanced React Patterns</li>
                    <li>Deployment and DevOps</li>
                    <li>Final Project and Code Review</li>
                  </ol>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="instructor" className="mt-4">
              <Card className="bg-neutral-900">
                <CardContent className="p-6 flex items-start space-x-4 text-white">
                  <Image
                    src={course.instructor.avatar} 
                    alt={course.instructor.name} 
                    width={96}
                    height={60}
                    className="rounded-full h-20 object-cover"
                  />
                  <div>
                    <h2 className="text-xl font-semibold mb-2">{course.instructor.name}</h2>
                    <p>{course.instructor.bio}</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        <div className="md:col-span-1">
          <Card className="bg-neutral-900">
            <CardContent className="p-6 space-y-4">
              <div className="relative w-full h-64 rounded-lg overflow-hidden">
              <Image 
                src={courseDetails.imageUrl}
                alt={course.title}
                fill
                objectFit="fit"
                className="rounded-lg"
              />
            </div>
              <div className="text-3xl font-bold text-white">₹{courseDetails.price}</div>
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                <Link href={`/userDetails/${courseDetails.id}`}>
                  Enroll Now
                </Link>
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
              <p className="text-sm text-gray-400 text-center">7-days money-back guarantee</p>
              <div className="border-t border-neutral-800 pt-4">
                <h3 className="font-semibold mb-2">This course includes:</h3>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center">
                    <Clock className="mr-2 h-4 w-4" />
                    10 weeks of content
                  </li>
                  <li className="flex items-center">
                    <Users className="mr-2 h-4 w-4" />
                    Access to student community
                  </li>
                  <li className="flex items-center">
                    <GraduationCap className="mr-2 h-4 w-4" />
                    Certificate of completion
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
}

export default CourseDetail;