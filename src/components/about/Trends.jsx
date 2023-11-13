import React from 'react'
import Wrapper from '../shared/Wrapper'
import { Raleway } from "next/font/google";
import blogsData2 from '@/data/blogsData2';
import Link from 'next/link';
import Image from 'next/image';
import { BsArrowRight } from 'react-icons/bs';
const font2 = Raleway({ subsets: ["latin"] });

const Trends = () => {
    return (
        <div>
            <Wrapper>
                <div className='flex flex-col justify-center items-center mt-20'>
                    <h1 className={`${font2.className} text-[32px] md:text-[40px] font-[700] text-center max-w-[745px]`}>
                        Learn More About Industry Trends and Influencity News
                    </h1>
                    <div className='flex justify-center items-center my-10'>
                        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 2xl:grid-cols-3 gap-10'>
                            {
                               blogsData2.slice(0, 3).map((item, i) => (
                                    <div key={i} className='shadow-md rounded-[10px] bg-white'>
                                        <Image src={item.image} width={1080} height={1080} className='rounded-t-[10px] max-w-[320px] md:max-w-[320px] h-[200px] object-cover' />
                                        <div className='flex flex-col p-5 gap-3 max-w-[320px] md:max-w-[320px] '>
                                            <div className='flex justify-between items-center '>
                                                <p className='text-[16px] text-[#AF1FFC] font-[500]'>
                                                    {item.subTitle}
                                                </p>
                                                <p className='text-[#77777778] font-[500] text-[16px]'>
                                                    {item.date}
                                                </p>
                                            </div>
                                            <p className='text-[24px] font-[600]'>
                                                {item.title}
                                            </p>
                                            <Link href={`/blogs/${item.id}`}>
                                                <button className='font-[500] text-[#FF5B84] group flex items-center gap-2'>

                                                    Read more
                                                    <BsArrowRight size={16} className='group-hover:translate-x-1 ease-in duration-300 transition-all' />
                                                </button>

                                            </Link>
                                        </div>

                                    </div>

                                ))
                            }

                        </div>


                    </div>
                </div>
            </Wrapper>
        </div>
    )
}

export default Trends