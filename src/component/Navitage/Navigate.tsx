'use client'
import { Email, Group, LegendToggle, PersonPinCircle, SwitchLeft, ToggleOn } from '@mui/icons-material'
import Link from 'next/link'
import React, { useState } from 'react'

type Props = {}

const navigateList = [
    {
        id: 1,
        name: "Campaigns",
        icon: <Email color='info'/>,
        link: '/'
    },
    {
        id: 2,
        name: "Audience",
        icon: <Group color='info'/>,
        link: '/audience'
    },
]

const Navigate = (props: Props) => {
    const [sidebarToggle, setSidebarToggle] = useState<boolean>(false)
    const handleCloseSidebar  = () => {
        if(sidebarToggle) {
            setSidebarToggle(false)    
        } else {
            setSidebarToggle(true)
        }
    }
  return (
    <div className={`h-full ${sidebarToggle ? "w-[300px]" : "w-[88px]"} shadow-2xl flex flex-col transition-all duration-300 border-r-[1px] border-gray-100`}>
        <div className={`flex flex-col px-2 py-4 flex-1 ${!sidebarToggle ? "items-center" : ""}`}>
            {
                navigateList.map(item => (
                    <Link key={item.id} href={item.link} className='flex gap-3 p-4 hover:bg-gray-100 cursor-pointer rounded-md hover:text-header font-medium'>
                        {item.icon}
                        {sidebarToggle && <p>{item.name}</p>}
                    </Link>
                ))
            }
        </div>
        <div onClick={handleCloseSidebar} className={`flex items-center gap-4 h-10 select-none mx-2 px-2 rounded-md py-2 mb-6 cursor-pointer hover:bg-gray-100 
        ${sidebarToggle ? "" : "justify-center"}`}>
            <SwitchLeft />
            <p className={`transition-all duration-300 ${sidebarToggle ? "whitespace-nowrap" : "hidden"}`}>{"Toggle Sidebar"}</p>
        </div>
    </div>
  )
}

export default Navigate