import React from 'react'

export default function HeroSection() {
    return (
        <div>
            <section className="bg-gray-50">
                <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex ">
                    <div className="mx-auto max-w-xl text-center">
                        <h1 className="text-3xl font-extrabold sm:text-5xl">
                            <span className='text-blue-500'>Upload</span><span>,</span> <span className='text-blue-500'> Save</span> and easily <span className='text-blue-500'>Share</span> your files in one place
                        </h1>

                        <p className="mt-4 sm:text-xl/relaxed text-gray-500">
                            Drag and drop your files directly on our cloud and share it with your friends secretly with password and send it on email
                        </p>

                        <div className="mt-8 flex flex-wrap justify-center gap-4">
                            <a
                                className="block w-full rounded bg-blue-500 px-12 py-3 text-sm font-medium text-white shadow hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-700 sm:w-auto"
                                href="/files"
                            >
                                Get Started
                            </a>

                            <a
                                className="block w-full rounded px-12 py-3 text-sm font-medium text-blue-500 shadow hover:text-blue-600 focus:outline-none focus:ring active:text-blue-700 sm:w-auto"
                                href="#"
                            >
                                Learn More
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
