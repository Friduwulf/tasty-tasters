'use client'

import { useSession, signIn, signOut } from 'next-auth/react';
import Image from 'next/image';

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
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
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
