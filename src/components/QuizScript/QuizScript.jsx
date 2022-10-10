import React from 'react'
import { useLoaderData } from 'react-router-dom'
import Options from './Options';

function QuizScript() {
    const script = useLoaderData();
    const { id, name, questions } = script.data;
    return (
        <div className='py-20'>
            <p className='text-center font-bold text-xl'> Quiz of {name}</p>
            <div className='grid grid-cols-1 gap-4 p-4'>
                {questions?.map(question => <Options key={question.id} singleQuestion={question}></Options>)}
            </div>
        </div>
    )
}

export default QuizScript;