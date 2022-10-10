import { Button, Card } from 'flowbite-react'
import React from 'react'
import { Link } from 'react-router-dom';

function Quiz({ quiz }) {
    const { name, logo, total, id } = quiz;
    return (
        <div>
            <div className="max-w-sm">
                <Card imgSrc={logo}>
                    <div className='flex justify-between items-center'>
                        <div>
                            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                {name}
                            </h5>
                            <p className="font-normal text-gray-700 dark:text-gray-400 pt-3">
                                Question  {total}
                            </p>
                        </div>
                        <div>
                            <Link to={`${name}/${id}`}>
                                <Button
                                    color="light"
                                >
                                    Start Now
                                </Button>
                            </Link>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    )
}

export default Quiz