import React from 'react';
import Character from './(home)/Character';

import { Editor } from '@tiptap/react';

type Props = {};

const Home = (props: Props) => {
  return (
    <div className="h-screen">
      <Character />
    </div>
  );
};

export default Home;
