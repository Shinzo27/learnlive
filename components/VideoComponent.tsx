"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import HeroVideoDialog from "@/components/ui/hero-video-dialog";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ChevronLeft, ChevronRight, Pause, Play, Send } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Loader from "@/components/Loader";
import toast from "react-hot-toast";

const VideoComponent = ({params, contentDetails}: { params: { contentId: string }, contentDetails: any }) => {
  const router = useRouter();
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([
    {
      id: 1,
      user: "Alice",
      text: "Great explanation of React hooks!",
      timestamp: "2 days ago",
    },
    {
      id: 2,
      user: "Bob",
      text: "Could you elaborate more on useEffect?",
      timestamp: "1 day ago",
    },
  ]);

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (comment.trim()) {
      setComments([
        ...comments,
        {
          id: comments.length + 1,
          user: "You",
          text: comment,
          timestamp: "Just now",
        },
      ]);
      setComment("");
    }
  };

  const handleRedirect = (lessonId: number) => {
    router.push(`/courseContent/contentId=${lessonId}`);
  };

  const [isLoading, setIsLoading] = useState(false);

  const handleMarkAsCompleted = async () => {
    try {
      setIsLoading(true);
      const response = await fetch("/api/course/videoProgress/markAsCompleted", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contentId: Number(params.contentId),
          currentTimestamp: 0,
          markAsCompleted: true,
        }),
      });
      const data = await response.json();
      if(data.status === 200) {
        toast.success("Video marked as completed successfully");
        router.push('/home');
      } else {
        console.log("Error");
      }
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false);
    }
  }

    return isLoading ? <Loader/> : (
        <div className="min-h-screen bg-neutral-950 text-white flex flex-col">
          <main className="flex-grow container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-6">
                <Card className="bg-neutral-900">
                  <CardContent className="p-6 space-y-6">
                    <div className="relative aspect-video bg-neutral-800 rounded-lg overflow-hidden">
                      <HeroVideoDialog
                        className="hidden dark:block"
                        animationStyle="top-in-bottom-out"
                        videoSrc={contentDetails.VideoMetaData.video_Link }
                        thumbnailSrc={contentDetails.VideoMetaData.thumbnail_mosiac_url}
                        thumbnailAlt="Hero Video"
                      />
                    </div>
                    <div className="flex justify-between">
                      <h1 className="text-2xl font-bold">Lesson 1: Introduction to React Hooks</h1>
                      <Button variant="ghost" className="bg-neutral-800 text-white" onClick={()=>handleMarkAsCompleted()}>Mark As Completed</Button>
                    </div>
                    <Card className="bg-neutral-800">
                      <CardHeader>
                        <CardTitle className="text-lg font-semibold">Comments</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ScrollArea className="h-[200px] w-full pr-4 mb-4">
                          {comments.map((comment) => (
                            <div key={comment.id} className="mb-4">
                              <p className="font-semibold">{comment.user}</p>
                              <p className="text-sm text-gray-400">{comment.timestamp}</p>
                              <p className="mt-1">{comment.text}</p>
                            </div>
                          ))}
                        </ScrollArea>
                        <form onSubmit={handleCommentSubmit} className="flex space-x-2">
                          <Input
                            placeholder="Add a comment..."
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                            className="flex-grow bg-neutral-700 border-neutral-600 text-white"
                          />
                          <Button type="submit" size="icon" className="bg-blue-600 hover:bg-blue-700 text-white">
                            <Send className="h-4 w-4" />
                          </Button>
                        </form>
                      </CardContent>
                    </Card>
                  </CardContent>
                </Card>
              </div>
              <div className="lg:col-span-1">
                <Card className="bg-neutral-900">
                  <CardHeader>
                    <CardTitle className="text-xl font-semibold">Course Content</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ScrollArea className="h-[600px] w-full pr-4">
                      <div className="space-y-4">
                        {[...Array(10)].map((_, index) => (
                          <Button
                            key={index}
                            variant="ghost"
                            className="w-full justify-start text-left hover:bg-neutral-800"
                            onClick={()=>handleRedirect(index)}
                          >
                            <div>
                              <p className="font-semibold">Lesson {index + 1}</p>
                              <p className="text-sm text-gray-400">Topic description</p>
                            </div>
                          </Button>
                        ))}
                      </div>
                    </ScrollArea>
                  </CardContent>
                </Card>
              </div>
            </div>
          </main>
        </div>
      )
}

export default VideoComponent;