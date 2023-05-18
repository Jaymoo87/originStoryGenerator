import React, { useState } from 'react';

import Link from 'next/link';

import { Editor, useEditor } from '@tiptap/react';

import { RocketLaunchIcon } from '@heroicons/react/24/solid';
import { SiOpenai } from 'react-icons/si';
import StarterKit from '@tiptap/starter-kit';

type Props = {
  content: string;
  characterName: string;
  age: number;
  race: string;
  characterClass: string;
  homeland: string;
};

const CharacterOriginStory = ({ characterName, age, race, characterClass, homeland }: Props) => {
  const [role, setRole] = useState<string>('I am a dungeon master that loves origin stories.');
  const [content, setContent] = useState<string>('');

  const editor = useEditor({
    extensions: [StarterKit],
    content,
    editorProps: {
      attributes: {
        class: 'prose prose-sm xl:prose-2xl focus:outline-none w-full max-w-full shadow-md shadow-lg p-4 rounded-md',
      },
    },
  });

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
        content,
      }),
    });
    const data = await response.json();

    editor.chain().focus().setContent(data.content).run();
    setContent(data.content);
  };

  return (
    <div className="p-3 mb-3 rounded-md ">
      <h4 className="flex justify-center p-0 m-0 mb-2">Hi! Adjust My Attitude If You Need To</h4>
      <small className="flex justify-center">(tell the origin story creator how you would like it to act)</small>
      <div className="flex justify-center gap-5">
        <input
          placeholder="Role"
          onChange={(e) => setRole(e.target.value)}
          value={role}
          className="w-1/3 px-3 py-1 text-center text-black border-2 "
        />
        <button type="button" onClick={postAiContent}>
          <RocketLaunchIcon className="w-8 h-8 text-accent-orange hover:text-wh-300" />
        </button>
      </div>
      <span className="flex justify-center p-0 mt-3 text-sm">
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
