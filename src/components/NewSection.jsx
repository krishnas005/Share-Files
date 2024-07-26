"use client";

import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';

export default function NewSection() {
    const animationContainer = useRef(null);

    useEffect(() => {
        const animation = lottie.loadAnimation({
            container: animationContainer.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            path: '/animation.json',
        });

        return () => animation.destroy();
    }, []);

    return (
        <div className=" bg-gray-50 md:pt-10">
            <section>
                <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                        <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
                            <div
                                ref={animationContainer}
                                className="absolute inset-0 h-full w-full object-cover"
                            />
                        </div>

                        <div className="lg:py-24">
                            <h2 className="text-3xl font-bold sm:text-4xl">
                                <span className="text-blue-500">Upload</span>
                                <span>,</span>
                                <span className="text-blue-500"> Save</span> and easily{' '}
                                <span className="text-blue-500">Share</span> your files in one place
                            </h2>

                            <p className="mt-4 sm:text-xl/relaxed text-gray-500">
                                Drag and drop your files directly on our cloud and share it with your friends secretly with password and send it on email
                            </p>

                            <a
                                href="/upload"
                                className="mt-8 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
                            >
                                Get Started
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
