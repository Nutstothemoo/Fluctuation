import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import fluctuationGIF from '../public/assets/fluctuationsGIF.gif'

const AnimatedSplash = ({ subTitle }) => {
  return (
    <div className="absolute inset-0 flex items-start md:items-center justify-center w-full">
      <div className="relative mt-64 md:mt-0">
        <motion.div
          className="z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Image src={fluctuationGIF} alt="Centered Gif" layout="responsive" width={300} height={900} />
        </motion.div>
        <motion.p
          style={{ color: '#11458D' }}
          className="absolute left-1/4 right-1/4 bottom-0 md:left-auto md:right-60 text-3xl md:text-4xl text-center md:text-left hidden md:block"
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