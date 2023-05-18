'use client';

import React, { useState } from 'react';
import { characterOptions } from '@/public/data/CharacterData';

import Select from 'react-select';

type Props = {};

const Character = (props: Props) => {
  return (
    <form action="" className="flex justify-center ">
      <div className="grid w-1/5 grid-cols-1 grid-rows-1 p-2 m-3 rounded-lg bg-slate-500">
        <label htmlFor="name" className="mx-3">
          name
        </label>
        <input className="p-1 mx-2 mb-4 rounded-lg " placeholder="Name" id="name" />

        <label className="mx-3" htmlFor="age">
          age
        </label>
        <input className="p-1 mx-2 mb-4 rounded-lg " placeholder="Age" id="age" />

        <label className="mx-3" htmlFor="race">
          race
        </label>
        <Select
          options={characterOptions.raceOptions}
          getOptionLabel={(option) => `${option.label} --> ${option.special}`}
          className="p-1 mx-2 mb-4 font-bold text-black rounded-lg"
        />

        <label className="mx-3">class</label>
        <Select
          options={characterOptions.classOptions}
          getOptionLabel={(option) => `${option.label} --> ${option.special}`}
          className="p-1 mx-2 mb-4 font-bold text-black rounded-lg "
        />

        <label className="mx-3"> homeland </label>
        <select className="p-1 mx-2 mb-4 rounded-lg">
          <option value="homeland">select a homeland</option>
        </select>
      </div>
    </form>
  );
};

export default Character;
