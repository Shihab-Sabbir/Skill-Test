import React from 'react'
import { useLoaderData } from 'react-router-dom'

function QuizScript() {
    const script = useLoaderData();
    const { name, questions } = script.data;
    return (
        <div className='py-20'>
            <p className='text-center font-bold text-xl'> Quiz of {name}</p>
        </div>
    )
}

export default QuizScript