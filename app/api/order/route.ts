import { NextRequest, NextResponse } from "next/server";
import Razorpay from "razorpay";

const razorpay = new Razorpay({
    key_id: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || "",
    key_secret: process.env.NEXT_PUBLIC_RAZORPAY_KEY_SECRET || "",
})

export async function POST(req: NextRequest) {
    const { amount, currency } = (await req.json()) as { amount: string, currency: string }
    var options = {
        amount: Number(amount)*100,
        currency: "INR",
    }

    const order = await razorpay.orders.create(options)

    if(!order) return NextResponse.json({ error: "Failed to create order" }, { status: 500 })

    return NextResponse.json({ orderId: order.id }, { status: 200 })
}