import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

type TopTileProps = {
    spot: string,
    img: any,
    title: string,
    preview: string
}

const TopTile = ({spot, img, title, preview}: TopTileProps) => {
  return (
    <Link href='./' className='flex gap-5 desktop:grid-cols-3 desktop:gap-7
    desktop:mt-10 group'>
        <Image src={img} alt={`Thumbnail for article ${title}`}
            className='row-span-3 w-[90px] h-auto desktop:h-[150px]
                default:w-[170px]'/>
        <div className='flex flex-col gap-1'>
            <h2 className='text-dark_grayish_blue/30 font-heavy
                text-2xl desktop:text-4xl'>
                {`0${spot}`}
            </h2>
            <h2 className='font-extra_heavy text-base text-very_dark_blue
                desktop:text-2xl group-hover:text-soft_red'>
                {title}
            </h2>
            <p className='text-grayish_blue text-xs tracking-widest
                leading-5 desktop:text-xl'>
                {preview}
            </p>
        </div>
    </Link>
  )
}

export default TopTile