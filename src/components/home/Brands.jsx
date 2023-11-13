import React from 'react'
import Wrapper from '../shared/Wrapper'
import Image from 'next/image'
import Marquee from "react-fast-marquee";

const Brands = () => {
    const data = [
        {
            image: '/images/brand1.png'
        },
        {
            image: '/images/brand2.png'
        },
        {
            image: '/images/brand3.png'
        },
        {
            image: '/images/brand4.png'
        },
        {
            image: '/images/brand5.png'
        },
        {
            image: '/images/brand6.png'
        },
    ]
  return (
    <div className='mt-10'>
        <Wrapper>
            <div className='flex ' id="brands">
                {
                    data.map((item, i) => (
                        <div key={i} className='flex justify-center items-center'>
                            <img src={item.image} alt='' width={1080} height={1080} className='w-[80px] md:w-[140px] ml-10 md:ml-20 object-contain' />

                        </div>
                    ))
                }

            </div>
        </Wrapper>
    </div>
  )
}

export default Brands