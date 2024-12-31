import React from 'react';
import { MdWbSunny, MdMyLocation, MdOutlineLocationOn } from 'react-icons/md';
import SearchBox from './SearchBox';
import Link from 'next/link';
import { fetchWeatherData } from '@/utils/fetchWeatherData';
type Props = {};

// function SugesstionBox({ showSuggestions: boolean }) {
//   return (
//     <ul className="mt-4 bg-white absolute border top-[44px] left-0 border-gray-400 rounded-md min-w-[200px] flex flex-col gap-1 px-2 py-2 ">
//       <li className=" cursor-pointer p-1 rounded hover:bg-gray-200"></li>
//     </ul>
//   );
// }

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
            {/* <SugesstionBox /> */}
          </section>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
