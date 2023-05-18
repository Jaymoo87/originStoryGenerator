import React from 'react';
import Character from './(home)/Character';
import CharacterOriginStory from './(shared)/CharacterOriginStory';
import { Editor } from '@tiptap/react';

type Props = {
  editor: Editor | null;
  setContent: (content: string) => void;
  content: string;
  characterName: string;
  age: number;
  race: string;
  characterClass: string;
  homeland: string;
};

const Home = ({ editor, content, characterClass, characterName, age, homeland, race, setContent }: Props) => {
  return (
    <div className="h-screen">
      <Character
        editor={editor}
        content={content}
        characterClass={characterClass}
        characterName={characterName}
        age={age}
        homeland={homeland}
        race={race}
        setContent={setContent}
      />
    </div>
  );
};

export default Home;
