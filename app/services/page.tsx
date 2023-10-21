"use client"

import NavTrailer from '@/components/custome/NavTrailer'
import { Image, } from 'lucide-react'
import { motion } from "framer-motion"
export default function page() {
    return (
        <>
            <NavTrailer />
            <div className='p-10 px-10 md:px-20'>
                <p className='text-center text-2xl'>Services</p>
                <div className='grid grid-cols-1 gap-4 mt-10 lg:grid-cols-3 gap-y-10'>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ type: "spring", }}
                        className=' w-full h-40 p-4 rounded-md'
                        id='copywriting'
                    >
                        <p className='text-2xl font-bold text-center md:text-center'>CopyWriting</p>
                        <p className=' pt-3 text-center md:text-center'>Descriptions</p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ type: "spring", }}
                        animate={{ opacity: 1 }}
                        className=' bg-secondary w-full h-40 col-span-1 md:col-span-2 flex justify-center items-center' >
                        <Image size={60} color='purple' />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ type: "spring", delay: 0.2 }}
                        className=' w-full h-40 p-4 rounded-md'>
                        <p className='text-2xl font-bold text-center md:text-center'>Web Design</p>
                        <p className=' pt-3 text-center md:text-center'>Descriptions</p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ type: "spring", delay: 0.2 }}
                        className=' bg-secondary w-full h-40 col-span-1 md:col-span-2 flex justify-center items-center'
                        id="web"
                    >

                        <Image size={60} color='purple' />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ type: "spring", delay: 0.4 }}
                        className=' w-full h-40 p-4 rounded-md'>
                        <p className='text-2xl font-bold text-center md:text-center'>Youtube</p>
                        <p className=' pt-3 text-center md:text-center'>Descriptions</p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ type: "spring", delay: 0.4 }}
                        className=' bg-secondary w-full h-40 col-span-1 md:col-span-2 flex justify-center items-center'
                        id="youtube"
                    >
                        <Image size={60} color='purple' />
                    </motion.div>


                </div>
            </div>
        </>
    )
}

