"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { FileText, Folder, Video } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import Loader from '@/components/Loader'

const page = ({ folders, courseId }: any) => {
  const [contentType, setContentType] = useState<
    "folder" | "video" | "document"
  >("folder");
  const [selectedFolder, setSelectedFolder] = useState<any>(null);
  const [selectedValue, setSelectedValue] = useState(null);
  const [videoUrl, setVideoUrl] = useState("");
  const [duration, setDuration] = useState(0);
  const [thumbnailMosiacUrl, setThumbnailMosiacUrl] = useState("");
  const [notionId, setNotionId] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const [contentData, setContentData] = useState({
    type: "folder",
    thumbnail: "",
    title: "",
    description: "",
    courseId: 0,
    parentContentId: 0,
    adminPassword: "",
  });

  const data = {
    type: contentType,
    thumbnail: contentData.thumbnail,
    title: contentData.title,
    description: contentData.description,
    courseId: courseId,
    parentContentId: parseInt(selectedFolder),
    metadata: {
      videoLink: videoUrl,
      duration: duration,
      thumbnailMosiacUrl: thumbnailMosiacUrl,
      notionId: notionId,
    },
    adminPassword: contentData.adminPassword,
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setContentData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string) => {
    setSelectedFolder(name);
    setSelectedValue(
      folders.find((folder: any) => folder.id === selectedFolder)?.title
    );
  };

  const handleVideoUrl = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setVideoUrl(e.target.value);
  };

  const handleVideoDuration = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setDuration(parseInt(e.target.value));
  };

  const handleThumbnailMosiacUrl = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setThumbnailMosiacUrl(e.target.value);
  };

  const handleNotionIdChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setNotionId(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const res = await fetch("/api/admin/addContent", {
        method: "POST",
        body: JSON.stringify(data),
      });
      const resData = await res.json();
      if (resData.success) {
        toast.success("Content added successfully");
        router.push("/admin");
      } else {
        toast.error("Something went wrong");
      }
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  return isLoading ? <Loader /> : (
    <div className="min-h-screen bg-neutral-950 text-white">
      <main className="container mx-auto px-4 py-8">
        <Card className="bg-neutral-900 border-neutral-800">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">
              Add Course Content
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label>Content Type</Label>
                <RadioGroup
                  defaultValue="folder"
                  onValueChange={(value) =>
                    setContentType(value as "folder" | "video" | "document")
                  }
                  className="flex space-x-4"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="folder" id="folder" />
                    <Label htmlFor="folder" className="flex items-center">
                      <Folder className="mr-2 h-4 w-4" />
                      New Folder
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

              <div className="space-y-2">
                <Label htmlFor="adminPassword">Admin Password</Label>
                <Input
                  id="adminPassword"
                  name="adminPassword"
                  type="password"
                  value={contentData.adminPassword}
                  onChange={handleInputChange}
                  className="bg-neutral-800 border-neutral-700 text-white"
                />
              </div>

              {contentType !== "folder" && (
                <div className="space-y-2">
                  <Label htmlFor="FolderId">Select Folder</Label>
                  <Select
                    name="FolderId"
                    onValueChange={(value) => {
                      handleSelectChange(value);
                    }}
                  >
                    <SelectTrigger className="bg-neutral-800 border-neutral-700 text-white">
                      <SelectValue placeholder="Select a Folder">
                        {selectedValue}
                      </SelectValue>
                    </SelectTrigger>
                    <SelectContent>
                      {folders.map((folder: any) => (
                        <SelectItem key={folder.id} value={folder.id}>
                          {folder.title}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              )}

              {contentType === "video" && (
                <>
                  <div className="space-y-2">
                    <Label htmlFor="videoUrl">Video Thumbnail</Label>
                    <Input
                      id="videoUrl"
                      name="videoUrl"
                      value={thumbnailMosiacUrl}
                      onChange={handleThumbnailMosiacUrl}
                      required
                      className="bg-neutral-800 border-neutral-700 text-white"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="videoUrl">Video URL</Label>
                    <Input
                      id="videoUrl"
                      name="videoUrl"
                      value={videoUrl}
                      onChange={handleVideoUrl}
                      required
                      className="bg-neutral-800 border-neutral-700 text-white"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="videoUrl">Video Duration</Label>
                    <Input
                      id="videoUrl"
                      name="videoUrl"
                      type="number"
                      value={duration}
                      onChange={handleVideoDuration}
                      required
                      className="bg-neutral-800 border-neutral-700 text-white"
                    />
                  </div>
                </>
              )}

              {contentType === "document" && (
                <div className="space-y-2">
                  <Label htmlFor="documentUrl">Document URL</Label>
                  <Input
                    id="documentUrl"
                    name="documentUrl"
                    value={notionId}
                    onChange={handleNotionIdChange}
                    required
                    className="bg-neutral-800 border-neutral-700 text-white"
                  />
                </div>
              )}

              <Button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white"
              >
                Add Content
              </Button>
            </form>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default page;
