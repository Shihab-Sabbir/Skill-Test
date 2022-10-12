import React from 'react'
import { Link } from 'react-router-dom';
function Home() {
  return (
    <div className='py-2 flex flex-col justify-center px-5 w-screen'>
      <div className='text-white mx-auto pt-[5%]'>
        <div className='text-5xl pb-3'>Gather <span className='md:text-7xl uppercase text-blue-500'>Skill</span> <span className='text-yellow-200'>,</span> </div>
        <div className='text-5xl pb-10'>Enhance <span className='md:text-7xl uppercase text-blue-500'>Confidence</span> </div>
        <Link to='/topic'>
          <button className='bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow'>Explore Now</button>
        </Link>
      </div>
    </div>
  )
}

export default Home;