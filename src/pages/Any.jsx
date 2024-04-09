import React from 'react'
import { Link } from 'react-router-dom'

export default function Any() {
  return (
    <div>
      <h1 className="text-6xl text-white mx-auto px-4 py-16 text-center">This Project Is Still Under Development</h1>
      <Link to='/' className='w-[200px] flex justify-center border border-[#e3b22b] bg-[#e3b22b] py-3 px-10 mx-auto text-xl text-center font-bold rounded-md transition-all hover:tracking-wider text-white'>Home</Link>
    </div>
  )
}
