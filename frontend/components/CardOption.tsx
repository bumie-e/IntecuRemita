import React from 'react'

const CardOption = () => {
  return (
    <div className=' flex flex-col gap-10 '>
      <div className=' flex flex-col gap-2'>
        <p className=' text-xl'>CARD NUMBER</p>
        <input type="text" name="card_number" className=' w-full p-5 rounded-[10px]  placeholder:text-[#C7C7C7] border border-[#CCCCCC] ' placeholder='1234  5678  9012  3456' />
      </div>

      <div className=' flex gap-2'>
        <div className=' flex flex-col gap-2 w-1/2 '>
          <p className=' text-xl'>EXPIRY DATE</p>
          <input type="text" name="expiry_date" className=' w-full p-5 rounded-[10px]  placeholder:text-[#C7C7C7] border border-[#CCCCCC] ' placeholder='MM  /  YY' />
        </div>

        <div className=' flex flex-col gap-2 w-1/2 '>
          <p className=' text-xl'>CVV</p>
          <input type="text" name="cvv" className=' w-full p-5 rounded-[10px]  placeholder:text-[#C7C7C7] border border-[#CCCCCC] ' placeholder='123' />
        </div>
      </div>

      <button className=' bg-[#2B9D80BF] py-5 text-2xl text-white '>Pay NGN 1,000.00</button>
    </div>
  )
}

export default CardOption