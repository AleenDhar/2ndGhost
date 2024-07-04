
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ModeToggle } from '@/components/darkmode-toggle'

import { buttonVariants } from '@/components/ui/button'
import {
    SignInButton,
    SignedIn,
    SignedOut,
    UserButton
  } from '@clerk/nextjs'
  import { ArrowRight } from 'lucide-react'


const Navbar = () => {
  return (
    
    <nav className='sticky h-14 inset-x-0 top-0 z-30 w-full  backdrop-blur-lg border-b  transition-all' >

   <div className="flex h-14 items-center p-7 justify-between border-b border-gray-700">
        <div>
            <Link href="/" className='flex'>
            <Image 
            src='/logo.png'
            alt='product preview'
            width={30}
            height={30}
            quality={100}
            className=''
            />
            <h1 className='font-bold mt-1'>GhostAI</h1>
            </Link>
        </div>
        <div  className=' items-center space-x-4 sm:flex'>
            <ModeToggle/>
            <Link
                  href='/pricing'
                  className={buttonVariants({
                    variant: 'ghost',
                    size: 'sm',
                  })}>
                  Billing
            </Link>
            <SignedOut>
                <SignInButton />
            </SignedOut>
            <SignedIn>
                <UserButton />
             </SignedIn>
        </div>

    </div>
    </nav>
    
  )
}

export default Navbar