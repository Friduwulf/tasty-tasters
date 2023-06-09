import { prisma } from '@/lib/prisma';
import Navbar from '../../Components/Navbar/Navbar';
import Test from '../../Components/Tests/Tests';

interface Props {
  params: { id: string };
}
//Takes in a tasting ID and returns all tests associated with that tasting
export default async function Tests({ params }: Props) {
  console.log(`tastingID: ${params.id}`);
  const tests = await prisma.tests.findMany({ 
    where: 
    { tastingId: params.id }, 
    include: { beer : true } 
  });
  console.log(`Tests: ${tests}`)
  return (
    <div>
      <Navbar />
      <main className="mx-auto py-10 px-4 sm:px-6 md:px-8 lg:px-10 bg-base-100">
        <div className="grid gap-10 justify-items-center sm:min-w-11/12 sm:mx-0 lg:mx-20 xl:mx-40 2xl:mx-80 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-20">
          {tests.map((test) => (
            <Test key={test.tastingId} {...test} />
          ))}
        </div>
      </main>
    </div>
  );
}