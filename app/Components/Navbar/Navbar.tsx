import Link from 'next/link';
import { SignInButton } from '../Buttons';


const Navbar = () => {
  return (
    <nav>
      <div className="bg-base-100 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link
                className='text-2xl font-bold text-neutral'
                href="/">
                  Tasty
                  <span className="text-accent">TASTERS</span>
              </Link>
            </div>
          </div>
          <div>
            <div className="ml-4 flex items-center space-x-4 md:ml-6">
            <SignInButton />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
