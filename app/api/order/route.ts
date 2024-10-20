import { checkIfCoursePurchased, checkIfNumberExists, checkIfUserExists } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";
import Razorpay from "razorpay";

const razorpay = new Razorpay({
    key_id: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || "",
    key_secret: process.env.NEXT_PUBLIC_RAZORPAY_KEY_SECRET || "",
})

export async function POST(req: NextRequest) {
    if (req.method !== "POST") return NextResponse.json({ error: "Method not allowed" }, { status: 405 })
    const { courseId, amount, email, number } = await req.json()
    console.log({
        courseId: courseId,
        amount: amount,
        email: email,
        number: number
    })
    if (!amount || !email) return NextResponse.json({ error: "Missing required fields" }, { status: 400 })

    const checkUser = await checkIfUserExists(email)
    if (!checkUser) return NextResponse.json({ error: "User not found! Please Signup first!", status: 404 })

    const checkIfPurchased = await checkIfCoursePurchased(parseInt(courseId), checkUser.id)
    if(checkIfPurchased) return NextResponse.json({ error: "Already purchased this course!", status: 400 })

    const checkIfNumberAlreadyExists = await checkIfNumberExists(number, parseInt(courseId))
    if(checkIfNumberAlreadyExists) return NextResponse.json({ error: "Number already exists!", status: 400 })

    var options = {
        amount: Number(amount)*100,
        currency: "INR",
    }

    const order = await razorpay.orders.create(options)

    if(!order) return NextResponse.json({ error: "Failed to create order" }, { status: 500 })

    return NextResponse.json({ order: order, status: 200 })
}