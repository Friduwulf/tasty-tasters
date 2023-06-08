import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'

interface Props {
  params: { id: string };
}
  
export async function GET(request: Request, { params }: Props) {
  const tastingId  = params.id;
  console.log(`id: ${params.id}`)

  const theTests = await prisma.tests.findMany({ 
    include: 
    { beer : true, tasting: true }, 
    where: 
    { tastingId: tastingId },
  }); 
  console.log(theTests);
  return NextResponse.json(theTests);
}