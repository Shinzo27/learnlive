"use client"
import Loader from "@/components/Loader";
import { useRef, useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { GraduationCap, ArrowLeft, Plus, Trash2 } from "lucide-react"
import Link from 'next/link'
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

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
  const [courseData, setCourseData] = useState({
    title: '',
    description: '',
    overview: '',
    instructor: {
      name: '',
    },
    category: '',
    duration: '',
    price: '',
    curriculum: [{ title: '' }]
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setCourseData(prev => ({ ...prev, [name]: value }))
  }

  const handleInstructorChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setCourseData(prev => ({
      ...prev,
      instructor: { ...prev.instructor, [name]: value }
    }))
  }

  const handleCurriculumChange = (index: number, field: 'title' | 'description', value: string) => {
    setCourseData(prev => ({
      ...prev,
      curriculum: prev.curriculum.map((item, i) => 
        i === index ? { ...item, [field]: value } : item
      )
    }))
  }

  const addCurriculumItem = () => {
    setCourseData(prev => ({
      ...prev,
      curriculum: [...prev.curriculum, { title: '', description: '' }]
    }))
  }

  const removeCurriculumItem = (index: number) => {
    setCourseData(prev => ({
      ...prev,
      curriculum: prev.curriculum.filter((_, i) => i !== index)
    }))
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
      formData.append("overview", courseData.overview);
      formData.append("instructor", courseData.instructor.name);
      formData.append("duration", courseData.duration);
      formData.append("curriculum", JSON.stringify(courseData.curriculum));
  
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
    <header className="container mx-auto px-4 py-6 flex justify-between items-center">
      <Link href="/admin-dashboard" className="flex items-center space-x-2">
        <ArrowLeft className="h-6 w-6" />
        <span>Back to Dashboard</span>
      </Link>
      <div className="flex items-center space-x-2">
        <GraduationCap className="h-8 w-8 text-blue-500" />
        <span className="text-2xl font-bold">LearnLive</span>
      </div>
    </header>

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
                onChange={(e)=>setTitle(e.target.value)}
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
                onChange={(e)=>setDescription(e.target.value)}
                required
                className="bg-neutral-800 border-neutral-700 text-white"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="overview">Course Overview</Label>
              <Textarea
                id="overview"
                name="overview"
                value={courseData.overview}
                onChange={handleInputChange}
                required
                className="bg-neutral-800 border-neutral-700 text-white"
              />
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="instructor-name">Instructor Name</Label>
                <Input
                  id="instructor-name"
                  name="name"
                  value={courseData.instructor.name}
                  onChange={handleInstructorChange}
                  required
                  className="bg-neutral-800 border-neutral-700 text-white"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="duration">Course Duration (in weeks)</Label>
              <Input
                id="duration"
                name="duration"
                type="number"
                min={1}
                value={courseData.duration}
                onChange={handleInputChange}
                required
                className="bg-neutral-800 border-neutral-700 text-white"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="price">Course Price (₹)</Label>
              <Input
                id="price"
                name="price"
                type="number"
                step="1"
                min={0}
                value={price}
                onChange={(e)=>setPrice(e.target.value)}
                required
                className="bg-neutral-800 border-neutral-700 text-white"
              />
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Course Curriculum</h3>
              {courseData.curriculum.map((item, index) => (
                <div key={index} className="space-y-2 p-4 bg-neutral-800 rounded-md">
                  <div className="flex justify-between items-center">
                    <Label htmlFor={`curriculum-title-${index}`}>Module Title</Label>
                    {index > 0 && (
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        onClick={() => removeCurriculumItem(index)}
                        className="text-red-500 hover:text-red-400"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                  <Input
                    id={`curriculum-title-${index}`}
                    value={item.title}
                    onChange={(e) => handleCurriculumChange(index, 'title', e.target.value)}
                    required
                    className="bg-neutral-700 border-neutral-600 text-white"
                  />
                </div>
              ))}
              <Button type="button" onClick={addCurriculumItem} className=" ">
                <Plus className="mr-2 h-4 w-4" /> Add Module
              </Button>
            </div>
            <div className="space-y-2">
                <Label htmlFor="price">Course Thumbnail</Label>
                <Input
                  id="imageUrl"
                  name="imageUrl"
                  type="file"
                  ref={fileInputRef}
                  onChange={handleImageUpload}
                  className="bg-neutral-800 border-neutral-700 text-white"
                />
              </div> 
            <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
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