"use client"
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { SelectValue } from "@radix-ui/react-select";
import { useState } from "react";

const page = () => {
  const [courseData, setCourseData] = useState({
    title: "",
    description: "",
    instructor: "",
    category: "",
    duration: "",
    price: "",
    isPublished: false,
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setCourseData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setCourseData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSwitchChange = (checked: boolean) => {
    setCourseData((prev) => ({ ...prev, isPublished: checked }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Course data submitted:", courseData);
    // Here you would typically send the data to your backend
  };

  return (
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
                  value={courseData.title}
                  onChange={handleInputChange}
                  required
                  className="bg-neutral-800 border-neutral-700 text-white"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Course Description</Label>
                <Textarea
                  id="description"
                  name="description"
                  value={courseData.description}
                  onChange={handleInputChange}
                  required
                  className="bg-neutral-800 border-neutral-700 text-white"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="instructor">Instructor</Label>
                <Input
                  id="instructor"
                  name="instructor"
                  value={courseData.instructor}
                  onChange={handleInputChange}
                  required
                  className="bg-neutral-800 border-neutral-700 text-white"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="category">Category</Label>
                <Select
                  name="category"
                  onValueChange={(value) =>
                    handleSelectChange("category", value)
                  }
                >
                  <SelectTrigger className="bg-neutral-800 border-neutral-700 text-white">
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="web-development">
                      Web Development
                    </SelectItem>
                    <SelectItem value="data-science">Data Science</SelectItem>
                    <SelectItem value="mobile-development">
                      Mobile Development
                    </SelectItem>
                    <SelectItem value="machine-learning">
                      Machine Learning
                    </SelectItem>
                    <SelectItem value="design">Design</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="duration">Course Duration (in weeks)</Label>
                <Input
                  id="duration"
                  name="duration"
                  type="number"
                  value={courseData.duration}
                  onChange={handleInputChange}
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
                  value={courseData.price}
                  onChange={handleInputChange}
                  required
                  className="bg-neutral-800 border-neutral-700 text-white"
                />
              </div>

              <div className="flex items-center space-x-2">
                <Switch
                  id="isPublished"
                  checked={courseData.isPublished}
                  onCheckedChange={handleSwitchChange}
                />
                <Label htmlFor="isPublished">Publish course immediately</Label>
              </div>

              <Button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700"
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
