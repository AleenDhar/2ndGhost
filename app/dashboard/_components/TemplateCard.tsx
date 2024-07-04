import Image from 'next/image'
import React from 'react'
import { TEMPLATE } from './TemplateList'

const TemplateCard = (items:TEMPLATE) => {
  return (
    <div className='p-5 shadow-md rounded-md border dark:bg-purple-950 border-b-indigo-700 flex flex-col gap-3 cursor-pointer'>
        <Image src={items.icon} alt="icon" width={50} height={50}/>
        <h2 className='font-medium text-lg '>{items.name}</h2>
        <p className=' line-clamp-3'>{items.desc}</p>
    </div>
  )
}

export default TemplateCard