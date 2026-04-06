import React from 'react'
import { testimonialsData } from '../assets/assets'

const Testimonials = () => {
  return (
    <div className="bg-[#f6faff] py-12"> {/* Reduced padding from py-20 to py-12 */}
      <h1 className="text-center text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-700 mb-8">Customer Testimonials</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto px-4">
        {testimonialsData.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg p-8 flex flex-col justify-between min-h-[240px] transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <div className="text-3xl text-violet-800 mb-4">&ldquo;</div>
            <p className="text-gray-600 text-base mb-8">{item.text}</p>
            <div className="flex items-center gap-4 mt-auto">
              <img src={item.image} alt="" className="w-12 h-12 rounded-full object-cover border-2 border-gray-200" />
              <div>
                <p className="font-semibold text-gray-800">{item.author}</p>
                <p className="text-sm text-violet-800 font-medium">{item.jobTitle}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Testimonials