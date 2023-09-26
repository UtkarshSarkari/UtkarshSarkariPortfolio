import React from 'react'

interface QuotesProps {
  quote: string,
  author: string,
  imgurl: any
}

export default function Quotes({ quote, author, imgurl }: QuotesProps) {
  return (
    <div className='bg-gradient-to-r from-emerald-500 to-cyan-600 w-full text-sm italic p-5 px-10 mt-20 xl:mt-5 flex items-center justify-center 2xl:text-1.5xl 2xl:py-12 text-black'>
      <div className="lg:w-[90%] xl:w-[60%] flex flex-col">
        <p className='leading-6 2xl:leading-8'>" {quote} "</p>
        <span className='flex gap-2 justify-end'>- {author} <img src={imgurl} className='h-4 w-4' alt="" /></span>
      </div>
    </div>
  )
}
