"use client";
import React, { useEffect, useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { GraduationCap, Book, Award, Clock, Calendar, Github, Linkedin, Twitter, Globe } from "lucide-react"
import Link from 'next/link';

const Profile = ({ student, studentDetails }: { student: any, studentDetails: any }) => {
      const enrolledCourses = [
        { id: 1, title: "Advanced React Patterns", progress: 80 },
        { id: 2, title: "Machine Learning Fundamentals", progress: 60 },
        { id: 3, title: "Full Stack Development with Node.js", progress: 40 },
        { id: 4, title: "Data Structures and Algorithms", progress: 20 },
        { id: 5, title: "UI/UX Design Principles", progress: 10 },
      ]
    
      const achievements = [
        { id: 1, title: "Fast Learner", description: "Completed 3 courses in record time" },
        { id: 2, title: "Consistent Performer", description: "Maintained 90% average score across all quizzes" },
        { id: 3, title: "Active Participant", description: "Posted 100+ comments in course discussions" },
      ]

      useEffect(()=>{
        console.log(studentDetails);
      }, [])

    return (
        <div className="min-h-screen bg-neutral-950 text-white">
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <GraduationCap className="h-8 w-8 text-blue-500" />
          <span className="text-2xl font-bold">LearnLive</span>
        </Link>
        <nav>
          <Button variant="ghost" className="text-white hover:text-blue-500">
            My Courses
          </Button>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <Card className="bg-neutral-900">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <Avatar className="w-20 h-20">
                    <AvatarImage src={student.avatar} alt={student.name} />
                    <AvatarFallback>{student.name.split(' ').map((n:any) => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-2xl font-bold">{student.name}</CardTitle>
                    <p className="text-sm text-gray-400">{student.email}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-300 mb-4">{student.bio}</p>
                <div className="flex items-center text-sm text-gray-400 mb-2">
                  <Calendar className="mr-2 h-4 w-4" />
                  Joined on {student.joinDate}
                </div>
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <div className="text-center">
                    <p className="text-2xl font-bold">{student.coursesEnrolled}</p>
                    <p className="text-sm text-gray-400">Courses Enrolled</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold">{student.coursesCompleted}</p>
                    <p className="text-sm text-gray-400">Courses Completed</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold">{student.totalHoursLearned}</p>
                    <p className="text-sm text-gray-400">Hours Learned</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold">{student.certificates}</p>
                    <p className="text-sm text-gray-400">Certificates Earned</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="lg:col-span-2">
            <Tabs defaultValue="courses" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="courses">Enrolled Courses</TabsTrigger>
                <TabsTrigger value="achievements">Achievements</TabsTrigger>
              </TabsList>
              <TabsContent value="courses">
                <Card className="bg-neutral-900">
                  <CardHeader>
                    <CardTitle className="text-xl font-semibold">Enrolled Courses</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {enrolledCourses.map((course) => (
                        <div key={course.id} className="space-y-2">
                          <div className="flex justify-between items-center">
                            <p className="font-medium">{course.title}</p>
                            <span className="text-sm text-gray-400">{course.progress}%</span>
                          </div>
                          <Progress value={course.progress} className="w-full" />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="achievements">
                <Card className="bg-neutral-900">
                  <CardHeader>
                    <CardTitle className="text-xl font-semibold">Achievements</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {achievements.map((achievement) => (
                        <div key={achievement.id} className="flex items-start space-x-4">
                          <Award className="h-6 w-6 text-yellow-500 mt-1" />
                          <div>
                            <p className="font-medium">{achievement.title}</p>
                            <p className="text-sm text-gray-400">{achievement.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>

      <footer className="container mx-auto px-4 py-6 text-center text-gray-400">
        <p>&copy; 2024 LearnLive. All rights reserved.</p>
      </footer>
    </div>
    );
}

export default Profile;