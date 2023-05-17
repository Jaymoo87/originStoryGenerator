import React from 'react';

const Footer = () => {
  return (
    <footer className="px-10 py-10 bg-wh-900 text-wh-50 ">
      <div className="justify-between gap-16 mx-auto sm:flex">
        <div className="mt-16 sm:mt-0 basis-1/2">
          <h4 className="font-bold">Blog of The Future</h4>
          <p className="my-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, veritatis dolores earum placeat rem culpa
            ducimus suscipit doloribus autem assumenda reprehenderit sapiente praesentium voluptate perspiciatis
            distinctio qui veniam maxime voluptatibus.
          </p>
          <p>© Blog of the Future All Rights Reserved.</p>
        </div>
        <div className="mt-16 sm:mt-0 basis-1/3">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">Lorem ipsum dolor sit amet</p>
          <p className="my-5">Another Link</p>
          <p>reprehenderit sapiente praesentium </p>
        </div>
        <div className="mt-16 sm:mt-0 basis-1/2">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">maxime voluptatibus</p>
          <p>(555).555.5555</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
