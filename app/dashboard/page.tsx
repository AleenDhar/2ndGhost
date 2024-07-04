"use client"
import React, { useState } from 'react'
import SearchSection from './_components/SearchSection'
import TemplateList from './_components/TemplateList'

const Dashboard = () => {
  const [userSearchInput, setuserSearchInput] = useState<string>()
  return (
    <div>
      {/* search sectioons */}
      <SearchSection onSearchInput={(value:string)=>console.log(value)}/>
      {/* template list section */}
      <TemplateList/>
    </div>
  )
}

export default Dashboard