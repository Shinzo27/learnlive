import { NEXT_AUTH } from '@/lib/auth';
import { NextApiRequest, NextApiResponse } from 'next';
import { getServerSession } from 'next-auth';
import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { z } from 'zod';

export async function GET(req:NextRequest) {
    const url = new URL(req.url);
    const contentId = new URLSearchParams(url.search).get('contentId');
    const session =  await getServerSession(NEXT_AUTH);

    if (!session || !session?.user || !contentId) {
        return NextResponse.json({}, { status: 401 });
    }

    const currentProgress = await prisma.videoProgress.findFirst({
        where: {
          userId: session.user.id,
          contentId: Number(contentId),
        },
    });

    return NextResponse.json({
        progress: currentProgress?.currentTimestamp ?? 0,
        markAsCompleted: currentProgress?.markAsCompleted ?? false,
    });
}

const requestBodySchema = z.object({
    contentId: z.number(),
    currentTimestamp: z.number(),
});

export async function POST(req: NextRequest) {
    const parseResult = requestBodySchema.safeParse(await req.json());
    if (!parseResult.success) {
        return NextResponse.json({ error: parseResult.error.message }, { status: 400 });
    }

    const { contentId, currentTimestamp } = parseResult.data;

    const session =  await getServerSession(NEXT_AUTH);
    if (!session || !session?.user) {
        return NextResponse.json({}, { status: 401 });
    }

    const videoProgress = await prisma.videoProgress.upsert({
        where: {
            contentId_userId:{
                userId: session.user.id,
                contentId: Number(contentId),
            }
        },
        create: {
            userId: session.user.id,
            contentId: Number(contentId),
            currentTimestamp: currentTimestamp,
            markAsCompleted: false,
        },
        update: {
            currentTimestamp: currentTimestamp,
            markAsCompleted: false,
        },
    });

    return NextResponse.json(videoProgress);
}