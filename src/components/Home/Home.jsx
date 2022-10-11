import React from 'react'
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';
import logo from '../../assets/logo-2.png'
function Home() {
  const data = useLoaderData();
  const quizes = data.data;
  return (
    <div className='py-2 flex flex-col justify-center px-5'>
      <div className='flex flex-col md:flex-row py-5 justify-center items-center lg:items-start 2xl:items-center gap-3'>
        <img src={logo} className='w-[50%] lg:w-[28%] 2xl:w-[20%] ' />
        <div className='text-white p-2 xl:max-w-[600px]'>
          <p className='text-2xl pb-3 font-bold'><span className='text-5xl'>S</span>kill Test</p>
          <p className='text-justify'>Web developers need a rare combination of technical skills and soft skills to thrive, as developer skills include both the computer programming expertise needed to design, develop, test and debug software and the soft skills to navigate communication with company leadership, team members and other stakeholders.To enhance skills there is no more accurate proccess rather than testing yourself.So,in this platform you can judge yourself and get confident.</p>
        </div>
      </div>
      <div className='flex justify-center'>
        <div className='grid grid-cols-1 sm:grid-cols-2 
      md:grid-cols-3 lg:grid-cols-4 gap-2'>
          {quizes?.map(quiz => <Quiz key={quiz.id} quiz={quiz}></Quiz>)}
        </div>
      </div>
    </div>
  )
}

export default Home;