import React from 'react'
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import Link from 'next/link';
type Props = {}

const Header = (props: Props) => {
  return (
    <div className='bg-header shadow-md flex h-20 justify-between px-4 items-center text-white w-full '>
        <div className='flex gap-4 items-center'>
            <Link href={'/'}><KeyboardReturnIcon className='mt-1 cursor-pointer'/></Link>
            <span>Report</span>
        </div>
        <div>
            Updated at 23-01-2023
        </div>
    </div>
  )
}

export default Header