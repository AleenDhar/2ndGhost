import Template from '@/app/(data)/Template'
import Image from 'next/image'
import React from 'react'
import TemplateCard from './TemplateCard'


export interface TEMPLATE{
    name:string,
    desc:string,
    category:string,
    icon:string,
    aiPrompt:string,
    slug:string,
    form?:FORM[]

}
export interface FORM{
    label:string,
    field:string,
    name:string,
    required?:boolean,
    
}

function TemplateList() {
    
  return (
    
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-10'>
        {Template.map((items:TEMPLATE, index:number)=>(
            <div>
                <TemplateCard {...items}/>
            </div>
        ))}
        </div>
  )
}

export default TemplateList