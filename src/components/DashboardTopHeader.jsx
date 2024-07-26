import { UserButton } from '@clerk/nextjs';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function DashboardTopHeader() {
  return (
    <div className="flex p-5 border-b items-center justify-between">
      <Link href="/"><Image src="/logo.svg" alt="logo" width={50} height={50} className="" /></Link>
      <div className='text-4xl'>
        <UserButton />
      </div>
    </div>
  );
}

export default DashboardTopHeader;
