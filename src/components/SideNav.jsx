"use client";

import { File, Shield, Upload } from 'lucide-react'
import Image from 'next/image'
import React, { useState } from 'react'

function SideNav() {
    const [activeIndex, setActiveIndex] = useState(0);
    const menuItems = [
        {
            id: 1,
            name: 'Upload',
            icon: Upload,
            path: 'upload'
        },
        {
            id: 2,
            name: 'Files',
            icon: File,
            path: 'upload'
        },
        {
            id: 1,
            name: 'Upgrade',
            icon: Shield,
            path: 'upload'
        }
    ]

    return (
        <div className='shadow-sm border-r'>
            <div className='p-5 border-b'>
                <Image src="/logo.svg" alt="logo" width={50} height={50} />
            </div>
            <div className='flex flex-col float-left w-full'>
                {menuItems.map((item, index) => (
                    <button key={index} className={`flex gap-2 p-6 px-6 hover:bg-gray-100 w-full text-gray-500 ${activeIndex == index ? 'bg-blue-50 text-blue-500' : null}`}
                        onClick={() => setActiveIndex(index)}
                    >
                        <item.icon />
                        <h2>{item.name}</h2>
                    </button>
                ))}
            </div>
        </div>
    )
}

export default SideNav

