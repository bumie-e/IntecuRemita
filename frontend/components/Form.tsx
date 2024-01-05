import React from 'react'
import { IoIosArrowDown } from "react-icons/io";


const Form = () => {
  return (
    <form action="" className=' max-w-2xl flex flex-col gap-10 p-10 w-full  ' >
      <div className=' flex flex-col gap-3 w-full '>
        <label htmlFor="who" className=' text-sm '>Who do you want to pay <span className=' text-red-600 '>*</span> </label>
        <input type="text" readOnly value='OBAFEMI AWOLOWO UNIVERSITY' className=' p-2 border border-gray-500 outline-none w-full ' />
      </div>

      <div className=' flex flex-col gap-3 '>
        <label htmlFor="who" className=' text-sm '>Name of service/purpose <span className=' text-red-600 '>*</span> </label>
        <div className=' relative '>
          <input type="text" className=' p-2 border border-gray-500 outline-none w-full ' />
          <IoIosArrowDown className=' absolute right-3 bottom-3 text-gray-500 ' />
        </div>
        <div>
          <p className=' text-xs text-gray-500 '>Select from the list of available services</p>
        </div>
      </div>


      <div className=' grid grid-cols-2 gap-10 '>
        <div className=' flex flex-col gap-3 w-full '>
          <label htmlFor="who" className=' text-sm '>Amount to pay (₦) <span className=' text-red-600 '>*</span> </label>
          <input type="text" className=' p-2 border border-gray-500 outline-none w-full ' />
        </div>

        <div className=' flex flex-col gap-3 w-full '>
          <label htmlFor="who" className=' text-sm '>Select currency <span className=' text-red-600 '>*</span> </label>
          <input type="text" className=' p-2 border border-gray-500 outline-none w-full ' />
        </div>
      </div>


      <div className=' grid grid-cols-2 gap-10 '>
        <div className=' flex flex-col gap-3 w-full '>
          <label htmlFor="who" className=' text-sm '>Payer's Name<span className=' text-red-600 '>*</span> </label>
          <input type="text" className=' p-2 border border-gray-500 outline-none w-full ' />
        </div>

        <div className=' flex flex-col gap-3 w-full '>
          <label htmlFor="who" className=' text-sm '>Payer’s Phone<span className=' text-red-600 '>*</span> </label>
          <input type="text" className=' p-2 border border-gray-500 outline-none w-full ' />
        </div>
      </div>

      <div className=' flex flex-col gap-3 w-full '>
        <label htmlFor="who" className=' text-sm '>Payer’s Phone<span className=' text-red-600 '>*</span> </label>
        <input type="email" readOnly value='OBAFEMI AWOLOWO UNIVERSITY' className=' p-2 border border-gray-500 outline-none w-full ' />
      </div>



      <p>By clicking Submit you agree to our <span className=' text-[#F66838] ' > Terms and Conditions</span>  and <span className=' text-[#F66838] ' > Privacy Policy</span>  </p>
      <div className=' flex gap-10'>
        <button className=' px-8 py-5 text-white  text-xl bg-gray-500  ' >
          Submit
        </button>

        <button className=' px-8 py-5 bg-white text-xl border text-red-500 border-red-500 ' >
          Reset
        </button>
      </div>

    </form>
  )
}

export default Form