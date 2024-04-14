import { Space_Grotesk } from 'next/font/google'
import React from 'react'

const space_grotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space-grotesk',
})
const SplashScreen = ({ fluidFont }) => {
  return (
    <div className={`relative top-0 flex h-screen w-full items-center justify-center ${fluidFont.className}`}>
      <div className='flex flex-col items-end'>
        <p className='text-6xl md:text-9xl' style={{ color: '#11458D' }}> Fluctuation
        </p>
        <p style={{ color: '#11458D'}} className='items-end text:2xl md:text-3xl '> Follow the river of change
        </p>
      </div>
    </div>
  )
}

export default SplashScreen