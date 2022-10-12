import { Label, Radio } from 'flowbite-react';
import React, { useRef, useState } from 'react'
import ToggleSwitch from './ToggleSwitch';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Options({ singleQuestion, setCorrectAns, setAnswered, answered, index }) {
    const [viewAns, setViewAns] = useState(false);
    const { id, correctAnswer, question, options } = singleQuestion;
    const answerbody = useRef();
    const handleClick = (event, id) => {
        answerbody.current.classList.add('pointer-events-none')
        let quiz = event.target.parentNode.parentNode.children;
        quiz = [...quiz]
        for (const item of quiz) {
            const target = item.children[1].innerText;
            if (target === correctAnswer.replace(/\s{2,}/g, ' ')) {
                item.classList.remove('bg-slate-200');
                item.classList.add('bg-green-200');
            }
        }
        let answeredQus = [...answered]
        let isAnswered = answeredQus.find(ques => ques === id);

        if (answered.length === 0) {
            setAnswered([id])
        }
        else {
            if (!isAnswered) {
                setAnswered([...answered, id])
            }
        }

        if (event.target.value === correctAnswer) {
            event.target.parentNode.checked = true;
            toast.success('Correct Answer!');
            event.target.parentNode.classList.remove('bg-slate-200');
            event.target.parentNode.classList.add('bg-green-200');
            if (!isAnswered) {
                setCorrectAns(prev => prev + 1);
            }
        }

        else {
            event.target.parentNode.checked = true;
            toast.error('Wrong Answer!');
            event.target.parentNode.classList.remove('bg-slate-200');
            event.target.parentNode.classList.add('bg-red-200');
        }
    }

    const handleViewAnswer = () => {
        setViewAns(!viewAns);
    }

    return (
        <div className='p-2 sm:p-3 md:p-4 rounded-md bg-gray-100'>
            <fieldset
                className="flex flex-col gap-4"
                id="radio"
            >
                <div className='flex justify-between items-center'>
                    <div>
                        <legend className='font-bold p-3 pr-3 lg:pr-5 text-xs sm:text-sm md:text-base font-mono text-justify'>
                            {index + 1}.  {question.replace(/(<([^>]+)>)/ig, '')}
                        </legend>

                    </div>
                    <div className='min-w-fit'>
                        <ToggleSwitch
                            handleViewAnswer={handleViewAnswer}>
                        </ToggleSwitch>

                    </div>
                </div>
                {viewAns && <p className='text-center font-bold text-xs sm:text-sm md:text-base font-mono'>Correct answer is : <span className='text-blue-600'>
                    {correctAnswer}
                </span></p>}
                <div ref={answerbody} className='grid grid-cols-1 md:grid-cols-2 gap-1 md:gap-2 font-mono'>
                    {options.map((option, idx) =>
                        <div key={idx} className="flex items-center gap-4 border rounded-md p-4 bg-slate-200 hover:border hover:border-slate-600">
                            <Radio
                                id="id"
                                name={idx} 
                                value={option}
                                onClick={event => handleClick(event, id)}
                                defaultChecked={false}
                            />
                            <Label htmlFor="quiz">
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