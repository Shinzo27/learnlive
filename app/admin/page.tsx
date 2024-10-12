"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import { TabsList } from "@radix-ui/react-tabs";
import {
  BarChart,
  BookOpen,
  FileText,
  GraduationCap,
  MessageSquare,
  Package,
  PlusCircle,
  Settings,
  Users,
} from "lucide-react";
import { useState } from "react";

const page = () => {
    const currentTime = new Date()
    const hours = currentTime.getHours()
    let greeting = "Good Morning"
    if (hours >= 12 && hours < 18) {
      greeting = "Good Afternoon"
    } else if (hours >= 18) {
      greeting = "Good Evening"
    }

  const adminFunctions = [
    { title: "Add Course", icon: <Package className="h-6 w-6" />, description: "Add new courses to the platform" },
    { title: "View Content", icon: <FileText className="h-6 w-6" />, description: "Browse and manage existing content" },
    { title: "Manage Users", icon: <Users className="h-6 w-6" />, description: "Invite, remove, and manage users" },
    { title: "Manage Courses", icon: <BookOpen className="h-6 w-6" />, description: "Add, remove, and manage courses" },
    { title: "Manage Settings", icon: <Settings className="h-6 w-6" />, description: "Configure platform settings" },
    { title: "Certificate Management", icon: <GraduationCap className="h-6 w-6" />, description: "" },
    { title: "Messages", icon: <MessageSquare className="h-6 w-6" />, description: "Send and receive messages"},
  ]

  return (
    <div className="min-h-screen bg-neutral-950 text-white p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-2">{greeting},</h1>
        <p className="text-gray-400 mb-8">Welcome! Explore more from below</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {adminFunctions.map((func, index) => (
            <Card key={index} className={`bg-neutral-950 border-neutral-800 cursor-pointer`} onClick={() => alert(`${func.title} Coming soon!`)}>
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className={`p-3 rounded-lg mb-4`}>
                  {func.icon}
                </div>
                <h2 className="text-xl font-semibold mb-2">{func.title}</h2>
                {func.description && (
                  <p className="text-sm text-gray-400 mb-4">{func.description}</p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
