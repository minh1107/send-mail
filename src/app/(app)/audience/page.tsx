'use client'
import ButtonCustom from '@/component/Button/ButtonCustom'
import React from 'react'

type Props = {}

const page = (props: Props) => {
  const handleCreateNewAudience = () => {
    
  }
  return (
    <div className='p-6 w-full'>
      <div className='flex justify-between items-center w-full'>
        <div className='flex flex-col'>
          <h2 className='text-2xl font-semibold'>Personal Audience</h2>
          <p>Create and manage audience for your campaigns</p>
        </div>
        <ButtonCustom text='Create new audience' handleClick={handleCreateNewAudience}/>
      </div>
      <div>
        
      </div>
    </div>
  )
}

export default page