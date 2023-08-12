import React from 'react'
import NewTile from './NewTile'

const NewReads = () => {
  const reads = [{
    title: 'Hydrogen VS Electric Cars',
    preview: 'Will hydrogen-fueled cars ever catch up to EVs?'
  }, {
    title: 'The Downsides of AI Artistry',
    preview: 'What are the possible adverse effects of on-demand AI image generation?'
  }, {
    title: 'Is VC Funding Drying Up?',
    preview: 'Private Funding by VC firms is down 50% YOY. We take a look at what that means.'
  }]
  return (
    <div className='grid bg-very_dark_blue px-3 py-5 
        gap-4 mt-6 desktop:col-span-1 desktop:row-span-2
        desktop:mt-0 desktop:py-10 desktop:px-8'>
        <h1 className='font-heavy text-soft_orange text-2xl 
            tracking-wide desktop:text-[3rem]'>
            New
        </h1>
        {reads.map((read: any, index: number) => <NewTile key={read.title} spot={index} {...read}/>)}
    </div>
  )
}

export default NewReads