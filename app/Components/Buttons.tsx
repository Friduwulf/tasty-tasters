'use client'

import { useSession, signIn, signOut } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';

export function SignInButton() {
    const { data: session, status } = useSession();
    console.log(session, status);

    if (status === 'loading') {
        return <div>Loading...</div>;
    }

    if (status === 'authenticated'){
        return (
            <Link href={`/dashboard`}>
                <div className="avatar">
                    <div className="w-12 rounded-full">
                        <Image
                            src={session.user?.image ?? "/depositphotos_133351928-stock-illustration-default-placeholder-man-and-woman.jpg"}
                            width={32}
                            height={32}
                            alt="User Image"
                        />
                    </div>
                </div>
            </Link>
        );
    }

    return <button className='btn btn-primary' onClick={() => signIn()}>Sign In</button>;
}

export function SignOutButton() {
    const { data: session } = useSession();
    return (
        <div>
            {session && (
                <button className='btn btn-primary' onClick={() => signOut()}>Sign Out</button>
            )}
        </div>
    );
}