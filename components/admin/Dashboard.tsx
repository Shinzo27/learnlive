"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
import { useRouter } from "next/navigation";

const Dashboard = () => {
    const currentTime = new Date()
    const hours = currentTime.getHours()
    let greeting = "Good Morning"
    if (hours >= 12 && hours < 18) {
      greeting = "Good Afternoon"
    } else if (hours >= 18) {
      greeting = "Good Evening"
    }

  const adminFunctions = [
    { title: "Add Course", icon: <Package className="h-6 w-6" />, description: "Add new courses to the platform", route: "/addCourse" },
    { title: "View Content", icon: <FileText className="h-6 w-6" />, description: "Browse and manage existing content", route: "/content" },
    { title: "Manage Users", icon: <Users className="h-6 w-6" />, description: "Invite, remove, and manage users", route: "/manageUser" },
    { title: "Manage Courses", icon: <BookOpen className="h-6 w-6" />, description: "Add, remove, and manage courses", route: "/manageCourses" },
    { title: "Manage Settings", icon: <Settings className="h-6 w-6" />, description: "Configure platform settings", route: "/manageSetting" },
    { title: "Certificate Management", icon: <GraduationCap className="h-6 w-6" />, description: "", route: "/manageCertificate" },
    { title: "Messages", icon: <MessageSquare className="h-6 w-6" />, description: "Send and receive messages", route: "/manageMessage"},
  ] 

  const router = useRouter();

    return (
        <div className="min-h-screen bg-neutral-950 text-white p-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-2">{greeting},</h1>
          <p className="text-gray-400 mb-8">Welcome! Explore more from below</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {adminFunctions.map((func, index) => (
              <Card key={index} className={`bg-neutral-950 border-neutral-800 cursor-pointer`} onClick={() => router.push(func.route)}>
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
}

export default Dashboard;