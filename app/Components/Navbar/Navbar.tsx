import { SignInButton } from '../Buttons';
import { HomeButton } from '../Buttons';

export default function Navbar() {

  return (
    <nav>
      <div className="bg-base-100 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <HomeButton />
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