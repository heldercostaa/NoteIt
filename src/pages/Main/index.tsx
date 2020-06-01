import React, { useState } from 'react';
import { RiAddLine, RiSearch2Line } from 'react-icons/ri';

import NoteCard from '../../components/NoteCard';
import AddNoteModal from '../../components/AddNoteModal';
import { CardContainer } from '../../components/CardContainer';

import { Container, Header, IconButton, SearchBar } from './styles';

interface Note {
  date: string;
  title: string;
  body: string;
  pinned?: boolean;
}

const Main: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [notes] = useState<Note[]>([
    {
      date: '12.02.19',
      title: 'Plants',
      body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, soluta?',
      pinned: true,
    },
    {
      date: '5.03.19',
      title: 'Principle of relativity',
      body:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, iusto. Quidem consequatur nam sint. Quod nulla deserunt, error itaque, distinctio nihil neque molestias et minus dignissimos nesciunt veniam aliquid est.',
    },
    {
      date: '1.03.19',
      title: 'Summer goals',
      body:
        '- Finish my project on lake ecology;\n- Read my book collection on leadership;\n- Make some t-shirt with Green Club logo;',
    },
  ]);

  return (
    <Container>
      <Header>
        <h1>Note It</h1>
        <nav>
          <IconButton>
            <RiAddLine onClick={(): void => setIsModalVisible(!isModalVisible)} />
          </IconButton>
        </nav>
      </Header>

      <CardContainer>
        <SearchBar>
          <RiSearch2Line />
          <input type="text" placeholder="Search" />
        </SearchBar>
      </CardContainer>

      {notes.map((note) => (
        <NoteCard
          key={note.title}
          date={note.date}
          title={note.title}
          body={note.body}
          pinned={note.pinned}
        />
      ))}

      <AddNoteModal
        isOpen={isModalVisible}
        handleClose={(): void => setIsModalVisible(!isModalVisible)}
      >
        Content
      </AddNoteModal>
    </Container>
  );
};

export default Main;
