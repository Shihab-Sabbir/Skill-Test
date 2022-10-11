import React from 'react'
import { Link, useRouteError } from 'react-router-dom';

function ErrorPage() {
    const error = useRouteError();
    console.log('error : ', error);
    return (
        <div className='text-white'>
            <section className="flex items-center h-full p-16 dark:bg-gray-900 dark:text-gray-100">
                <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
                    <div className="max-w-md text-center">
                        <h2 className="mb-8 font-extrabold text-9xl dark:text-gray-600">
                            <span className="sr-only">Error</span>{error?.status}
                        </h2>
                        <p className="text-2xl font-semibold md:text-3xl">{error?.statusText}</p>
                        {error && <p className="mt-4 mb-8 dark:text-gray-400">But dont worry, you can find plenty of other things on our homepage.</p>}
                        {error === undefined && <p className="text-justify mt-4 mb-8 dark:text-gray-400">Opps ! Sothing is wrong , please check your URL is correct or not but dont worry, you can find plenty of other things on our homepage.</p>}
                        <Link to='/'>
                            <button className='bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow'>Back to homepage</button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ErrorPage;