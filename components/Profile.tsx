"use client";
import React, { useEffect, useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { GraduationCap, Book, Award, Clock, Calendar, Github, Linkedin, Twitter, Globe, BookOpen } from "lucide-react"
import Link from 'next/link';

const Profile = ({ student }: { student: any }) => {
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
        console.log(student);
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
                  Joined on 05/10/2024
                </div>
                <div className="grid grid-cols-2 gap-4 mt-4 pt-7">
                  <div className="text-center">
                    <p className="text-2xl font-bold">{student.purchases.length}</p>
                    <p className="text-sm text-gray-400">Courses Enrolled</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold">0</p>
                    <p className="text-sm text-gray-400">Courses Completed</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold">0</p>
                    <p className="text-sm text-gray-400">Certificates Earned</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="lg:col-span-2">
            <Card className="bg-neutral-900">
              <CardHeader>
                <CardTitle className="text-xl font-semibold">Enrolled Courses</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {student.purchases.map((course:any) => (
                    <li key={course.id} className="flex items-center space-x-2">
                      <BookOpen className="h-5 w-5 text-blue-500" />
                      <span>{course.course.title}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
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