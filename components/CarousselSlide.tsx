'use client'

import Image from 'next/image'

import { Swiper, SwiperSlide } from 'swiper/react'
import { A11y, Scrollbar, Navigation, Pagination } from 'swiper/modules'

import { images } from '@/components/images'
import 'swiper/css/bundle'

export default function CarousselSlide() {
  return (
<section className='z-0 py-8 px-4 sm:px-6 lg:px-8 w-full max-w-4xl mx-auto overflow-hidden'>
  <div className='mx-auto w-full'>
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={10}
      slidesPerView={1}
      scrollbar={{ draggable: true }}
      loop={true}
      onSwiper={swiper => console.log(swiper)}
      className=' w-80 h-60 md:h-full md:w-full rounded-xl overflow-hidden'
    >
      {images.map((image, index) => (
        <SwiperSlide
          className='z-10 rounded-lg h-full w-full mx-auto overflow-hidden' 
          key={index}>
          <div className='flex h-full w-full items-center justify-center'>
            <Image
              src={image.src}
              alt={image.alt}
              className='z-10 h-full w-full object-cover rounded-lg'
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
</section>
  )
}