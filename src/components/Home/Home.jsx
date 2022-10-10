import React from 'react'
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';
function Home() {
  const data = useLoaderData();
  const quizes = data.data;
  return (
    <div className='py-20 flex justify-center px-5'>
      <div className='grid grid-cols-1 sm:grid-cols-2 
      md:grid-cols-3 lg:grid-cols-4 gap-2'>
        {quizes?.map(quiz => <Quiz key={quiz.id} quiz={quiz}></Quiz>)}
      </div>
    </div>
  )
}

export default Home;