import React from 'react'
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';
import './Home.css'
function Home() {
  const data = useLoaderData();
  const quizes = data.data;
  return (
    <div className='header-container py-20 flex justify-center px-5'>
      <div className='grid grid-cols-1 sm:grid-cols-2 
      md:grid-cols-3 lg:grid-cols-4 gap-2'>
        {quizes?.map(quiz => <Quiz quiz={quiz}></Quiz>)}
      </div>
    </div>
  )
}

export default Home;