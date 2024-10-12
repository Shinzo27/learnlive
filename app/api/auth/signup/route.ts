import type { NextApiRequest, NextApiResponse } from 'next'
import bcrypt from 'bcryptjs'; 
import { prisma } from '@/lib/prisma';
import { userSchema } from '@/lib/types';
import { NextRequest, NextResponse } from 'next/server';

interface Data {}

export async function POST(req: NextRequest) {
    if(req.method !== 'POST') {
        return NextResponse.json({ message: "Method not allowed!"});
    }

    const body = await req.json();

    const parsedPayload = userSchema.safeParse(body);

    if(!parsedPayload.success) {
        return NextResponse.json({ message: parsedPayload.error.message });
    }
    
    const { name, email, password } = parsedPayload.data;

    const existingUser = await prisma.user.findFirst({
        where: {
            email: email.toLowerCase(),
        },
    });

    if(existingUser) {
        return NextResponse.json({ message: "User already exist with this email!" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await prisma.user.create({
        data: {
            name,
            email: email.toLowerCase(),
            password: hashedPassword,
            role: "user",
        },
    });
    
    if(newUser) {
        return NextResponse.json({ message: "User created successfully!", status: 200 });
    } else {
        return NextResponse.json({ message: "Something went wrong!", status: 500 });
    }
}