import React from 'react';

type Props = {};

function Navbar({}: Props) {
  return (
    <nav className="sticky top-0 left-0 z-50 bg-red-200">
      <div className="h-[80px] w-full flex justify-between items-center max-w-7xl px-3 mx-auto">
        <div className="flex object-center justify-center gap-2 ">
          <h2 className="text-gray-500 text-3xl">Weather</h2>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
