"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import HeroVideoDialog from "@/components/ui/hero-video-dialog";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ChevronLeft, ChevronRight, Pause, Play, Send } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const VideoComponent = ({params, contentDetails}: { params: { contentId: string }, contentDetails: any }) => {
    const router = useRouter();
  const [isPlaying, setIsPlaying] = useState(false);
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

    return (
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
                    <h1 className="text-2xl font-bold">Lesson 1: Introduction to React Hooks</h1>
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
                <Card className="bg-neutral-900">
                  <CardHeader>
                    <CardTitle className="text-xl font-semibold">Lesson Notes</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ScrollArea className="h-[300px] w-full pr-4">
                      <div className="space-y-4">
                        <h2 className="text-xl font-semibold">React Hooks Overview</h2>
                        <p>React Hooks are functions that let you "hook into" React state and lifecycle features from function components. They were introduced in React 16.8 and have since become an integral part of React development.</p>
                        <h3 className="text-lg font-semibold">Key Hooks:</h3>
                        <ul className="list-disc pl-5 space-y-2">
                          <li><strong>useState:</strong> Allows you to add state to functional components.</li>
                          <li><strong>useEffect:</strong> Performs side effects in function components.</li>
                          <li><strong>useContext:</strong> Subscribes to React context without introducing nesting.</li>
                          <li><strong>useReducer:</strong> Manages complex state logic in components.</li>
                        </ul>
                        <p>In this lesson, we'll dive deep into how these hooks work and when to use them in your React applications.</p>
                      </div>
                    </ScrollArea>
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