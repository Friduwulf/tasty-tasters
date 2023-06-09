'use client'

import { useSession, signIn, signOut } from 'next-auth/react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

//A button to sign in or out
export function SignInButton() {
    const { data: session, status } = useSession();
    console.log(session, status);

    if (status === 'loading') {
        return <div>Loading...</div>;
    }

    if (status === 'authenticated'){
        return (            
            <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                        <Image
                            src={session.user?.image ?? "/depositphotos_133351928-stock-illustration-default-placeholder-man-and-woman.jpg"}
                            width={32}
                            height={32}
                            alt="User Image"
                        />
                    </div>
                </label>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-neutral rounded-box w-52">
                <li>
                    <a className="justify-between">
                    Profile
                    </a>
                </li>
                <li><a>Contact</a></li>
                <li><a>Settings</a></li>
                <li><a onClick={() => signOut()}>Sign Out</a></li>
                </ul>
            </div>
        );
    }

    return <button className='btn btn-primary' onClick={() => signIn()}>Sign In</button>;
}

//A button to go back to the previous page
export function BackButton() {

    const router = useRouter();

    return (
        <div className='btn btn-ghost btn-circle justify-center mb-5 bg-neutral rounded-full' onClick={() => router.back()}>
            <img 
            src="/icons8-back-50.png" 
            alt="back arrow"
            width={40}
            height={40}
            />
        </div>
    );
}

//A nav button of the logo which takes the user to the landing page, or the tastings page if they are signed in
export function HomeButton() {

    const { data: session, status } = useSession();

    return (
        <div className="flex items-center">
            <div className="flex-shrink-0">
            { session ? (
                <Link
                className='text-2xl font-bold text-primary'
                href="/Tastings">
                    Tasty
                    <span className="text-accent">TASTERS</span>
                </Link>
            ) : (
                <Link
                className='text-2xl font-bold text-primary'
                href="/">
                Tasty
                <span className="text-accent">TASTERS</span>
            </Link>
            )}
            </div>
        </div>
    )
}