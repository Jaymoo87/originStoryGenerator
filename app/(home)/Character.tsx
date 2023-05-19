'use client';
import React, { useEffect, useState } from 'react';

import ReactSelect, { MultiValue, SingleValue } from 'react-select';
import { Editor } from '@tiptap/react';

import { characterOptions } from '@/public/data/CharacterData';
import CharacterOriginStory from '../(shared)/CharacterOriginStory';

type Props = {
  setContent: (content: string) => void;
  editor: Editor | null;
  content: string;
  characterName: string;
  age: number;
  race: string;
  characterClass: string;
  homeland: string;
};

interface ReactSelectOptions {
  label: string;
  value: string;
}
type MultiOptions = MultiValue<ReactSelectOptions>;
type SingleOption = SingleValue<ReactSelectOptions>;

const Character = ({ content, editor, setContent }: Props) => {
  const [selectRaceOptions, setSelectRaceOptions] = useState<SingleOption>();

  const [fieldError, setFieldError] = useState<string>('');
  const [raceValue, setRaceValue] = useState<string>('');
  const [classValue, setClassValue] = useState<string>('');
  const [homelandValue, setHomelandValue] = useState<string>('');

  const [characterName, setCharacterName] = useState<string>('');
  const [age, setAge] = useState<number>(0);
  const [race, setRace] = useState<string>('');
  const [characterClass, setCharacterClass] = useState<string>('');
  const [homeland, setHomeland] = useState<string>('');

  const { raceOptions, classOptions, homelandOptions } = characterOptions;

  const onRaceChange = (e: any) => {};

  const onClassChange = (e: any) => {
    const value = e.target.value;
    setClassValue(value);
  };

  const onHomelandChange = (e: any) => {
    const value = e.target.value;
    setHomelandValue(value);
  };

  return (
    <>
      <form action="submit" className="grid justify-items-center">
        <div className="grid w-1/5 grid-cols-1 grid-rows-1 p-2 m-3 rounded-lg ">
          <label htmlFor="name" className="mx-3 font-bold ">
            Name
          </label>
          <input
            value={characterName}
            className="p-1 mx-2 mb-4 text-black rounded-lg shadow-xl"
            onChange={(e) => setCharacterName(e.target.value)}
            placeholder="Name"
            id="name"
          />

          <label className="mx-3 font-bold " htmlFor="age">
            Age
          </label>
          <input
            value={age}
            className="p-1 mx-2 mb-4 text-black rounded-lg shadow-xl"
            onChange={(e) => setAge(Number(e.target.value))}
            placeholder="Age"
            id="age"
          />

          <label className="mx-3 font-bold " htmlFor="race">
            Race
          </label>
          <ReactSelect
            options={raceOptions}
            onChange={onRaceChange}
            className="p-1 mx-2 mb-4 font-bold text-black shadow-xl"
          />

          <label className="mx-3 font-bold ">Class</label>
          <ReactSelect options={classOptions} className="p-1 mx-2 mb-4 font-bold text-black shadow-xl" />

          <label className="mx-3 font-bold "> Homeland </label>
          <ReactSelect
            isSearchable
            options={homelandOptions}
            className="p-1 mx-2 mb-4 font-bold text-black shadow-xl"
          />
        </div>
      </form>
      <CharacterOriginStory
        content={content}
        characterName={characterName}
        characterClass={characterClass}
        age={age}
        race={race}
        homeland={homeland}
      />
    </>
  );
};

export default Character;
