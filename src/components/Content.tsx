import React from 'react'
import Projects from './Projects'


export default function Content() {


    return (
        <>
            <div className="mt-3 grid grid-rows-2 grid-cols-1 md:grid-cols-2 gap-4 text-white animate-fade-in-down">
                <div className="bg-gray-800 rounded gap-4 row-span-1 col-span-1 order-1 shadow ">
                    <h1 className="text-2xl p-6">Hi my name is Safouane, welcome to my portfolio</h1>
                    <div className="flex flex-wrap justify-center">
                        <div className="w-6/12 sm:w-11/12">
                            <img src="https://i.pinimg.com/originals/26/42/66/264266a6e126e5b9c37cee8817d81626.png"
                                 alt="..." className="shadow-lg rounded max-w-full h-auto align-middle border-none"/>
                        </div>
                    </div>
                </div>

                <div className="bg-gray-800  rounded gap-4 row-span-2 col-span-1 order-2 text-white">

                    <h1 className="text-2xl p-6">My projects</h1>
                    <p className='p-7'>I've worked on several projects, some for school and some personal projects.
                        Here I have a display of my personal projects
                    </p>
                   <Projects/>

                </div>
                <div className="bg-emerald-700 rounded gap-4 row-span-1 col-span-1 order-3 text-white">

                    <h1 className="text-xl p-6">A little bit about myself:
                    </h1>
                    <p className='p-7 leading-loose'>
                        As I said above my name is Safouane, and
                        I am not your typical programmer as I prefer tea over coffee. I like to work with front-end
                        technologies and
                        with back-end technologies. Whilst I believe that my back-end skills are above my front-end
                        skills, I enjoy working with both nonetheless.
                        <br/>
                        Personally I like to work with *laravel_icon*Laravel and javascript, I recently picked up VUE.JS
                        and I've worked with that on my internship.
                        I constantly try to improve myself and I really love making stuff that helps other people *or
                        myself*. I also love to learn from others, as sharing knowledge is the key to success for your
                        own development
                    </p>
                </div>
            </div>
        </>
    )
}