import Navbar from '../Components/Navbar/Navbar';
import { prisma } from '@/lib/prisma';
import TastingCard  from '../Components/TastingCard/Card';

export default async function Tests() {

    const tastings = await prisma.tasting.findMany();
    console.log(tastings)
  return (
    <div>
      <Navbar />
      <main className="mx-auto py-10 px-4 sm:px-6 md:px-8 lg:px-10 bg-base-100">
      <div className="grid grid-cols-1 gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {tastings.map((tasting) => {
        return <TastingCard key={tasting.id} {...tasting} />;
      })}
      </div>
      </main>
    </div>
  )
}