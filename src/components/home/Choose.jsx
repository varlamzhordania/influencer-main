import React from 'react'
import Wrapper from '../shared/Wrapper'
import Image from 'next/image'
import {Raleway} from 'next/font/google'
import {RevealWrapper} from 'next-reveal'
import chooseIcon1 from "./../../../public/images/choose-icon1.png"
import chooseIcon2 from "./../../../public/images/choose-icon2.png"
import chooseIcon3 from "./../../../public/images/choose-icon3.png"
import chooseIcon4 from "./../../../public/images/choose-icon4.png"
import chooseUs from "./../../../public/images/choose-us.png"

const font = Raleway({subsets: ['latin']})
const Choose = () => {
    const data = [
        {
            id: 1,
            img: chooseIcon1,
            title: 'Extensive Influencer Network:',
            text: 'Access 300,000+ Canadian influencers for local collaborations and increased brand visibility.'
        },
        {
            id: 2,
            img: chooseIcon1,
            title: 'Budget-Friendly:',
            text: 'Affordable and effective influencer marketing solutions for businesses of all sizes.'
        },
        {
            id: 3,
            img: chooseIcon3,
            title: 'Inclusive Campaigns:',
            text: 'Reach diverse Canadian audiences effectively with impactful campaigns.'
        },
    ]
    const data1 = [
        {
            id: 4,
            img: chooseIcon1,
            title: 'Canadian Market Expertise:',
            text: 'Tailored solutions for international brands and local businesses to succeed in the Canadian market.'
        },
        {
            id: 5,
            img: chooseIcon2,
            title: 'Local Support:',
            text: 'Dedicated local team without agency fees, ensuring successful influencer campaigns.'
        },
        {
            id: 6,
            img: chooseIcon2,
            title: 'Influencer-Generated Content:',
            text: 'Cost-effective content creation by nano and micro-influencers, optimizing your marketing budget.'
        },
    ]
    return (
        <div className='mt-10'>
            <Wrapper>
                <div className='flex md:flex-row flex-col justify-start items-start gap-16'>
                    <div className='md:w-1/2'>
                        <RevealWrapper rotate={{x: 0, y: 40, z: 0}} origin='bottom' delay={200} duration={3000}
                                       distance='500px' reset={false}
                                       viewOffset={{top: 0, right: 0, bottom: 10, left: 0}}>

                            <Image src={chooseUs} width={1080} height={1080} alt=""
                                   className='w-[501px] '/>
                        </RevealWrapper>
                    </div>
                    <div className='md:w-1/2'>
                        <RevealWrapper rotate={{x: 0, y: 40, z: 0}} origin='bottom' delay={200} duration={3000}
                                       distance='500px' reset={false}
                                       viewOffset={{top: 0, right: 0, bottom: 10, left: 0}}>
                            <div className='flex flex-col justify-start items-start'>
                                <p className={`${font.className} text-[32px] md:text-[34px] font-[700]`}>
                                    Why Choose Us:
                                </p>
                                {/* <h1 className={`${font.className} text-[32px] md:text-[34px] font-[700]`}>
                                    Your Path to <span className='bg-clip-text text-transparent bg-gradient-to-r from-[#4255ff] to-[#AF1FFC]' > Unmatched Success</span>
                                </h1>
                                <p className={`${font.className} text-[24px] font-[700]`}>
                                    Experience unprecedented benefits:
                                </p> */}
                                <div className='flex md:flex-row flex-col gap-4 items-start mt-5'>
                                    <div className='flex gap-3 flex-col'>
                                        {
                                            data.map((item) => (
                                                <div key={item.id} className='flex items-start justify-start gap-3'>
                                                    <div
                                                        className='bg-white w-[50px] h-[50px] flex items-center justify-center rounded-md border-r border-b border-[#AF1FFC]'>
                                                        <Image src={item.img} alt='' width={500} height={500}
                                                               className='w-[26px] h-[26px]'/>
                                                    </div>
                                                    <div className='flex flex-col justify-start items-start'>
                                                        <p className={`${font.className} text-[16px] font-[600]`}>
                                                            {item.title}
                                                        </p>
                                                        <p className='text-[14px] w-[230px]'>
                                                            {item.text}
                                                        </p>
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </div>
                                    <div className='flex gap-4 flex-col'>
                                        {
                                            data1.map((item) => (
                                                <div key={item.id} className='flex items-start justify-start gap-3'>
                                                    <div
                                                        className='bg-white w-[50px] h-[50px] flex items-center justify-center rounded-md border-r border-b border-[#AF1FFC]'>
                                                        <Image src={item.img} alt='' width={500} height={500}
                                                               className='w-[26px] h-[26px]'/>
                                                    </div>
                                                    <div className='flex flex-col justify-start items-start'>
                                                        <p className={`${font.className} text-[16px] font-[600]`}>
                                                            {item.title}
                                                        </p>
                                                        <p className='text-[14px] w-[230px]'>
                                                            {item.text}
                                                        </p>
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </div>

                                </div>


                            </div>
                        </RevealWrapper>

                    </div>

                </div>
            </Wrapper>
        </div>
    )
}

export default Choose