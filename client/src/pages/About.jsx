import React from 'react'
import Title from '../components/Title'
import NewsLetterBox from '../components/NewsLetterBox'
import { assets } from '../assets/frontend_assets/assets'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={"ABOUT"} text2={"US"}/>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img src={assets.about_img} className='w-full max-w-[450px]' />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, veniam hic ullam quidem labore fuga. Quia praesentium enim dignissimos odit.</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus, perferendis.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint porro reiciendis perferendis soluta qui consequuntur.</p>
        </div>
      </div>

      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={"CHOOSE US"} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Quality Assurance:</b>
            <p className='text-gray-600'>We meticulously select and vet each product to ensure it meets our stringent quality standards</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Convienience:</b>
            <p className='text-gray-600'>With our user friendly interface and hassle-free ordering process, shipping has been made easy</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Expectional Customer Service:</b>
            <p className='text-gray-600'>Our Professionals are here to assist you the way, ensuring your satisfaction is out top priority.</p>
          </div>
        </div>

        <NewsLetterBox />
    </div>
  )
}

export default About