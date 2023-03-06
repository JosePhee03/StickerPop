import React from 'react'

export function ProgressBar () {
  return (
    <div className='w-full flex justify-center items-center'>
          <div className='shadow-md shadow-[#00000060] absolute h-10 w-[calc(452px/2)] rounded-lg bg-sky-400 bg-bar-gradient animate-progress-bar will-change-[background-position]'></div>
    </div>
  )
}
