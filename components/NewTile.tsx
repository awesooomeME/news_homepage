import Link from 'next/link'
import React from 'react'

type NewTileProps = {
    title: string,
    preview: string,
    spot: number
}

const NewTile = ({title, preview, spot}: NewTileProps) => {
  return (
    <Link href='./' className='text-off_white grid gap-1 desktop:max-h-[200px] group'>
        <h2 className='font-heavy text-base tracking-wider
            desktop:text-xl group-hover:text-soft_orange'>
            {title}
        </h2>
        <p className='text-grayish_blue text-xs tracking-widest
            leading-5 desktop:text-lg'>
            {preview}
        </p>
        {spot < 2 ? <hr className='bg-grayish_blue mt-5'/> : ''}
    </Link>
  )
}

export default NewTile