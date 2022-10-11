import React from 'react'
import { useLoaderData } from 'react-router-dom'
import Options from './Options';

function QuizScript() {
    const script = useLoaderData();
    const { id, name, questions } = script.data;
    return (
        <div className='py-10'>
            <p className='text-center font-bold text-2xl text-white'>{name} Quiz</p>
            <div className='grid grid-cols-1 gap-4 p-4'>
                {questions?.map(question => <Options key={question.id} singleQuestion={question}></Options>)}
            </div>
        </div>
    )
}

export default QuizScript;