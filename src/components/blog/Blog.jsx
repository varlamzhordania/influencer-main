import React from 'react'
import Wrapper from '../shared/Wrapper'
import Image from 'next/image'
import { BsArrowRight } from 'react-icons/bs'
import Link from 'next/link'
import { blogsData } from '@/data/blogsData'
import blogsData2 from '@/data/blogsData2'
const Blog = () => {
    return (
        <div>
            <Wrapper>
                <div className='border-[3px] border-[#ff5b8454] rounded-[22px] w-full h-[266px] flex justify-center items-center' style={{ background: "linear-gradient(271deg, rgba(66, 84, 255, 0.26) 11.34%, rgba(9, 183, 255, 0.26) 46.82%, rgba(255, 91, 132, 0.26) 73.09%, rgba(66, 84, 255, 0.26) 107.54%)" }}>
                    <h1 className='text-[40px] font-[700]'>
                        Blogs
                    </h1>
                </div>
                <div className='flex justify-center items-center mt-20'>
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 2xl:grid-cols-3 gap-8'>
                        {
                            blogsData2.map((item, i) => (
                                <div key={i} className='shadow-md rounded-[10px] bg-white'>
                                    <img src={item.image} width={1080} height={1080} className='rounded-t-[10px] max-w-[320px] md:max-w-[320px] h-[200px] object-cover' />
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

            </Wrapper>
        </div>
    )
}

export default Blog