import DashboardTopHeader from '@/components/DashboardTopHeader'
import SideNav from '@/components/SideNav'
import React from 'react'

export default function layout({ children }) {
  return (
    <div>
      <div className='w-64 h-full flex-col fixed inset-y-0 z-50'>
        <SideNav />
      </div>
      <div className='ml-64'>
        <DashboardTopHeader />
        {children}
      </div>

    </div>
  )
}
