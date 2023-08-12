'use client'

import Link from 'next/link'
import React, { useState } from 'react'

const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(false)

  const quickLinks = [{
    title: 'Home', link: './'
  }, {
    title: 'New', link: './'
  }, {
    title: 'Popular', link: './'
  }, {
    title: 'Trending', link: './'
  }, {
    title: 'Categories', link: './'
  }]

  return (
    <div className={`flex gap-7 text-lg tracking-widest flex-col absolute 
        top-0 right-0 h-full px-7 w-3/4 pt-[10rem] desktop:px-0 desktop:pt-0
        desktop:relative desktop:bg-none desktop:flex-row desktop:text-sm
        desktop:w-auto desktop:h-auto
        ${showSidebar ? 'bg-off_white' : 'bg-none'}`}>
        <div className={`bg-very_dark_blue w-1/2 h-full absolute top-0 left-0 opacity-50
            z-10 desktop:hidden transition-all ease-in-out
            ${showSidebar ? 'visible -translate-x-full' : 'hidden translate-x-0'}`}>
        </div>
        <div className='flex flex-col gap-2 w-[60px] absolute top-0 right-0 -translate-x-7 translate-y-7
            desktop:hidden'
            onClick={() => {setShowSidebar(!showSidebar)}}>
            <div className={`transition-all ease-in-out bg-very_dark_blue h-[5px]
                 ${showSidebar ? 'rotate-45 translate-y-[1rem]' : 'rotate-0 translate-y-0'} `}></div>
            <div className={`transition-all ease-in-out bg-very_dark_blue h-[5px]
                ${showSidebar ? 'translate-x-5 opacity-0' : 'translate-x-0 opacity-1'}`}></div>
            <div className={`transition-all ease-in-out bg-very_dark_blue h-[5px]
                 ${showSidebar ? '-rotate-45 -translate-y-[0.5rem]' : '-rotate-0 -translate-y-0'} `}></div>
        </div>
        {
            quickLinks.map((quickLink: any) => 
                <Link href={quickLink.link} className={`hover:text-soft_red 
                    ${showSidebar ? 'translate-x-0 visible' : 'translate-x-full hidden'}
                    desktop:translate-x-0 desktop:block`} key={quickLink.title}>
                        {quickLink.title}
                </Link> )
        }
    </div>
  )
}

export default Sidebar