"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { FileText, Folder, Video } from "lucide-react"
import { useState } from "react"

const page = () => {
    const [contentType, setContentType] = useState<'folder' | 'video' | 'document'>('folder')
    const [contentData, setContentData] = useState({
        title: '',
        description: '',
        moduleId: '',
        videoUrl: '',
        documentUrl: '',
    })

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setContentData(prev => ({ ...prev, [name]: value }))
    }

    const handleSelectChange = (name: string, value: string) => {
        setContentData(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log('Content data submitted:', { type: contentType, ...contentData })
        // Here you would typically send the data to your backend
    }

    return (
        <div className="min-h-screen bg-neutral-950 text-white">

      <main className="container mx-auto px-4 py-8">
        <Card className="bg-neutral-900 border-neutral-800">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Add Course Content</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label>Content Type</Label>
                <RadioGroup
                  defaultValue="module" 
                  onValueChange={(value) => setContentType(value as 'folder' | 'video' | 'document')}
                  className="flex space-x-4"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="module" id="module" />
                    <Label htmlFor="module" className="flex items-center">
                      <Folder className="mr-2 h-4 w-4" />
                      New Module
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="video" id="video" />
                    <Label htmlFor="video" className="flex items-center">
                      <Video className="mr-2 h-4 w-4" />
                      New Video
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="document" id="document" />
                    <Label htmlFor="document" className="flex items-center">
                      <FileText className="mr-2 h-4 w-4" />
                      New Document
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-2">
                <Label htmlFor="title">Title</Label>
                <Input
                  id="title"
                  name="title"
                  value={contentData.title}
                  onChange={handleInputChange}
                  required
                  className="bg-neutral-800 border-neutral-700 text-white"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  name="description"
                  value={contentData.description}
                  onChange={handleInputChange}
                  className="bg-neutral-800 border-neutral-700 text-white"
                />
              </div>

              {contentType !== 'folder' && (
                <div className="space-y-2">
                  <Label htmlFor="moduleId">Select Module</Label>
                  <Select name="moduleId" onValueChange={(value) => handleSelectChange('moduleId', value)}>
                    <SelectTrigger className="bg-neutral-800 border-neutral-700 text-white">
                      <SelectValue placeholder="Select a module" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="module1">Module 1: Introduction</SelectItem>
                      <SelectItem value="module2">Module 2: Advanced Concepts</SelectItem>
                      <SelectItem value="module3">Module 3: Practical Applications</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              )}

              {contentType === 'video' && (
                <div className="space-y-2">
                  <Label htmlFor="videoUrl">Video URL</Label>
                  <Input
                    id="videoUrl"
                    name="videoUrl"
                    value={contentData.videoUrl}
                    onChange={handleInputChange}
                    required
                    className="bg-neutral-800 border-neutral-700 text-white"
                  />
                </div>
              )}

              {contentType === 'document' && (
                <div className="space-y-2">
                  <Label htmlFor="documentUrl">Document URL</Label>
                  <Input
                    id="documentUrl"
                    name="documentUrl"
                    value={contentData.documentUrl}
                    onChange={handleInputChange}
                    required
                    className="bg-neutral-800 border-neutral-700 text-white"
                  />
                </div>
              )}

              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                Add Content
              </Button>
            </form>
          </CardContent>
        </Card>
      </main>
    </div>
    );
}

export default page;