'use client'

import React from 'react'
import AnimatedSplash from './AnimatedSplash'


const SplashScreen = ({ fluidFont }) => {
  return (
    <div
      className={`mx-auto relative top-0 flex w-full overflow-x-hidden h-screen items-center justify-center ${fluidFont.className}`}
    >
        {/* <AnimatedSplash subTitle="Follow the river of change" /> */}
    </div>
  )
}

export default SplashScreen
