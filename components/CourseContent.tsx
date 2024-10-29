"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import HeroVideoDialog from "@/components/ui/hero-video-dialog";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ChevronLeft, ChevronRight, Pause, Play, Send } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import VideoComponent from "./VideoComponent";
import DocsComponent from "./DocsComponent";

const CourseContent = ({
  params,
  contentDetails,
}: {
  params: { contentId: string };
  contentDetails: any;
}) => {
  const contentType = contentDetails.type;
  return (
    contentType === 'video' ? (
    <VideoComponent params={params} contentDetails={contentDetails} />
    ) : (
      <div>
        <DocsComponent />
      </div>
    )
  );
};

export default CourseContent;
