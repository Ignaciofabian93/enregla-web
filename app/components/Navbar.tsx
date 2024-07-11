import Image from 'next/image'
import Logo from "@/public/assets/logo-white.png"

export const Navbar = () => {
  return (
    <nav className='flex w-full item-center px-[20px] py-[16px]'>
        <div>
            <Image src={Logo} alt='Logo' width={180}/>
        </div>
    </nav>
  )
}
