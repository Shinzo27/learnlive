import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { Bookmark, GraduationCap, PlayCircle, Settings } from "lucide-react";
import Link from "next/link";

const page = () => {
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    avatar: "/placeholder.svg?height=100&width=100",
  };

  const bookmarks = [
    {
      id: 1,
      title: "React Hooks Deep Dive",
      course: "Advanced Web Development",
      timestamp: "3 days ago",
      duration: "15:30",
    },
    {
      id: 2,
      title: "Neural Networks Explained",
      course: "Machine Learning Fundamentals",
      timestamp: "1 week ago",
      duration: "22:45",
    },
    {
      id: 3,
      title: "Color Theory in UX",
      course: "UX Design Principles",
      timestamp: "2 days ago",
      duration: "18:20",
    },
    {
      id: 4,
      title: "Swift UI Basics",
      course: "iOS App Development",
      timestamp: "5 days ago",
      duration: "20:15",
    },
    {
      id: 5,
      title: "Graph Algorithms",
      course: "Data Structures and Algorithms",
      timestamp: "1 day ago",
      duration: "25:50",
    },
  ];

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">My Bookmarks</h1>
        <ScrollArea className="h-[calc(100vh-200px)] pr-4">
          <div className="space-y-4">
            {bookmarks.map((bookmark) => (
              <Card key={bookmark.id} className="bg-neutral-900">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold">
                    {bookmark.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm mb-2">Course: {bookmark.course}</p>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm">
                      Bookmarked: {bookmark.timestamp}
                    </span>
                    <span className="text-sm">
                      Duration: {bookmark.duration}
                    </span>
                  </div>
                  <div className="flex space-x-2">
                    <Button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white">
                      <PlayCircle className="mr-2 h-4 w-4" />
                      Watch Video
                    </Button>
                    <Button variant="outline" size="icon">
                      <Bookmark className="h-4 w-4" />
                    </Button>
                  </div>
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
