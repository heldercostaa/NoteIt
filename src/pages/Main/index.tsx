import React from 'react';
import { RiAddLine, RiSearch2Line } from 'react-icons/ri';

import NoteCard from '../../components/NoteCard';

// import { Container } from './styles';

const Main: React.FC = () => {
  return (
    <div>
      <header>
        <h1>Note It</h1>
        <nav>
          <RiAddLine size={14} />
        </nav>
      </header>

      <div>
        <RiSearch2Line size={12} />
        <input type="text" placeholder="Search" />
      </div>

      <NoteCard
        date="12.02.19"
        title="Plants"
        body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, soluta?"
        pinned
      />
    </div>
  );
};

export default Main;
