import React from 'react'
import Title from '../components/Title'
import NewsLetterBox from '../components/NewsLetterBox'
import { assets } from '../assets/frontend_assets/assets'

const Contact = () => {
  return (
    <div>
      <div className='text-center text-2xl border-t pt-10'>
        <Title text1={'CONTACT'} text2={'US'}/>
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        <img src={assets.contact_img} className='w-full md:max-w-[480px]' alt="" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-xl text-gray-600'>Our Store</p>
          <p className='text-gray-500'>Random gali 420 <br /> Hardoi, UP, India</p>
          <p className='text-gray-500'>Tel: 123456789 <br /> Email: pagalkutta@random.com</p>
          <p className='font-semibold text-xl text-gray-600'>Careers ar Forever</p>
          <p className='text-gray-500'>Learn more about our teams and job openings.</p>
          <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Explore Jobs </button>
        </div>
      </div>

      <NewsLetterBox />
    </div>
  )
}

export default Contact