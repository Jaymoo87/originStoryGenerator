import React, { useState } from 'react';

import Link from 'next/link';

import { Editor } from '@tiptap/react';

import { RocketLaunchIcon } from '@heroicons/react/24/solid';
import { SiOpenai } from 'react-icons/si';

type Props = {
  editor: Editor | null;
  setCharacter: (character: string) => void;
  characterName: string;
  age: number;
  race: string;
  characterClass: string;
  homeland: string;
};

const CharacterOriginStory = ({ editor, setCharacter, characterName, age, race, characterClass, homeland }: Props) => {
  const [role, setRole] = useState<string>('I am a dungeon master that loves origin stories.');

  if (!editor) return null;
  const postAiContent = async () => {
    editor.chain().focus().setContent('Generating AI Content. Wait a Moment...').run();

    const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/openai`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        characterName,
        age,
        race,
        characterClass,
        homeland,
        role,
      }),
    });
    const data = await response.json();

    editor.chain().focus().setContent(data.content).run();
    setCharacter(data.content);
  };

  return (
    <div className="p-3 mb-3 border-2 rounded-md bg-wh-50">
      <h4 className="flex justify-between p-0 m-0 mb-2">Hi! Adjust My Attitude If You Need To</h4>
      <div className="flex gap-5 justify-betweeen">
        <input
          placeholder="Role"
          onChange={(e) => setRole(e.target.value)}
          value={role}
          className="w-full px-3 py-1 border-2 rounded-md bg-wh-50"
        />
        <button type="button" onClick={postAiContent}>
          <RocketLaunchIcon className="w-8 h-8 text-accent-orange hover:text-wh-300" />
        </button>
      </div>
      <span className="flex justify-start p-0 mt-3 text-sm">
        powered by{' '}
        <Link href="https://openai.com/">
          {' '}
          <SiOpenai className="mx-2 mt-1" />
        </Link>
      </span>
    </div>
  );
};

export default CharacterOriginStory;
