import React from 'react';
import Navbar from '@/components/Navbar';
const page = () => {
  return (
    <div className="flex flex-col gap-4 bg-gray-100 min-h-screen">
      <Navbar />
      <p>Home</p>
    </div>
  );
};

export default page;
