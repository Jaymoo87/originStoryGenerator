'use client';
import React, { useState } from 'react';

import { characterOptions } from '@/public/data/CharacterData';

import Select from 'react-select';

type Props = {};

const Character = (props: Props) => {
  const [characterName, setCharacterName] = useState<string>('');
  const [age, setAge] = useState<number>(0);
  const [race, setRace] = useState<string>('');
  const [characterClass, setCharacterClass] = useState<string>('');
  const [homeland, setHomeland] = useState<string>('');

  const { raceOptions, classOptions, homelandOptions } = characterOptions;

  const submitCharacterData = () => {};

  return (
    <form action="submit" className="grid justify-items-center">
      <div className="grid w-1/5 grid-cols-1 grid-rows-1 p-2 m-3 rounded-lg ">
        <label htmlFor="name" className="mx-3 font-bold ">
          Name
        </label>
        <input
          className="p-1 mx-2 mb-4 rounded-lg shadow-xl"
          onChange={(e) => setCharacterName(e.target.value)}
          placeholder="Name"
          id="name"
        />

        <label className="mx-3 font-bold " htmlFor="age">
          Age
        </label>
        <input
          className="p-1 mx-2 mb-4 rounded-lg shadow-xl"
          onChange={(e) => setAge(Number(e.target.value))}
          placeholder="Age"
          id="age"
        />

        <label className="mx-3 font-bold " htmlFor="race">
          Race
        </label>
        <Select
          options={raceOptions}
          onChange={(e) => setRace('')}
          getOptionLabel={(option) => `${option.label} --> ${option.special}`}
          className="p-1 mx-2 mb-4 font-bold text-black shadow-xl"
        />

        <label className="mx-3 font-bold ">Class</label>
        <Select
          options={classOptions}
          getOptionLabel={(option) => `${option.label} --> ${option.special}`}
          className="p-1 mx-2 mb-4 font-bold text-black shadow-xl"
        />

        <label className="mx-3 font-bold "> Homeland </label>
        <Select options={homelandOptions} className="p-1 mx-2 mb-4 font-bold text-black shadow-xl" />
      </div>
      <div className="">
        <button
          type="button"
          onClick={submitCharacterData}
          className="h-10 p-2 font-bold text-black bg-green-400 cursor-pointer rounded-xl"
        >
          Generate Origin Story
        </button>
      </div>
    </form>
  );
};

export default Character;
