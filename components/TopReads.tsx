import React from 'react'
import retro from '@/public/images/image-retro-pcs.jpg'
import laptop from '@/public/images/image-top-laptops.jpg'
import gaming from '@/public/images/image-gaming-growth.jpg'
import TopTile from './TopTile'


const TopReads = () => {
  const reads = [{
    img: retro,
    title: 'Reviving Retro PCs',
    preview: 'What happens when old PCs are given modern upgrades?'
  }, {
    img: laptop,
    title: 'Top 10 laptops of 2022',
    preview: 'Our best picks for various needs and budgets.'
  }, {
    img: gaming,
    title: 'The Growth of Gaming',
    preview: 'How the pandemic has sparked fresh opportunities.'
  }]
  return (
    <div className='grid gap-4 mt-6 desktop:col-span-3 desktop:grid-cols-3'>
        {reads.map((read: any, index: number) => <TopTile spot={index+1} {...read}/>)}
    </div>
  )
}

export default TopReads