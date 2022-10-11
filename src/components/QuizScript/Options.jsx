import { Label, Radio } from 'flowbite-react';
import React, { useState } from 'react'
import ToggleSwitch from './ToggleSwitch';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Options({ singleQuestion, setCorrectAns, setAnswered, answered }) {
    const [viewAns, setViewAns] = useState(false);
    const { id, correctAnswer, question, options } = singleQuestion;
   
    const handleClick = (event, id) => {
        console.log('length : ', answered)
        if (answered.length === 0) {
            setAnswered(1)
            setAnswered([id])
        }
        else {
            let answeredQus = [...answered]
            let isAnswered = answeredQus.find(ques => ques === id);
            console.log(isAnswered, !isAnswered)
            if (!isAnswered) {
                setAnswered([...answered,id])
            }
        }

        if (event.target.value === correctAnswer) {
            toast.success('Correct Answer!');
            event.target.parentNode.classList.remove('bg-slate-200');
            event.target.parentNode.classList.add('bg-green-200');
            setCorrectAns(prev => prev + 1);
        }
        else {
            toast.error('Wrong Answer!');
            event.target.parentNode.classList.remove('bg-slate-200');
            event.target.parentNode.classList.add('bg-red-200');
        }
    }

    const handleViewAnswer = () => {
        setViewAns(!viewAns);
    }

    return (
        <div className='border-2 p-2 sm:p-3 md:p-4 rounded-md bg-slate-300'>
            <fieldset
                className="flex flex-col gap-4"
                id="radio"
            >
                <div className='flex justify-between items-center'>
                    <div>
                        <legend className='font-bold pb-3 pr-1 text-xs sm:text-sm md:text-base'>
                            {question}
                        </legend>

                    </div>
                    <div className='min-w-fit'>
                        <ToggleSwitch
                            handleViewAnswer={handleViewAnswer}>
                        </ToggleSwitch>

                    </div>
                </div>
                {viewAns && <p className='text-center font-bold text-xs sm:text-sm md:text-base'>Correct answer is : <span className='text-blue-600'>
                    {correctAnswer}
                </span></p>}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    {options.map((option, idx) =>
                        <div key={idx} className="flex items-center gap-4 border rounded-md p-4 bg-slate-200">
                            <Radio
                                id="id"
                                name="name"
                                value={option}
                                defaultChecked={false}
                                onClick={event => handleClick(event, id)}
                            />
                            <Label htmlFor="united-state">
                                {option}
                            </Label>
                        </div>
                    )}
                </div>
            </fieldset>
        </div>
    )
}

export default Options;