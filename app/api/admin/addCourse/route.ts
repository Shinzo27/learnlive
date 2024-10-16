import { courseSchema } from "@/lib/types";
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { uploadToCloudinary } from "@/lib/cloudinary";

export const POST = async (req: NextRequest) => {
    try {
        const formData = await req.formData();
        
        const title = formData.get('title') as string;
        const description = formData.get('description') as string;
        const price = parseFloat(formData.get('price') as string);
        const imageFile = formData.get('imageUrl') as File;

        const fileBuffer = await imageFile.arrayBuffer();

        const mimeType = imageFile.type;
        const encoding = "base64";
        const imageBase64 = Buffer.from(fileBuffer).toString("base64");

        const fileUri = "data:" + mimeType + ";" + encoding + "," + imageBase64;

        const payload = {
            title,
            description,
            price,
            imageUrl: imageFile ? imageFile.name : null,
        }

        console.log(payload);

        const parsedPayload = courseSchema.safeParse(payload);

        if (!parsedPayload.success) {
            return NextResponse.json({ body: "Invalid payload", status: 400 });
        }
        
        let imageUrl: string = '';

        if(parsedPayload.data.imageUrl) {
            const res = await uploadToCloudinary(fileUri, parsedPayload.data.imageUrl);

            if(res.success) {
               imageUrl = res?.result?.secure_url || '';
            } else {
                return NextResponse.json({ body: "Something went wrong", status: 500 });
            }
        }


        const ifExists = await prisma.course.findFirst({
            where: {
                title: parsedPayload.data.title,
            },
        });
        
        if (ifExists) {
            return NextResponse.json({ body: "Course already exists", status: 400 });
        }
        
        const newCourse = await prisma.course.create({
            data: {
                title: parsedPayload.data.title,
                description: parsedPayload.data.description,
                price: parsedPayload.data.price,
                imageUrl: imageUrl,
            }
        });
        
        if(newCourse) {
            return NextResponse.json({ success: true, message: "Course added successfully", status: 200 });
        } else {
            return NextResponse.json({ success: false, body: "Something went wrong", status: 500 });
        }
    } catch (error) {
        return NextResponse.json({ body: error, status: 500 });
    }
}