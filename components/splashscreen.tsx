'use client'

import { Space_Grotesk } from 'next/font/google'
import React from 'react'
import Image from 'next/image'
import AnimatedSplash from './AnimatedSplash'

const space_grotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space-grotesk',
})
const SplashScreen = ({ fluidFont }) => {
  return (
    <div
      className={`relative top-0 flex h-screen w-full items-center justify-center ${fluidFont.className}`}
    >
      <div className="flex flex-col items-end">
        <AnimatedSplash subTitle="Follow the river of change" />
      </div>
    </div>
  )
}

export default SplashScreen
