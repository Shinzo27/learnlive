import { NextRequest, NextResponse } from "next/server";
import crypto from 'crypto'

export async function POST(req: NextRequest) {
    const body = await req.json()
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = body
    console.log("body",body);
    const bodyCheck = razorpay_order_id + "|" + razorpay_payment_id;
    const expectedSignature = crypto.createHmac('sha256', process.env.NEXT_PUBLIC_RAZORPAY_KEY_SECRET || "").update(bodyCheck.toString()).digest('hex');

    const isAuthentic = expectedSignature === razorpay_signature;

    if(!isAuthentic) return NextResponse.json({ error: "Signature is not authentic" }, { status: 400 })

    return NextResponse.json({ status: 200 })
}