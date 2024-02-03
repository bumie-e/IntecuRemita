import React, { useState } from 'react'
import Modal from 'antd/es/modal/Modal'
import Image from 'next/image'
import { banktransfer, selected } from '.'
import { paymentOptionData } from './data'

const PaymentOptions = () => {

  const [selecetedOption, setSeletectedOption] = useState('')

  const handleOption = (option: string) => {

    console.log(option)
    setSeletectedOption(option)

  }


  return (
    <article className=' grid grid-cols-3 gap-4 mt-6 '>
      <div className=' col-span-1 bg-[#EDEFF1]  text-center py-10 pl-2  '>

        <p className=' mb-8'>SELECT A PAYMENT OPTION</p>
        <div className=' flex flex-col gap-3'>

          {paymentOptionData.map((item) => (

            <div key={item.title} className=' bg-white rounded-full flex items-center justify-between px-4 py-2 cursor-pointer ' onClick={() => handleOption(item.title)} >
              <div className=' flex items-center gap-2 ' >
                <Image src={selecetedOption === item.title ? item.icon2 : item.icon} alt='Icon name' className=' h-6 w-6' height={20} width={20}/>
                <p className={` ${selecetedOption == item.title ? 'text-[#C74923]' : ""} `}>{item.title}</p>
              </div>
              {selecetedOption === item.title &&
                <Image src={selected} alt='Icon name' />
              }
            </div>
          ))}



        </div>
      </div>
      <div className=' col-span-2'>

        {
          selecetedOption === 'Card' && <div>Card</div>
        }


        {
          selecetedOption === 'Bank Transfer' && <div>Bank Transfer</div>
        }


      </div>
    </article>
  )
}

export default PaymentOptions