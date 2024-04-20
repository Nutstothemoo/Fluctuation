'use client'

import Image from 'next/image'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'

import { images } from '@/images'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export default function CarousselSlide() {
  return (
    <section className='py-12 px-4 sm:px-6 lg:px-8 w-5/6 max-w-4xl mx-auto'>
      <div className='mx-auto'>
        <Swiper
          navigation={true}
          spaceBetween={10}
          loop={true}
          modules={[Navigation, Pagination]}
          onSwiper={swiper => console.log(swiper)}
          className='h-96 w-full rounded-lg'
        >
          {images.map((image, index) => (
            <SwiperSlide
              className='rounded-lg h-full w-full max-w-4xl mx-auto' 
              key={index}>
              <div className='flex h-full w-full items-center justify-center'>
                <Image
                  src={image.src}
                  alt={image.alt}
                  className='h-full w-full object-cover'
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}