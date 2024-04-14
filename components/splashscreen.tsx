import React from 'react'
import Background from './Background'

const SplashScreen = ({ fluidFont }) => {
  return (
    <div className={`relative top-0 flex h-screen w-full items-center justify-center ${fluidFont.className}`}>
{/* <Background />    */}
<p className='text-6xl md:text-9xl' style={{ color: '#11458D' }}> Fluctuation
</p> 
</div>
  )
}

export default SplashScreen