import Image from 'next/image';
import Navbar from './Components/Navbar/Navbar';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Navbar />
      <header className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-base-100">
          <h1 className="text-4xl font-bold text-neutral">Welcome to The Tasty Tasters</h1>
          <p className="mt-4 text-xl text-accent">Collect feedback on your favorite brewery's beer.</p>
          <div className="mt-8">
            <Link href="#" className="btn btn-primary">
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {/* Your content goes here */}
      </main>
    </>
  );
}

