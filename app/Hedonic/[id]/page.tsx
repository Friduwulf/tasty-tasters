import Hedonic from '../../Components/Hedonic/Hedonic';
import Navbar from '../../Components/Navbar/Navbar';
import { prisma } from '@/lib/prisma';
import { BackButton } from '@/app/Components/Buttons';

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
      <main className="flex flex-col items-center bg-base-100 mx-auto py-5 px-4 sm:px-6 lg:px-8">
        <BackButton />
        <div className="card w-96 shadow-xl mb-5 bg-neutral">
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

