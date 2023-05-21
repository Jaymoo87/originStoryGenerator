import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer className="px-10 py-10 bg-wh-900 text-wh-50 ">
      <div className="justify-between gap-16 mx-auto sm:flex">
        <div className="mt-16 sm:mt-0 basis-1/2">
          <h4 className="font-bold">Where Is Your Homeland?</h4>
          <p className="my-5">
            There is no database or way to save your generated orgin story through this site. you may edit it and copy
            and paste it wherever you would like.
          </p>
          <p>© Orgin Generator All Rights Reserved.</p>
        </div>
        <div className="mt-16 sm:mt-0 basis-1/3">
          <h4 className="font-bold">Links</h4>
          <Link rel="stylesheet" href="https://openai.com">
            <p className="my-5">openai</p>
          </Link>
          <Link href="https://nextjs.org/">
            <p className="my-5">NextJs</p>
          </Link>
          <Link href={'https://www.dndbeyond.com/'}>
            <p>DND Beyond </p>
          </Link>
        </div>
        <div className="mt-16 sm:mt-0 basis-1/2">
          <h4 className="font-bold">Contact Me</h4>
          <p className="my-5">justin.murrah.dev@gmail.com</p>
          <Link href="https://github.com/Jaymoo87">
            <p>Github</p>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
