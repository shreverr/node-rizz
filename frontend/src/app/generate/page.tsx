import { Button } from '@/components/ui/button'
import { Lexend_Exa } from 'next/font/google'
const lex = Lexend_Exa({ subsets: ['latin'], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] })

export default function Generate() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 pt-16 container text-[#D0D0D0] z-10">
      <img src="/noderizz.svg" alt="" className='h-screen fixed top-0 right-5' />
      <nav className={'fixed w-full container ' + lex.className} >
        <div className={'flex items-center justify-between w-full p-2'}>
          <div className='font-black text-3xl '>
            NODE RIZZ
          </div>
          <div className='flex items-center justify-center gap-10'>
            <a href="/#" className='hover:underline underline-offset-1 transition-all duration-500'>HOME</a>
            <a href="/generate" className='hover:underline underline-offset-1 transition-all duration-500'>NODE RIZZ</a>
            <a href="/docs" className='hover:underline underline-offset-1 transition-all duration-500'>DOCS</a>
          </div>
          <div>
            <a href="/login" className='p-3 bg-[#000000]/50 rounded-sm border border-[#ffffff]'>Login/Signup</a>
          </div>
        </div>
      </nav>
      <section className='flex flex-col items-center justify-center h-screen pt-20 w-full p-10'>
        <div className='flex flex-col w-full h-full justify-center items-center gap-10'>
          {/* <div className='text-5xl leading-snug font-extrabold p-4'>
            BUILD NODE BACK-END&nbsp;
            <br />
            LIKE NEVER BEFORE&nbsp;
            <br />
            USING AI WITH&nbsp;
            <br />
            NODE RIZZ
          </div>
          <div className='flex p-4 gap-6'>
            <a href="/docs" className='bg-[#DEDEDE] flex items-center justify-center rounded-sm p-3 text-[#454545] font-semibold text-xs'>
              GET STARTED
            </a>
            <a href="/docs" className='bg-[#DEDEDE00] border  flex items-center justify-center rounded-sm p-3 text-[#ffffff] font-medium text-xs'>
              READ DOCS
            </a>
          </div> */}
          <img src="/ai.svg" alt="" />
          <form action="" className='flex flex-col gap-5 items-center justify-center'>
            <input type="text" placeholder='Enter Prompt to generate your backend' 
            className='placeholder:text-black p-4 rounded-md bg-[#D0D0D0] w-[40rem] text-black focus-visible:outline-none ai-shadow'
            />
            <button type="submit" className='bg-[#DEDEDE] text-[#454545] rounded-sm w-40 p-2 gap-2 flex items-center justify-center'>
              <img src="/star.svg" alt="" className='w-5' />
              Generate
            </button>
          </form>
        </div>
      </section>
    </main>
  )
}