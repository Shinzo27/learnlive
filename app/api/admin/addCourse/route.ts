import { courseSchema } from "@/lib/types";
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const POST = async (req: NextRequest) => {
    try {
        const formData = await req.formData();
        
        const title = formData.get('title') as string;
        const description = formData.get('description') as string;
        const price = parseFloat(formData.get('price') as string);
        const imageFile = formData.get('imageUrl') as File | null;

        const payload = {
            title,
            description,
            price,
            imageUrl: imageFile ? imageFile.name : null,
        }

        const parsedPayload = courseSchema.safeParse(payload);

        if (!parsedPayload.success) {
            return NextResponse.json({ body: "Invalid payload", status: 400 });
        }
        
        let imageUrl = '';

        if(parsedPayload.data.imageUrl) {
            // const result = await cloudinary.uploader.upload(parsedPayload.data.imageUrl,{
            //     folder: 'uploads'
            // });

            // if(!result.secure_url){
            //     console.log(result);
            //     return NextResponse.json({ body: "Invalid image", status: 400 });
            // }
        }


        // const ifExists = await prisma.course.findFirst({
        //     where: {
        //         title: parsedPayload.data.title,
        //     },
        // });
        
        // if (ifExists) {
        //     return NextResponse.json({ body: "Course already exists", status: 400 });
        // }
        
        // const newCourse = await prisma.course.create({
        //     data: {
        //         title: parsedPayload.data.title,
        //         description: parsedPayload.data.description,
        //         price: parsedPayload.data.price,
        //         imageUrl: parsedPayload.data.imageUrl,
        //     }
        // });
        
        // if(newCourse) {
        //     return NextResponse.json({ message: "Course added successfully", status: 200 });
        // } else {
        //     return NextResponse.json({ body: "Something went wrong", status: 500 });
        // }
    } catch (error) {
        return NextResponse.json({ body: error, status: 500 });
    }
}