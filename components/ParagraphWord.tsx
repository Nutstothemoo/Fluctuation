"use client"

import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

interface WordProps {
  text: string;
}

const Word = ({ children, range, progress }) => {
  const opacity = useTransform(progress, range, [0, 1])
  return (
    <motion.span className='mr-2' style={{ opacity }}>
      {children}
    </motion.span>
  )
}

const ParagraphWord: React.FC<WordProps> = ({ text }) => {
  const element = useRef(null)
  const { scrollYProgress } = useScroll(
    {
      target: element,
      offset:['start 0.9', 'start 0.25']
    }
  )

  const words = text.split(' ');

  return (
    <p
    style={{ opacity: scrollYProgress.get() }}
    ref={element}>
    { 
      words.map((word, i) => {
        const start = i / words.length;
        const end = (i + 1) / words.length;
        return (
          <Word range={[start, end]} progress={scrollYProgress}>
            {word}
          </Word>
        )
      })
    }
    </p>
  )
}

export default ParagraphWord