import Navigate from '@/component/Navitage/Navigate'
import React from 'react'

type Props = {}

const layout = ({children} : {children: React.ReactNode}) => {
  return (
    <div className="flex flex-1 h-auto">
      <Navigate />
      {children}
  </div>
  )
}

export default layout