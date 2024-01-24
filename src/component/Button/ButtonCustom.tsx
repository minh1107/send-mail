'use client'
import { Button } from '@mui/material'
import Link from 'next/link'
import React from 'react'

type Props = {
    text: string,
    handleClick: any 
    disable?: boolean
}

const ButtonCustom = ({text, handleClick, disable=false}: Props) => {
  return (
    <Button onClick={handleClick} className='bg-button h-[45px] px-[20px] text-white font-semibold' variant='contained' disabled={disable}>
        {text}
    </Button>
  )
}

export default ButtonCustom