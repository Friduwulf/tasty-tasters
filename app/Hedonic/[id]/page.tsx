import Hedonic from '../../Components/Hedonic/Hedonic';
import Navbar from '../../Components/Navbar/Navbar';
import { prisma } from '@/lib/prisma';
import Head from 'next/head';
import Image from 'next/image';

interface RateBeerProps {
  params: {
    id: string;
  }
}

export default async function RateBeer({ params }: RateBeerProps) {
  console.log(`params.id: ${params.id}`)
  const rateBeer = await prisma.beer.findUnique({ where: { id: params.id}})
  console.log(`rateBeer: ${rateBeer}`)
  const { name, brewery, style } = rateBeer;

  return (
    <div>
      <Navbar />
      <main className="flex flex-col items-center max-w-7xl mx-auto py-5 px-4 sm:px-6 lg:px-8">
        <a className='justify-start mb-5' href={`/Tests`}>
          <img 
            src="/icons8-back-50.png" 
            alt="back arrow"
            width={40}
            height={40}
          />
        </a>
        <div className="card w-96 bg-base-100 shadow-xl mb-5">
          <div className="card-body">
            <h2 className="card-title">{name}</h2>
            <p>Brewery: {brewery}</p>
            <p>Style: {style}</p>
          </div>
        </div>
        <Hedonic />
      </main>
    </div>
  );
};

