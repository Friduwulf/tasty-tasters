import Link from 'next/link';
import { SignInButton, SignOutButton } from '../Buttons';


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
                  Tasty Tasters
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center space-x-4 md:ml-6">
            <button type="button" className="btn btn-primary">Contact</button>
            <SignOutButton />
            <SignInButton />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
