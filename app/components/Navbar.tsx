import Image from 'next/image'
import Logo from "@/public/assets/logo-white.png"
import { IconMenu } from './icons/IconMenu'

export const Navbar = () => {
  return (
    <nav className='flex w-full justify-between px-[20px] py-[16px]'>
        <div className='flex items-center'>
            <Image src={Logo} alt='Logo' width={150}/>
        </div>

<div className='text-[#9747FF]'>
        <IconMenu fill='#fff'/>

</div>
    </nav>
  )
}
