import { createPurchase, getUserDetails } from '@/lib/db';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req:NextRequest) {
    const body = await req.json();
    const { email, courseId } = body
    const user = await getUserDetails(email);
    if(!user) return NextResponse.json({ error: "User not found" }, { status: 404 })

    const handleCreatePurchase = await createPurchase(courseId, user.id)
    if(!handleCreatePurchase) return NextResponse.json({ error: "Failed to create purchase" }, { status: 500 })
    return NextResponse.json({ message: "Purchase created successfully", status: 200 })
}