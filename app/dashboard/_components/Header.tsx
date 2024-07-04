
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ModeToggle } from '@/components/darkmode-toggle'

import { buttonVariants } from '@/components/ui/button'
import {
    ClerkProvider,
    SignInButton,
    SignedIn,
    SignedOut,
    UserButton
  } from '@clerk/nextjs'
  import { ArrowRight } from 'lucide-react'


const Header = () => {
  return (
    
    <nav className='sticky h-14 inset-x-0 top-0 z-30 w-full  backdrop-blur-lg border-b  transition-all' >

   <div className="flex h-14 items-center justify-between border-b border-gray-700 p-7">
        <div>
          
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

export default Header