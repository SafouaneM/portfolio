import React from 'react'
import {projects} from '../storage/data'

export default function Content() {



    return (
        <div className='p-7'>
            {projects.map((project) => (
            <div className="flex">

                    <div className="block p-6 rounded-lg shadow-lg bg-emerald-300 max-w-sm mt-6">

                            <><h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">{project.title}</h5>
                                <p className="text-gray-700 text-base mb-4">
                                    Some quick example text to display the project slug, if somebody wants to read more
                                    they can click on the button
                                </p>
                                <button type="button"
                                        className=" inline-block px-6 py-2.5 bg-cyan-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-cyan-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                                >Read more?
                                </button>
                            </>


                </div>

            </div>
            ))}

        </div>
    )
}