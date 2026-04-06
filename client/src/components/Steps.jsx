import React from 'react'
import { assets } from '../assets/assets'

const Steps = () => {
  return (
    <div className='mt-20 px-4 lg:px-44'>
      <h1 className='text-center text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold bg-linear-to-r from-gray-900 to-gray-400 bg-clip-text text-transparent '>steps to remove background <br />from images</h1>
      <div className='flex items-center justify-center gap-10 mt-10 max-sm:flex-col '>
        <div className='flex items-start gap-4 bg-white border drop-shadow-md p-7 pb-10 rounded-lg hover:scale-105 transition-all duration-500'>
         <img src={assets.upload_icon} alt="" />
          <div>
            <p className='text-lg font-semibold text-gray-700'>Upload your image</p>
            <p className='text-sm text-gray-500 mt-1'>Select the image you want to edit from your device.</p>
          </div>
        </div>
        <div className='flex items-start gap-4 bg-white border drop-shadow-md p-7 pb-10 rounded-lg hover:scale-105 transition-all duration-500'>
         <img src={assets.remove_bg_icon} alt="" />
          <div>
            <p className='text-lg font-semibold text-gray-700'>Remove background</p>
            <p className='text-sm text-gray-500 mt-1'>Our AI will automatically remove the background.</p>
          </div>
        </div>
        <div className='flex items-start gap-4 bg-white border drop-shadow-md p-7 pb-10 rounded-lg hover:scale-105 transition-all duration-500'>
         <img src={assets.download_icon} alt="" />
          <div>
            <p className='text-lg font-semibold text-gray-700'>Download image</p>
            <p className='text-sm text-gray-500 mt-1'>Download your edited image in high quality.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Steps