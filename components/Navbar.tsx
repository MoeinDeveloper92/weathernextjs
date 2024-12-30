import React from 'react';
import { MdWbSunny, MdMyLocation, MdOutlineLocationOn } from 'react-icons/md';
import SearchBox from './SearchBox';
import Link from 'next/link';
type Props = {};

function Navbar({}: Props) {
  return (
    <nav className="sticky top-0 left-0 z-50 bg-white">
      <div className="h-[80px] w-full max-sm:pt-2 max-sm:space-y-3  flex max-sm:flex-col  justify-between items-center max-w-7xl px-3 mx-auto">
        <div className="flex items-center justify-center gap-2 ">
          <Link href={'/'} className="text-gray-500 text-3xl">
            Weather
          </Link>
          <MdWbSunny className="text-3xl self-center mt-2 text-yellow-200" />
        </div>
        {/* Righjt side */}
        <div className="flex items-center gap-3">
          <section className="flex gap-2 items-center">
            <MdMyLocation className="text-2xl text-gray-400 hover:opacity-80 cursor-pointer" />
            <MdOutlineLocationOn className="text-3xl" />
            <p className="text-slate-900/80 text-sm">Germany</p>
          </section>
          {/* Search bar */}
          <section>
            <SearchBox />
          </section>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
