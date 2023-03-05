import React from 'react'
import QuoImg1 from '../public/assets/dummy.jpg';
import QuoImg2 from '../public/assets/dummy.jpg';
import QuoImg3 from '../public/assets/dummy.jpg';
import QuoteImg from './QuoteImg';


const Quote = () => {
  return (
    <div className='max-w-[740px] mx-auto text-center py-24'>
        <p className='text-2xl font-bold'>Here's some of My Experiences and Projects</p>
        <p className='pb-4'>AKR</p>
        <div className='grid grid-cols-3 md-grid-cols-3 lg-gird-cols-6 gap-2 p-4'>
            <QuoteImg socialImg={QuoImg1} />
            <QuoteImg socialImg={QuoImg2} />
            <QuoteImg socialImg={QuoImg3} />
            <a href="/projects" class="inline-flex items-center mt-4 font-semibold text-red-600 lg:mb-0 hover:text-neutral-600" title="More"> More » </a>
        </div>
    </div>
  )
}

export default Quote