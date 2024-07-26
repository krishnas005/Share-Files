"use client";

import DashboardTopHeader from '@/components/DashboardTopHeader';
import React from 'react';

export default function Layout({ children }) {

  return (
    <div className="relative min-h-screen">
      <div>
        <DashboardTopHeader/>
        {children}
      </div>
    </div>
  );
}

