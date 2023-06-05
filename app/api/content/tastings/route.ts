import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
    const tastings = await prisma.tasting.findMany();
        console.log(tastings);

        return NextResponse.json(tastings);
}