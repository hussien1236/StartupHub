import React from 'react'

const Ping = () => {
  return (
    <div className='relative'>
      <div className='absolute -left-4 top-1'>
        <span className='absolute inline-flex size-[11px] top-2 animate-ping rounded-full bg-primary opacity-75'></span>
        <span className='relative inline-flex size-[11px] rounded-full bg-primary'></span>
      </div>
    </div>
  )
}

export default Ping