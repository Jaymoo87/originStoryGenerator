import React from 'react';

import Link from 'next/link';
import Image from 'next/image';

import SocialLinks from './SocialLinks';

import Banner from '../../public/assets/dndbanner2.jpg';

type Props = {};

const Navbar = (props: Props) => {
  return (
    <header className="mb-5">
      <nav className="flex items-center justify-between w-full p-10 bg-wh-900 text-wh-10">
        <div className="hidden sm:block">
          <SocialLinks />
        </div>
        <div className="flex items-center justify-between gap-10">
          <Link href={'/'}>Home</Link>
          <Link href={'/'}>Trending</Link>
          <Link href={'/'}>About</Link>
        </div>
        <div>
          <p>Sign in</p>
        </div>
      </nav>
      <div className="flex justify-between gap-8 mx-10 mt-5 mb-4">
        <div className="basis-2/3 md:mt-3">
          <h1 className="text-3xl font-bold md:text-5xl">What Is Your Origin Story?</h1>
          <p className="mt-3 text-sm">Ai generated character origin stories</p>
        </div>
        <div className="relative w-auto h-48 overflow-hidden rounded-l-full rounded-tr-full basis-full bg-wh-500">
          {' '}
          <Image
            fill
            style={{ objectFit: 'cover' }}
            alt="trending"
            src={Banner}
            placeholder="blur"
            sizes="(max-width: 480px) 100vw, (max-width: 768px) 75vw, (max-width: 1060px) 50vw, 33vw "
            className=""
          />
        </div>
      </div>
      <hr className="mx-10 border-1" />
    </header>
  );
};

export default Navbar;
