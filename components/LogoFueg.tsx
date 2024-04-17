'use client'
// Logo.tsx

import { useTheme } from 'next-themes'
import Image from 'next/image'
import logofluctuationLight from '../public/assets/LOGO-FUEGO-LIGHT.webp'
import logofluctuationDark from '../public/assets/LOGO-FUEGO-DARK.webp'

const LogoFueg = () => {
  const { theme } = useTheme()

  return (
    <Image
      src={theme === 'dark' ? logofluctuationDark : logofluctuationLight}
      alt="Logo Fluctuation"
      objectFit="contain"
      width={70}
      height={70}
    />
  )
}

export default LogoFueg
