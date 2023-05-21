'use client';
import React, { useState } from 'react';

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
interface Character {
  characterName: string;
  age: number;
  race: string;
  characterClass: string;
  homeland: string;
}

const Character = ({ content }: Props) => {
  const [characterName, setCharacterName] = useState<string>('');
  const [age, setAge] = useState<number>(0);
  const [race, setRace] = useState<string>('');
  const [characterClass, setCharacterClass] = useState<string>('');
  const [homeland, setHomeland] = useState<string>('');

  const { raceOptions, classOptions, homelandOptions } = characterOptions;

  return (
    <>
      <div className="flex justify-center ">
        <form
          action="submit"
          className="grid justify-items-center bg-center bg-cover  bg-no-repeat bg-[url(../public/assets/formbackground.png)] p-10 rounded-xl w-1/2 "
        >
          <div className="grid w-4/5 grid-cols-1 grid-rows-1 p-2 m-3 rounded-lg ">
            <label htmlFor="name" className="mx-3 font-bold ">
              Name
            </label>
            <input
              value={characterName}
              className="p-1 mx-2 mb-4 text-black rounded-lg focus:outline-stone-200 hover:shadow-xl "
              onChange={(e) => setCharacterName(e.target.value)}
              placeholder="Name"
              id="name"
            />

            <label className="mx-3 font-bold " htmlFor="age">
              Age
            </label>
            <input
              value={age}
              className="p-1 mx-2 mb-4 text-black rounded-lg focus:outline-stone-200 hover:shadow-xl"
              onChange={(e) => setAge(Number(e.target.value))}
              placeholder="Age"
              id="age"
            />

            <label className="mx-3 font-bold " htmlFor="race">
              Race
            </label>
            <select
              value={race}
              onChange={(e) => setRace(e.target.value)}
              className="p-1 mx-2 mb-4 font-bold text-black rounded-lg scroll focus:outline-stone-200 hover:shadow-xl"
            >
              <option value="0">Select a Race</option>
              {raceOptions &&
                raceOptions.map((r) => (
                  <>
                    <option>{r.label}</option>
                  </>
                ))}
            </select>

            <label className="mx-3 font-bold ">Class</label>
            <select
              value={characterClass}
              onChange={(e) => setCharacterClass(e.target.value)}
              className="p-1 mx-2 mb-4 font-bold text-black rounded-lg focus:outline-stone-200 hover:shadow-xl"
            >
              <option value="0">Select a Class</option>
              {classOptions &&
                classOptions.map((c) => (
                  <>
                    <option>{c.label}</option>
                  </>
                ))}
            </select>

            <label className="mx-3 font-bold "> Homeland </label>
            <select
              value={homeland}
              onChange={(e) => setHomeland(e.target.value)}
              className="p-1 mx-2 mb-4 font-bold text-black rounded-lg focus:outline-stone-200 hover:shadow-xl"
            >
              <option value="0">Select a Homeland</option>
              {homelandOptions &&
                homelandOptions.map((h) => (
                  <>
                    <option>{h.label}</option>
                  </>
                ))}
            </select>
          </div>
        </form>
      </div>
      <CharacterOriginStory
        contentError={'no content to display'}
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
