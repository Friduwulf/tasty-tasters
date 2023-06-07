import { prisma } from '@/lib/prisma'
import { NextRequest, NextResponse } from 'next/server'

interface Params {
    params: { id: string }
}


export default async function GET( params: Params) {


    const tests = await prisma.tests.findMany(
        {
            where: {
                tastingId: params.params.id
        }
    })
    return NextResponse.json(tests);
}