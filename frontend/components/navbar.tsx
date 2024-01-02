import React from 'react'
import Image from 'next/image'
import logo from '@/public/remita_logo_white.png'
import Link from 'next/link'
import Button from './button'

const NavBar = () => {
  return (
    <div className=' py-5 w-full flex justify-center bg-[#f66839] '>
      <div className=' max-w-5xl w-full px-4 md:px-0 flex justify-between items-center '>
        <Image src={logo} alt='Logo' className=' h-10 w-32 md:h-10 md:w-32 ' />

        <div className=' hidden md:flex gap-12 items-center  text-white uppercase text-sm  '>
          <Link href='#'>About</Link>
          <Link href='#'>remita mobile</Link>
          <Link href='#'>developers</Link>
          <Button text={"Sign In"} className={"bg-white text-[#f66839] border border-[#f66839]  "} />
          <Button text={"Sign Up"} className={"text-white bg-[#f66839] border border-white "} />
        </div>
      </div>
    </div>
  )
}

export default NavBar