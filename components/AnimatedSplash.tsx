import React from 'react'
import { AnimatedText } from './AnimatedText'

const AnimatedSplash = ({ subTitle }) => {

  return (
    <div className="absolute inset-0 flex items-start md:items-center mt-64 md:mt-0 justify-center w-full">
      <div className="flex flex-col text-6xl md:text-8xl lg:text-9xl gap-6 md:gap-10">
        <div
          className="z-10 tracking-widest"
          style={{ color: '#11458D' }}
        >
          <AnimatedText once={true} text={"fluctuations"} />
        </div>
        <div
          style={{ color: '#11458D' }}
          className="text-3xl md:text-4xl text-center md:text-end"
        >
          <AnimatedText once={true} text={subTitle} delay={900}  />         
        </div>
      </div>

    </div>
  )
}

export default AnimatedSplash