import React from 'react'

const SubMenu = ({items}) => {
  return (
    <div className='w-[1080px] min-h-[200px] shadow-md absolute top-full left-1/2 right-1/2 -translate-x-1/2 p-3 !z-[9999] border-b-2 border-primary bg-white'>{items}</div>
  )
}

export default SubMenu