'use client'
import React, { useEffect, useRef, useState } from 'react'
import CreateIcon from '@mui/icons-material/Create';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { TramSharp } from '@mui/icons-material';
import DeleteIcon from '@mui/icons-material/Delete';
import ButtonCustom from '../Button/ButtonCustom';
type Props = {}

const CampaignNavbar = (props: Props) => {
  const titleInputRef = useRef<HTMLInputElement>(null)
  const currentRoute = usePathname();
  const [toggleEditCampaignTitle, setToggleEditCampaignTitle] = useState(true)
  const [campaignTitle, setCampaignTitle] = useState('Untitled campaign')

  const handleEditTittleCampaign = () => {
    setToggleEditCampaignTitle(pre => !pre);
  }
  const handleStartCampaign = () => {
    
  }
  useEffect(() => {
    if(toggleEditCampaignTitle == false) {
      titleInputRef.current?.focus();
    }
  }, [toggleEditCampaignTitle])
  console.log(currentRoute)
  return (
    <div className='px-4 pt-4 shadow-md flex items-center justify-between border-b-[1px]'>
      <div className=''> 
        <div className='flex items-center gap-4'>
          <input ref={titleInputRef} className='w-fit p-4 font-semibold text-xl ' type="text" onChange={e => setCampaignTitle(e.target.value)} 
          value={campaignTitle} disabled={toggleEditCampaignTitle}/>
          <div className='cursor-pointer' onClick={handleEditTittleCampaign}><CreateIcon  color='info' /></div>
        </div>
        <div className='flex font-semibold text-gray-500'>
          {
            navigateCampaignList.map(item => (
                <Link className={`border-b-[2px] ${currentRoute == item.link ? 'border-button' : 'border-none'} px-4 py-4`} href={item.link} key={item.id} >
                  {item.name}
                </Link>
            ))
          }
        </div>
        <hr />
      </div>
      <div className='flex gap-4 items-center'>
        <DeleteIcon fontSize='large' color='info' className='cursor-pointer'/>
        <ButtonCustom text='Start Campaign' handleClick={handleStartCampaign} disable={true}/>
      </div>
    </div>
  )
}

export default CampaignNavbar

const navigateCampaignList = [
  {
    id: 1,
    name: 'Setting',
    link: '/newcampaign'
  },
  {
    id: 2,
    name: 'Audience',
    link: '/newcampaign/audience'
  },
  {
    id: 3,
    name: 'Assets',
    link: '/newcampaign/assets'
  },
  {
    id: 4,
    name: 'Workflow',
    link: '/newcampaign/workflow'
  },
]