import React, { useContext, useState } from 'react'
import Title from '../components/Title'
import CartTotal from '../components/CartTotal'
import { assets } from '../assets/frontend_assets/assets'
import { ShopContext } from '../context/ShopContext'

const PlaceOrder = () => {

  const [method, setMethod] = useState('razorpay')

  const {navigate} = useContext(ShopContext);

  return (
    <div className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh]'>
      {/* Left side */}
      <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>
        <div className='text-sl sm:text-2xl my-3'>
          <Title text1={'DELIVERY'} text2={'INFORMATION'} />
        </div>

        <div className='flex gap-3'>
          <input type="text" placeholder='First Name' className='border border-gray-300 rounded py-1.5 w-full px-3.5'/>
          <input type="text" placeholder='Last Name' className='border border-gray-300 rounded py-1.5 w-full px-3.5'/>
        </div>
        <input type="email" placeholder='Email address' className='border border-gray-300 rounded py-1.5 w-full px-3.5'/>
        <input type="text" placeholder='Street' className='border border-gray-300 rounded py-1.5 w-full px-3.5'/>
        <div className='flex gap-3'>
          <input type="text" placeholder='City' className='border border-gray-300 rounded py-1.5 w-full px-3.5'/>
          <input type="text" placeholder='State' className='border border-gray-300 rounded py-1.5 w-full px-3.5'/>
        </div>
        <div className='flex gap-3'>
          <input type="number" placeholder='Zipcode' className='border border-gray-300 rounded py-1.5 w-full px-3.5'/>
          <input type="text" placeholder='Country' className='border border-gray-300 rounded py-1.5 w-full px-3.5'/>
        </div>
        <input type="number" placeholder='Phone' className='border border-gray-300 rounded py-1.5 w-full px-3.5'/>
      </div>

      {/* Right side */}
      <div className='mt-8'>
        <div className='mt-8 min-w-80'>
          <CartTotal />
        </div>

        <div className='mt-12'>
          <Title text1={'PAYMENT'} text2={'METHOD'} />
          <div className='flex gap-3 flex-col lg:flex-row'>
            <div onClick={()=>setMethod('stripe')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'stripe' ? 'bg-green-400' : '' } `}></p>
              <img className='h-5 mx-4' src={assets.stripe_logo} alt="" />
            </div>
            <div onClick={()=>setMethod('razorpay')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'razorpay' ? 'bg-green-400' : '' } `}></p>
              <img className='h-5 mx-4' src={assets.razorpay_logo} alt="" />
            </div>
            {/* cash on delivery */}
          </div>

          <div className='w-full text-end mt-8'>
            <button onClick={()=>navigate('/orders')} className='bg-black text-white px-8 py-3 text-smy-'>PLACE ORDER</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PlaceOrder