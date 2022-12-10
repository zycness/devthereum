import React from "react";

import Link from "next/link";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <nav className='bg-slate-900 text-white  flex flex-col justify-center items-center min-h-[10vh] font-mono'>
      <h1 className='text-white text-4xl font-extrabold '>
        <span className='text-sky-600'>DEV</span>THEREUM
      </h1>
      <ul className='flex justify-center items-center space-x-6 font-semibold'>
        <li>
          <Link href={"/"} className='before:content-none'>
            Home
          </Link>
        </li>
        <li>
          <Link href={"/cryptos"}>Cryptos</Link>
        </li>
        <li>
          <Link href={"/news"}>News</Link>
        </li>
        <li>
          <Link href={"/news"}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
