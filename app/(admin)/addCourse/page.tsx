"use client"
import Loader from "@/components/Loader";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import toast from "react-hot-toast";

const page = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [imageUrl, setImageUrl] = useState<File | null>(null);
  const [loading, setLoading] = useState(false)
  const router = useRouter();

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      setImageUrl(file);
    } else {
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
      toast.error("Please upload a valid image file (jpg, png, jpeg).");
    }
  }
  

  const handleSubmit = async(e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true)
    
    if (!imageUrl) {
      setLoading(false)
      return toast.error("Upload image properly!");
    }

    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("imageUrl", imageUrl);
  
      const res = await fetch('/api/admin/addCourse', {
        method: 'POST',
        body: formData
      })
  
      const data = await res.json();
      if(data.success) {
        toast.success("Course added successfully");
        router.push('/admin')
      } else {
        toast.error("Something went wrong");
      }
    } catch (error) {
      toast.error("Something went wrong!")
    } finally {
      setLoading(false)
    }
  };

  return loading ? <Loader/> : (
    <div className="min-h-screen bg-neutral-950 text-white">
      <main className="container mx-auto px-4 py-8">
        <Card className="bg-neutral-900 border-neutral-800">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Add New Course</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="title">Course Title</Label>
                <Input
                  id="title"
                  name="title"
                  value={title}
                  onChange={e=>setTitle(e.target.value)}
                  required
                  className="bg-neutral-800 border-neutral-700 text-white"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Course Description</Label>
                <Textarea
                  id="description"
                  name="description"
                  value={description}
                  onChange={e=>setDescription(e.target.value)}
                  required
                  className="bg-neutral-800 border-neutral-700 text-white"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="price">Course Price ($)</Label>
                <Input
                  id="price"
                  name="price"
                  type="number"
                  step="0.01"
                  value={price}
                  onChange={e=>setPrice(e.target.value)}
                  required
                  className="bg-neutral-800 border-neutral-700 text-white"
                />
              </div>  
              <div className="space-y-2">
                <Label htmlFor="price">Course Price ($)</Label>
                <Input
                  id="imageUrl"
                  name="imageUrl"
                  type="file"
                  ref={fileInputRef}
                  onChange={handleImageUpload}
                  className="bg-neutral-800 border-neutral-700 text-white"
                />
              </div>  
              <Button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white"
              >
                Add Course
              </Button>
            </form>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default page;