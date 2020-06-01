import React from 'react';
import { RiAddLine, RiSearch2Line } from 'react-icons/ri';

import NoteCard from '../../components/NoteCard';

import { CardContainer } from '../../components/CardContainer';
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

      <CardContainer>
        <SearchBar>
          <RiSearch2Line />
          <input type="text" placeholder="Search" />
        </SearchBar>
      </CardContainer>

      <NoteCard
        date="12.02.19"
        title="Plants"
        body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, soluta?"
        pinned
      />

      <NoteCard
        date="12.02.19"
        title="Plants"
        body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem officiis placeat eos sapiente cupiditate ab. Id nesciunt nemo deserunt culpa nobis esse inventore laborum vel ratione! Praesentium quaerat impedit earum!"
      />
    </Container>
  );
};

export default Main;
