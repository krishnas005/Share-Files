import React from 'react'

function UploadProgressBar({progress}) {
  return (
    <div className='bg-gray-400 w-full h-4 mt-3 rounded-full'>
      <div className='py-0.2 bg-blue-500 text-white h-4 text-[10px] rounded-full' style={{width: `${progress}%`}}>
      {`${Number(progress).toFixed(0)}%`}
      </div>
      
    </div>
  )
}

export default UploadProgressBar
