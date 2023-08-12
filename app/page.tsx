import Image from 'next/image'
import head_image_mobile from '@/public/images/image-web-3-mobile.jpg'
import head_image_desktop from '@/public/images/image-web-3-desktop.jpg'
import logo from '@/public/images/logo.svg'
import NewReads from '@/components/NewReads'
import TopReads from '@/components/TopReads'
import Sidebar from '@/components/Sidebar'

export default function Home() {
  return (
    <main className="min-h-screen grid place-content-center p-5 gap-5
      desktop:py-16 desktop:px-24 max-w-[1800px]">
      <header className='flex justify-between items-center'>
        <Image src={logo} alt='Website logo'/>
        <Sidebar/>
      </header>
      {/* <Sidebar/> */}
      <div className='grid gap-5 desktop:grid-cols-3 desktop:grid-rows-3
        desktop:gap-10'>
        <section className='grid gap-5 desktop:col-span-2 desktop:row-span-2'>
          <picture className='w-full h-auto'>
            <source srcSet={head_image_desktop.src} media='(min-width: 700px)'/>
            <Image src={head_image_mobile} alt='Image showing abstract shapes and colors'
              className='w-full h-full'/>
          </picture>
          <div className='grid gap-2 desktop:grid-cols-2'>
            <h1 className='font-extra_heavy text-[2.6rem] leading-10
              desktop:text-[4.3rem] desktop:leading-[4.5rem]'>
              The Bright Future of Web 3.0?
            </h1>
            <div className='grid gap-5 desktop:gap-0'>
              <p className='font-normal text-sm tracking-wide leading-5
                desktop:text-lg'>
                We dive into the next evolution of the web that claims to put the power of the platforms back 
                into the hands of the people. But is it really fulfilling its promise?
              </p>
              <button className='bg-soft_red text-off_white w-1/2
              py-2 uppercase desktop:py-1 desktop:text-xl desktop:tracking-widest
              desktop:h-2/3 hover:bg-very_dark_blue'>
                Read more
              </button>
            </div>
          </div>
        </section>
        <NewReads/>
        <TopReads/>
      </div>
    </main>
  )
}
