import Image from 'next/image'
import payOnce from '@/public/payonce.svg'
import eInvoice from '@/public/e-invoice.svg'
import reOccurring from '@/public/recurring.svg'
import Form from '@/components/Form'

const paymentTypes = [
  {
    text: 'Pay Once',
    icon: payOnce
  },
  {
    text: 'Recurring Payments',
    icon: reOccurring
  },
  {
    text: 'Pay E-Invoice',
    icon: eInvoice
  }
]
export default function Home() {
  return (
    <main className=' flex justify-center w-full px-5' >
      <div className='max-w-7xl flex flex-col w-full pt-[76px]  '>
        <h2 className=' text-[#F66838] font-normal text-2xl leading-10 mb-8' >Pay a Biller</h2>
        <div className=' flex gap-6 uppercase border-b border-b-green-500 lg:w-3/4'>
          {paymentTypes.map((payment) => (
            <p key={payment.text} className='text-md flex items-center'>
              <span>
                <Image src={payment.icon} alt={payment.text} className='w-10 h-10 mr-2' />
              </span>
              {payment.text}
            </p>
          ))}
        </div>


        <Form />
      </div>
      <div>
      </div>
    </main>
  )
}