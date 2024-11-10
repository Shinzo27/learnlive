import { prisma } from '@/lib/prisma'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
    const { contentId, userId }: any = await req.json()
    console.log("content" + contentId);  
    console.log("user" + userId);  
    if (!contentId || !userId) {
        return NextResponse.json({
            status: 400,
            message: "Content Id or User Id is missing"
        })
    }
    try {
        const bookmark = await prisma.bookmark.create({
            data: {
                contentId: contentId,
                userId: userId
            }
        })
        if(bookmark) {
        return NextResponse.json({
            status: 200,
            message: "Bookmarked successfully"
        })
        } else {
            return NextResponse.json({
                status: 400,
                message: "Something went wrong!"
            })
        }
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            status: 500,
            message: "Error"
        })
    }
}

export async function DELETE(req: NextRequest) {
    const { id, userId }: any = await req.json()
    console.log("content id" + id);
    if (!id) {
        return NextResponse.json({
            status: 400,
            message: "Content Id is missing"
        })
    }
    try {
        const bookmark = await prisma.bookmark.delete({
            where: {
                id: id
            }
        })
        if(bookmark) {
        return NextResponse.json({
            status: 200,
            message: "Bookmark deleted successfully"
        })
        } else {
            return NextResponse.json({
                status: 400,
                message: "Something went wrong!"
            })
        }
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            status: 500,
            message: error
        })
    }
}