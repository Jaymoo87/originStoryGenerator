'use-client';

import React from 'react';

// import Select from 'react-select';

type Props = {};

const raceOptions = [
  { value: 'human', label: 'Human' },
  { value: 'elf', label: 'Elf' },
  { value: 'dragonborn', label: 'Dragonborn' },
];

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
        {/* <Select options={raceOptions} className="p-1 mx-2 mb-4 rounded-lg" /> */}

        <label className="mx-3">class</label>
        <select defaultValue={0} className="p-1 mx-2 mb-4 rounded-lg ">
          <option value={0}>select a class</option>
          <option value="mage">Mage</option>
        </select>

        <label className="mx-3"> homeland </label>
        <select className="p-1 mx-2 mb-4 rounded-lg">
          <option value="homeland">select a homeland</option>
        </select>
      </div>
    </form>
  );
};

export default Character;
