import { NEXT_AUTH } from '@/lib/auth';
import { getServerSession } from 'next-auth';
import { NextResponse } from 'next/server';
import { z } from 'zod';
import { prisma } from '@/lib/prisma';

const requestBodySchema = z.object({
    contentId: z.number(),
    markAsCompleted: z.boolean(),
});

export async function POST( req: NextResponse ) {
    const parseResult = requestBodySchema.safeParse(await req.json());
    if (!parseResult.success) {
        return NextResponse.json({ error: parseResult.error.message }, { status: 400 });
    }
    const { contentId, markAsCompleted } = parseResult.data;
    const session = await getServerSession(NEXT_AUTH);

    const updatedRecord = await prisma.videoProgress.upsert({
        where: {
          contentId_userId: {
            contentId: Number(contentId),
            userId: session.user.id,
          },
        },
        create: {
          contentId: Number(contentId),
          userId: session.user.id,
          currentTimestamp: 0,
          markAsCompleted,
        },
        update: {
          markAsCompleted,
        },
    });

    return NextResponse.json({updatedRecord, status: 200});
}