import React from 'react'

function Spinner () {
  return (
    <div className="flex justify-center items-center h-full w-full ">
      <div className="border-t-transparent border-solid animate-spin  rounded-full border-blue-400 border-8 h-8 w-8"></div>
    </div>
  )
}

export default Spinner
