import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import fluctuationGIF from '../public/assets/fluctuationsGIF.gif'

const AnimatedSplash = ({ subTitle }) => {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="relative">
        <motion.div
          className="z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Image src={fluctuationGIF} alt="Centered Gif" width={700} height={300} />
        </motion.div>
        <motion.p
          style={{ color: '#11458D' }}
          className="absolute bottom-10 right-40 mb-4 mr-4 text-2xl md:text-3xl"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.4, type: 'spring', stiffness: 100 }}
        >
          {subTitle}
        </motion.p>
      </div>
    </div>
  )
}

export default AnimatedSplash
