import React from 'react';

import Link from 'next/link';
import Image from 'next/image';

import SocialLinks from './SocialLinks';

import Banner from '../../public/assets/dndbanner2.png';

type Props = {};

const Navbar = (props: Props) => {
  return (
    <header className="mb-5">
      <div className="relative w-auto h-48 overflow-hidden bg-[url(../public/assets/cloudbanner.png)] opacity-60 bg-repeat bg-contain z-9 basis-full ">
        <nav className="z-10 flex items-center justify-between w-full p-10 bg-wh-900 text-wh-10">
          <div className="z-10 flex items-center justify-between gap-10">
            <Link href={'/'} className="font-bold transition-all hover:text-3xl hover:text-yellow-200 ">
              Home
            </Link>
            <Link href={'/'} className="font-bold transition-all hover:text-3xl hover:text-yellow-200">
              Origin Stories
            </Link>
            <Link href={'/'} className="font-bold transition-all hover:text-3xl hover:text-yellow-200">
              Create an Origin Story
            </Link>
          </div>
          <div className="z-10 hidden sm:block">
            <SocialLinks />
          </div>
          <div className="z-10">
            <p>Sign in</p>
          </div>
        </nav>
      </div>
      <div className="flex justify-between gap-8 mx-10 mt-5 mb-4">
        <div className="basis-2/3 md:mt-3">
          <h1 className="text-3xl font-bold md:text-5xl">What Is Your Origin Story?</h1>
          <p className="mt-3 text-sm">Ai generated character origin stories</p>
        </div>
      </div>
      <hr className="mx-10 border-1" />
    </header>
  );
};

export default Navbar;
