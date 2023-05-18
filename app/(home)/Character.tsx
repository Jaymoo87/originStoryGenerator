'use client';

import React from 'react';
import { characterOptions } from '@/public/data/CharacterData';

import Select from 'react-select';

type Props = {};

const Character = (props: Props) => {
  const { raceOptions, classOptions, homelandOptions } = characterOptions;

  return (
    <form action="" className="flex justify-center ">
      <div className="grid w-1/5 grid-cols-1 grid-rows-1 p-2 m-3 rounded-lg ">
        <label htmlFor="name" className="mx-3">
          name
        </label>
        <input className="p-1 mx-2 mb-4 rounded-lg shadow-xl " placeholder="Name" id="name" />

        <label className="mx-3" htmlFor="age">
          age
        </label>
        <input className="p-1 mx-2 mb-4 rounded-lg shadow-xl" placeholder="Age" id="age" />

        <label className="mx-3" htmlFor="race">
          race
        </label>
        <Select
          options={raceOptions}
          getOptionLabel={(option) => `${option.label} --> ${option.special}`}
          className="p-1 mx-2 mb-4 font-bold text-black shadow-xl"
        />

        <label className="mx-3">class</label>
        <Select
          options={classOptions}
          getOptionLabel={(option) => `${option.label} --> ${option.special}`}
          className="p-1 mx-2 mb-4 font-bold text-black shadow-xl"
        />

        <label className="mx-3"> homeland </label>
        <Select options={homelandOptions} className="p-1 mx-2 mb-4 font-bold text-black shadow-xl" />
      </div>
    </form>
  );
};

export default Character;
