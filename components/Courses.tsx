"use client"
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { useRouter } from "next/navigation";

function CourseCard({ title, imageUrl, courseId }: { title: string; imageUrl: string, courseId: number }) { 
    const router = useRouter();
    return (
      <Card className="overflow-hidden bg-neutral-900 rounded-lg">
        <CardContent className="p-0">
          <div className="relative  rounded-lg">
            <img
              alt={`${title} thumbnail`}
              className=" rounded-lg"
              src={imageUrl}
              style={{
                aspectRatio: "16/9",
                objectFit: "contain",
              }}
            />
          </div>
        </CardContent>
        <CardFooter className="flex flex-col items-start gap-4 p-6">
          <h3 className="text-xl font-semibold">{title}</h3>
          <Button className="bg-neutral-700 hover:bg-neutral-800 text-white" onClick={()=>{router.push(`/courseDetail/${courseId}`)}}>View Course</Button>
        </CardFooter>
      </Card>
    )
}

export default CourseCard;