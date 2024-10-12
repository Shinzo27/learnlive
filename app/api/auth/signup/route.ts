import type { NextApiRequest, NextApiResponse } from 'next'
import bcrypt from 'bcryptjs'; 
import { prisma } from '@/lib/prisma';
import { userSchema } from '@/lib/types';

interface Data {}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    if(req.method === 'POST') {
        res.status(200).json({ message: "Method not allowed!"});
    }

    const payload = req.body;

    const parsedPayload = userSchema.safeParse(payload);

    if(!parsedPayload.success) {
        return res.status(400).json({ message: parsedPayload.error.message });
    }
    
    const { name, email, password } = parsedPayload.data;

    const existingUser = await prisma.user.findFirst({
        where: {
            email: email.toLowerCase(),
        },
    });

    if(existingUser) {
        res.status(400).json({ message: "User already exists!" });
        return;
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await prisma.user.create({
        data: {
            name,
            email: email.toLowerCase(),
            password: hashedPassword,
        },
    });

    res.status(200).json({ message: "User created successfully!" });
}