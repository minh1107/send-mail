import { TextField } from '@mui/material'
import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <div className='mx-[10%] bg-white mt-[10%] py-5 shadow-md rounded-md'>
        <div className='font-bold text-xl py-4 px-10'>Campaign settings</div>
        <hr />
        <div className='flex items-center gap-4 px-10 py-6'>
            <p className='mr-[8%]'>Sender email</p>
            <div className='flex items-center gap-4'>
                <TextField className='w-[400px]' size='small'/><span>@gmail.com</span>
            </div>
        </div>
        <hr />
        <div className='flex items-center gap-4 px-10 py-6'>
            <p className='mr-[8%]'>Sender email</p>
            <div className='flex items-center gap-4'>
                <TextField className='w-[400px]' size='small'/>
            </div>
        </div>
    </div>
  )
}

export default page