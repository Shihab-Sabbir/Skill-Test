import { Button, Card } from 'flowbite-react'
import React from 'react'
import { Link } from 'react-router-dom';
import logoGit from '../../assets/git.png'
function Quiz({ quiz }) {
    let { name, logo, total, id } = quiz;
    if (logo === "https://live.staticflickr.com/65535/52412639027_5692c15b3f_o.png") {
        logo = logoGit;
    }
    return (
        <div>
            <div className="max-w-sm">
                <Card imgSrc={logo}>
                    <div className='flex justify-between items-center '>
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