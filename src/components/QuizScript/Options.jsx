import { Label, Radio } from 'flowbite-react';
import React, { useState } from 'react'
import ToggleSwitch from './ToggleSwitch';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Options({ singleQuestion }) {
    const [viewAns, setViewAns] = useState(false);
    const {id, correctAnswer, question, options } = singleQuestion;
console.log(id)
    const handleClick = (event) => {
        if (event.target.value === correctAnswer) {
            toast.success('Correct Answer!');
        }
        else {
            toast.error('Wrong Answer!');
        }
    }

    const handleViewAnswer = () => {
        setViewAns(!viewAns);
    }

    return (
        <div className='border-2 p-4 rounded-md bg-slate-300'>
            <fieldset
                className="flex flex-col gap-4"
                id="radio"
            >
                <div className='flex justify-between items-center'>
                    <div>
                        <legend className='font-bold pb-3'>
                            {question}
                        </legend>

                    </div>
                    <div className='min-w-fit'>
                        <ToggleSwitch
                            handleViewAnswer={handleViewAnswer}>
                        </ToggleSwitch>
                        
                    </div>
                </div>
                {viewAns && id && <p className='text-center font-bold'>Correct answer is : <span className='text-blue-600'>
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
                                onClick={(event) => handleClick(event)}
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