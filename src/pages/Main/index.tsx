import React from 'react';
import { RiAddLine, RiSearch2Line } from 'react-icons/ri';

import NoteCard from '../../components/NoteCard';

import { Container, Header, IconButton, SearchBar } from './styles';

const Main: React.FC = () => {
  return (
    <Container>
      <Header>
        <h1>Note It</h1>
        <nav>
          <IconButton>
            <RiAddLine />
          </IconButton>
        </nav>
      </Header>

      <SearchBar>
        <RiSearch2Line />
        <input type="text" placeholder="Search" />
      </SearchBar>

      <NoteCard
        date="12.02.19"
        title="Plants"
        body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, soluta?"
        pinned
      />
    </Container>
  );
};

export default Main;
