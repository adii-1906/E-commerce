import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetter from '../components/NewsLetter'

const Contact = () => {
    return (
        <div>
            
            <div className='text-center text-2xl pt-10 border-t'>
                <Title text1={'CONTACT'} text2={'US'}/>
            </div>

            <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
                <img src={assets.contact_img} alt="" className='w-full md:max-w-[450px]'/>
                <div className='flex flex-col justify-center items-start gap-6'>
                    <p className='text-xl font-semibold text-gray-600'>Our Store</p>
                    <p className='text-gray-500'>MB-57 Shaharanpur  <br /> Suite 350, Delhi, India</p>
                    <p className='text-gray-500'>Tel: (+91) 555-098-3456 <br /> Email: admin@forever.com</p>
                    <p className='font-semibold text-xl text-gray-600'>Careerrs at Forever</p>
                    <p className='text-gray-500'>Learn more about our teams and job openings.</p>
                    <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Explore Jobs</button>
                </div>
            </div>

            <NewsLetter />

        </div>
    )
}

export default Contact
