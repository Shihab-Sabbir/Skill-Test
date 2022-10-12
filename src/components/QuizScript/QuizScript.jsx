import React, { useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import ErrorPage from '../ErrorPage/ErrorPage';
import Options from './Options';

function QuizScript() {
    const [answered, setAnswered] = useState([]);
    const [correctAns, setCorrectAns] = useState(0)
    const script = useLoaderData();
    const { id, name, questions } = script.data;

    return (
        <div className='py-10'>
            {questions?.length === undefined ? <ErrorPage /> :
                <div>
                    <p className='text-center font-bold text-2xl text-white'>{name} Quiz</p>
                    <p className='text-center text-yellow-400 p-2'><small>**Only first answer will be counted correct or wrong for each question**</small></p>
                    <div className='text-center  flex flex-col md:flex-row justify-evenly p-2 border m-4 lg:max-w-[970px] lg:mx-auto lg:p-4'>
                        <p className='text-white'>Total Question  : {questions?.length || 0}</p>
                        <p className='text-white'>Answered Question : {answered?.length}</p>
                        <p className='text-white'>Correct Answer : {correctAns} </p>
                        <p className='text-white'>Wrong Answer : {answered?.length - correctAns} </p>
                    </div>
                </div>
            }
            <div className='grid grid-cols-1 gap-4 p-1 sm:p-2 md:p-4 lg:max-w-[1000px] mx-auto'>
                {questions?.map((question, idx) => <Options key={question.id} answered={answered} setAnswered={setAnswered} index={idx} singleQuestion={question} setCorrectAns={setCorrectAns}></Options>)}
            </div>
        </div>
    )
}

export default QuizScript;