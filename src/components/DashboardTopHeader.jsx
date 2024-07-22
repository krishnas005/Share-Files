import { UserButton } from '@clerk/nextjs'
import { AlignJustify } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

function DashboardTopHeader() {
  return (
    <div className='flex p-5 border-b items-center first-letter:justify-between md:justify-end'>
        <AlignJustify className='md:hidden'/>
        <Image src="/logo.svg" alt="logo" width={50} height={50} className='md:hidden' />
        <UserButton />
    </div>
  )
}

export default DashboardTopHeader
