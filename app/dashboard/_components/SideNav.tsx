"use client"
import { FileClock, Home, Settings, WalletCards } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect } from 'react'

const SideNav = () => {

    const path = usePathname()
    useEffect(()=>{
        console.log(path)
    })

    const MenuList=[
        {
            name:"Home",
            icon:Home,
            path:"/dashboard"
        },
        {
            name:"History",
            icon:FileClock,
            path:"/dashboard/history"
        },
        {
            name:"Billing",
            icon:WalletCards,
            path:"/dashboard/billing"
        },
        {
            name:"Settings",
            icon:Settings,
            path:"/dashboard/settings"
        },
    ]
  return (
    <div className='h-screen p-5 shadow-sm border'>
        <Link href="/dashboard" className='flex'>
         
    <div className='flex'>
        <Image src={"/logo.png"} alt='logo' height={50} width={50}/>
        <span className='font-bold text-2xl mt-2'>GhostsAI</span>
    </div>
    </Link>
    <div className='mt-10 font-semibold'>
        {MenuList.map((menu,index)=>(
            <div className={`flex gap-2 mb-2 p-3 hover:bg-primary hover:text-white rounded-lg cursor-pointer text-lg
                ${path==menu.path&&`bg-primary text-white`}
            `}>
                <menu.icon/>
                <h2>{menu.name}</h2>
            </div>
        ))}
    </div>

    </div>
  )
}

export default SideNav