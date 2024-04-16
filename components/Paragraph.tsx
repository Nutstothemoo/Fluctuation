'use client'
import React, { useEffect, useRef } from 'react'
import { motion, useScroll } from 'framer-motion'

interface ParagraphProps {
  text: string
}

const Paragraph: React.FC<ParagraphProps> = ({ text }) => {
  const element = useRef(null)
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ['start 0.9', 'start 0.25'],
  })

  return (
    <motion.p style={{ opacity: scrollYProgress }} ref={element}>
      {text}
    </motion.p>
  )
}

export default Paragraph
