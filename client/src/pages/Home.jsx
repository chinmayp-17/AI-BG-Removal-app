import React from 'react'
import Header from '../components/Header'
import Steps from '../components/Steps'
import BgSlider from '../components/BgSlider'
import Testimonials from '../components/Testimonials'
import Upload from '../components/Upload'

const home = () => {
  return (
    <div>
      <div className="mb-16"><Header /></div>
      <div className="mb-16"><Steps /></div>
      <div className="mb-16"><BgSlider/></div>
      <div className="mb-16"><Testimonials/></div>
      <div className="mb-16"><Upload/></div>
    </div>
  )
}

export default home