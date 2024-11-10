"use client"
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { PlayCircle, Trash } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

const BookmarkComponent = ({userBookmarks}: any) => {
    const user = {
        name: "John Doe",
        email: "john.doe@example.com",
        avatar: "/placeholder.svg?height=100&width=100",
    };
    const router = useRouter()

    const handleRedirect = (contentId: number) => {
      router.push(`/courseContent/${contentId}`)
    }
    const [loading, setLoading] = useState(false)

    const handleDeleteBookmark = async (bookmarkId: number) => {
      setLoading(true)
      try {
        const response = await fetch(`/api/bookmark/${bookmarkId}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await response.json();
        if (data.status === 200) {
          toast.success("Bookmark deleted successfully");
        } else {
          console.log("Error");
        }
      } catch (error) { 
        console.log(error)
      } finally {
        setLoading(false);
      }
    }

    return (
        <div className="min-h-screen bg-neutral-950 text-white">
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">My Bookmarks</h1>
        <ScrollArea className="h-[calc(100vh-200px)] pr-4">
          <div className="space-y-4">
            {userBookmarks.map((bookmark:any) => (
              <Card key={bookmark.id} className="bg-neutral-900">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold">
                    {bookmark.content.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm mb-2">Description: {bookmark.content.description}</p>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm">
                      Bookmarked: {bookmark.createdAt.trim().split('T')[0]}
                    </span>
                  </div>
                  <div className="flex space-x-2">
                    <Button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white" onClick={()=>handleRedirect(bookmark.content.id)}>
                      <PlayCircle className="mr-2 h-4 w-4" />
                      Watch Video
                    </Button>
                    <Button variant="outline" size="icon" className="bg-red-500 flex items-center justify-center" onClick={()=>handleDeleteBookmark(bookmark.id)}>  
                      <Trash className="h-4 w-4 text-white font-bold" />
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
}

export default BookmarkComponent;