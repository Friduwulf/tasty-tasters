import { prisma } from '@/lib/prisma';
import Navbar from '../../Components/Navbar/Navbar';
import Test from '../../Components/Tests/Tests';

interface Props {
  params: { id: string };
}

interface TestProps {
  id: string;
  testType: string;
  batch: string;
  tastingId: string;
  beerName: string;
  beerStyle: string;
}

export default async function Tests({ params }: Props) {
  // console.log(`tastingID: ${params.id}`);
  const tests = await prisma.tests.findMany({ 
    where: 
    { name: "Sample A" }, 
    include: { beer : true } 
  });
  console.log(`Tests: ${tests}`)
  return (
    <div>
      <Navbar />
      <main className="mx-auto py-10 px-4 sm:px-6 md:px-8 lg:px-10 bg-base-100">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {tests.map((test) => (
            <Test key={test.tastingId} {...test} />
          ))}
        </div>
      </main>
    </div>
  );
}