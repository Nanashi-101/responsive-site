import React from 'react'
import svg1 from '../assets/svg1.webp';
import svg2 from '../assets/svg2.webp';
import svg3 from '../assets/svg3.png';


const Features = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-[#ffbb00] z-10' id='company'>
      <h1 className='text-3xl md:text-5xl sm:text-4xl font-bold text-center mb-6'>Explore new heights with us, right beside you!</h1>
      <div className="max-w-[1240px] mx-auto mt-[5rem] grid md:grid-cols-3 gap-8">
        <div className="w-full bg-white shadow-2xl px-4 rounded-lg hover:scale-105 duration-300 hover:bg-slate-100">
          <img className='w-[36rem] mx-auto mt-[4.56rem] translate-y-[-30px] z-[-1] overflow-hidden' src={svg1} alt="/"/>
          <p className='uppercase text-[.7rem] font-medium text-[#ffbb00]'>mentoring</p>
          <h1 className='font-bold text-2xl pb-4'>Learn to be proffesional trader </h1>
          <p className='font-medium text-[#ffbb00]'>Unlock trading mastery through personalized guidance and comprehensive educational resources.</p>
          <button to='/any' className="px-4 w-[180px] md:text-xl sm:text-md text-lg my-4 mx-auto border border-[#ffbb00] bg-[#ffbb00] py-3 text-center font-bold rounded-md transition-all hover:tracking-wider">Learn more &rarr;</button>
        </div>
        <div className="w-full bg-white shadow-2xl px-4 rounded-lg hover:scale-105 duration-300 hover:bg-slate-100">
          <img className='w-[30rem] mx-auto mt-[7rem] translate-y-[-30px] z-[-1]' src={svg2} alt="/"/>
          <p className='uppercase text-[.7rem] font-medium text-[#ffbb00]'>investments</p>
          <h1 className='font-bold text-2xl pb-4'>Learn to invest like a pro </h1>
          <p className='font-medium text-[#ffbb00]'>Our investment coaching service offers expert guidance to empower you with the skills for savvy investing.</p>
          <button to='/any' className="px-4 w-[180px] md:text-xl sm:text-md text-lg my-4 mx-auto border border-[#ffbb00] bg-[#ffbb00] py-3 text-center font-bold rounded-md transition-all hover:tracking-wider">Learn more &rarr;</button>
        </div>
        <div className="w-full bg-white shadow-2xl px-4 rounded-lg hover:scale-105 duration-300 hover:bg-slate-100">
          <img className='w-[28rem] mx-auto my-3' src={svg3} alt="/"/>
          <p className='uppercase text-[.7rem] font-medium text-[#ffbb00]'>managing</p>
          <h1 className='font-bold text-2xl pb-4'>Learn to manage your portfolio </h1>
          <p className='font-medium text-[#ffbb00]'>Gain expertise in crafting and managing trading portfolios through our specialized instructional service.</p>
          <button to='/any' className="px-4 w-[180px] md:text-xl sm:text-md text-lg my-4 mx-auto border border-[#ffbb00] bg-[#ffbb00] py-3 text-center font-bold rounded-md transition-all hover:tracking-wider">Learn more &rarr;</button>
        </div>
      </div>
    </div>
  )
}

export default Features

