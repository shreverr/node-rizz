import { FC } from 'react'
import { ThemeToggle } from '../ThemeToggle'
import { buttonVariants } from "@/components/ui/button"
import Link from 'next/link'

interface NavBarProps {

}

const NavBar: FC<NavBarProps> = ({ }) => {
  return (
    <nav className='border-b fixed top-0 w-full flex items-center justify-center p-2 backdrop-blur-md'>
      <div className='container min-h-10 flex items-center justify-between'>
        <div className='text-3xl font-bold '>
          Node-Rizz
        </div>
        <div className='flex items-center justify-center gap-4'>
          <ThemeToggle />
          <Link className={buttonVariants({ variant: "default" })} href={`/login`}>
            Login
          </Link>
        </div>
      </div>  
    </nav>
  )
}

export default NavBar