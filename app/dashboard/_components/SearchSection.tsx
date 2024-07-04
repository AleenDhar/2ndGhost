"use client"
import { Search } from 'lucide-react'
import React from 'react'

const SearchSectiom = ({onSearchInput}:any) => {
  return (
    <div className='p-10 bg-gradient-to-br from-purple-500 via-purple-700 to-blue-600 flex flex-col justify-center items-center text-white'>
      
      <h2 className='text-3xl font-bold'>Browse through all the tools</h2>
      <p>What will you like to create today</p>
      <div>
        <div className='flex gap-2 items-center p-2 border rounded-md bg-white '>
          <Search color="black" className='text-primanry'/>
          <input type='text'  placeholder='Search' onChange={(e)=>onSearchInput(e.target.value)}className='bg-transparent text-black  focus:outline-none'/>
        </div>
      </div>
    </div>
  )
}

export default SearchSectiom