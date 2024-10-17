import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export default async function handler(req: NextRequest) {
  if (req.method !== "POST") {
    throw new Error("Post request needed!");
  }

  const body = await req.json();

  const {
    type,
    thumbnail,
    title,
    description,
    courseId,
    parentContentId,
    metadata,
    adminPassword,
  }: {
    type: "video" | "folder" | "notion";
    thumbnail: string;
    title: string;
    description: string;
    courseId: number;
    parentContentId: number;
    metadata: any;
    adminPassword: string;
  } = body;

  if (adminPassword !== process.env.ADMIN_PASSWORD) {
    return NextResponse.json({}, { status: 403 });
  }

  const content = await prisma.content.create({
    data: {
      type,
      title,
      parentId: parentContentId,
      thumbnail,
    },
  });

  if (type === "folder") {
    if (courseId && !parentContentId) {
      await prisma.courseContent.create({
        data: {
          courseId,
          contentId: content.id,
        },
      });
    }
  } else if (type === "notion") {
    await prisma.notionMetadata.create({
      data: {
        notionId: metadata.notionId,
        contentId: content.id,
      },
    });
    if (courseId && !parentContentId) {
      await prisma.courseContent.create({
        data: {
          courseId,
          contentId: content.id,
        },
      });
    }
  } else if (type === "video") {
    await prisma.videoMetadata.create({
      data: {
        video_Link: metadata.videoLink,
        duration: metadata.duration,
        thumbnail_mosiac_url: metadata.thumbnailMosiacUrl,
        contentId: content.id,
      },
    });
    if (courseId && !parentContentId) {
      await prisma.courseContent.create({
        data: {
          courseId,
          contentId: content.id,
        },
      });
    }
  }

  return NextResponse.json({
    message: "Content Added Successfully!",
    status: 200,
  });
}