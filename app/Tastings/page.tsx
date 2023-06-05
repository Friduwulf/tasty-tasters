import Navbar from '../Components/Navbar/Navbar';
import { prisma } from '@/lib/prisma';
import { TastingCard } from '../Components/TastingCard/Card';

export default async function RateBeer() {

    const tastings = await prisma.tasting.findMany();

  return (
    <div>
      <Navbar />
      <main className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {tastings.map((tasting) => (
          return <TastingCard key={tasting.id} {...tasting} />
      </div>
      </main>
        )
    </div>
  );
};