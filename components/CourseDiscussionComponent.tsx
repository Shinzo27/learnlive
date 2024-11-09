"use client";
import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ScrollArea } from "@/components/ui/scroll-area"
import { GraduationCap, MessageSquare, ThumbsUp, Reply, Flag } from "lucide-react"
import Link from 'next/link'
interface Post {
  id: number;
  author: string;
  avatar: string;
  content: string;
  timestamp: string;
  likes: number;
  replies: Reply[];
}

interface Reply {
  id: number;
  author: string;
  avatar: string;
  content: string;
  timestamp: string;
}

const CourseDiscussionComponent = () => {
    const [posts, setPosts] = useState<Post[]>([
        {
          id: 1,
          author: "Alice Johnson",
          avatar: "/placeholder.svg?height=40&width=40",
          content: "Has anyone found a good resource for understanding React hooks in depth?",
          timestamp: "2 hours ago",
          likes: 5,
          replies: [
            {
              id: 1,
              author: "Bob Smith",
              avatar: "/placeholder.svg?height=32&width=32",
              content: "I found the official React docs to be really helpful for hooks. Have you checked those out?",
              timestamp: "1 hour ago"
            }
          ]
        },
        {
          id: 2,
          author: "Charlie Brown",
          avatar: "/placeholder.svg?height=40&width=40",
          content: "I'm struggling with the concept of closures in JavaScript. Any tips?",
          timestamp: "1 day ago",
          likes: 3,
          replies: []
        }
      ])
    
      const [newPost, setNewPost] = useState("")
    
      const handleNewPost = (e: React.FormEvent) => {
        e.preventDefault()
        if (newPost.trim()) {
          const post: Post = {
            id: posts.length + 1,
            author: "Current User",
            avatar: "/placeholder.svg?height=40&width=40",
            content: newPost,
            timestamp: "Just now",
            likes: 0,
            replies: []
          }
          setPosts([post, ...posts])
          setNewPost("")
        }
      }

      const handleLike = (postId: number) => {
        setPosts(posts.map(post => 
          post.id === postId ? { ...post, likes: post.likes + 1 } : post
        ))
      }


  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <main className="container mx-auto px-4 py-8">
        <Card className="bg-neutral-900 mb-6">
          <CardHeader>
            <CardTitle className="text-2xl font-bold flex items-center">
              <MessageSquare className="mr-2 h-6 w-6" />
              Course Discussions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleNewPost} className="mb-6">
              <Textarea
                placeholder="Start a new discussion..."
                value={newPost}
                onChange={(e) => setNewPost(e.target.value)}
                className="bg-neutral-800 border-neutral-700 text-white mb-2"
              />
              <Button type="submit">Post</Button>
            </form>
            <ScrollArea className="h-[600px]">
              {posts.map((post) => (
                <Card key={post.id} className="bg-neutral-800 mb-4">
                  <CardContent className="pt-6">
                    <div className="flex items-start space-x-4">
                      <Avatar>
                        <AvatarImage src={post.avatar} alt={post.author} />
                        <AvatarFallback>{post.author[0]}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h3 className="font-semibold">{post.author}</h3>
                          <span className="text-sm text-gray-400">{post.timestamp}</span>
                        </div>
                        <p className="mt-2">{post.content}</p>
                        <div className="mt-4 flex items-center space-x-4">
                          <Button variant="ghost" size="sm" onClick={() => handleLike(post.id)}>
                            <ThumbsUp className="mr-2 h-4 w-4" />
                            {post.likes}
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Reply className="mr-2 h-4 w-4" />
                            Reply
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Flag className="mr-2 h-4 w-4" />
                            Report
                          </Button>
                        </div>
                        {post.replies.length > 0 && (
                          <div className="mt-4 space-y-4">
                            {post.replies.map((reply) => (
                              <div key={reply.id} className="flex items-start space-x-4">
                                <Avatar className="w-8 h-8">
                                  <AvatarImage src={reply.avatar} alt={reply.author} />
                                  <AvatarFallback>{reply.author[0]}</AvatarFallback>
                                </Avatar>
                                <div className="flex-1">
                                  <div className="flex items-center justify-between">
                                    <h4 className="font-semibold">{reply.author}</h4>
                                    <span className="text-sm text-gray-400">{reply.timestamp}</span>
                                  </div>
                                  <p className="mt-1">{reply.content}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </ScrollArea>
          </CardContent>
        </Card>
      </main>
    </div>
  )
};

export default CourseDiscussionComponent;
