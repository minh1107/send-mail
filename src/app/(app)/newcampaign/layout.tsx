import CampaignNavbar from '@/component/CampainNavbar/CampaignNavbar'
import React from 'react'

type Props = {}

const layout = ({children}: {children: React.ReactNode}) => {
  return (
    <div className='flex flex-col h-full'>
        <CampaignNavbar />
        <div className='bg-main flex-1'>
            {children}
        </div>
    </div>
  )
}

export default layout