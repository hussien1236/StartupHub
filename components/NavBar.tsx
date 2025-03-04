import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {auth, signIn, signOut} from "@/auth"
import { BadgePlus, LogOut } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar'

const NavBar = async () => {
  const session = await auth();
  return (
    <header className='px-5 py-3 bg-white shadow-sm font-work-sans'>
        <nav className='flex justify-between items-center'>
            <Link href='/'>
               <Image src="/logo.png" alt='logo' width={144} height={30}/>
            </Link>
            <div className='flex items-center gap-5 text-black'>
              {session && session?.user ? (
                <>
                <Link href='/startup/create'>
                  <span className='max-sm:hidden'>Create</span>
                  <BadgePlus className='sm:hidden'/>
                </Link>
                <form action={async ()=>{
                  'use server';
                  await signOut({redirectTo:'/'});
                }}>
                <button type='submit'>
                  <span className='max-sm:hidden'>Logout</span>
                  <LogOut className="sm:hidden"/>
                </button>
                </form>
                <Link href={`/user/${session?.id}`}>
                  <Avatar>
                    <AvatarImage className='size-10 rounded-full' src={session?.user.image || ''} alt={session?.user.name || ''} />
                    <AvatarFallback>AV</AvatarFallback>
                  </Avatar>
                </Link>
                </>)
                :
                (
                  <form action={async () =>{
                    'use server';
                    await signIn('github');
                    }}>
                  <button type='submit'><span>Login</span></button>
                  </form>
                )
                }
            </div>
        </nav>
    </header>
  )
}

export default NavBar