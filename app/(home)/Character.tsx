'use client';
import React, { useState } from 'react';

import Select from 'react-select';
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

const Character = ({ content, editor, setContent }: Props) => {
  const [fieldError, setFieldError] = useState<string>('');

  const [characterName, setCharacterName] = useState<string>('');
  const [age, setAge] = useState<number>(0);
  const [race, setRace] = useState<string>('');
  const [characterClass, setCharacterClass] = useState<string>('');
  const [homeland, setHomeland] = useState<string>('');

  const { raceOptions, classOptions, homelandOptions } = characterOptions;

  const submitCharacterData = () => {};
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (characterName === '' || age === null || race === '' || characterClass === '' || homeland === '')
      setFieldError('All Fields Are Required');

    if (editor?.isEmpty) return;

    const response = await fetch(`${process.env.NEXT_PUBLIC_URL}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        age,
        race,
        characterName,
        characterClass,
        homeland,
        content: content,
      }),
    });
    const data = await response.json();

    setContent(data.content);
    editor?.commands.setContent(data.content);
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
          <Select
            options={raceOptions}
            onChange={(e) => setRace(raceOptions.value)}
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
