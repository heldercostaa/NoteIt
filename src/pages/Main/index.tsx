import React, { useState } from 'react';
import { RiAddLine, RiSearch2Line } from 'react-icons/ri';

import NoteCard from '../../components/NoteCard';
import NoteModal from '../../components/NoteModal';
import FloatingButton from '../../components/FloatingButton';
import CardContainer from '../../components/CardContainer';

import { Container, Header, SearchBar } from './styles';

export interface Note {
  date: string;
  title: string;
  body: string;
  pinned?: boolean;
}

const Main: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(true);
  const [selectedNote, setSelectedNote] = useState<Note | undefined>(undefined);

  const [notes, setNotes] = useState<Note[]>([
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

  function handleSubmit(note: Note): void {
    setNotes([...notes, note]);

    setIsModalVisible(false);
    setSelectedNote(undefined);
  }

  function handleEdit(note: Note): void {
    setIsModalVisible(true);
    setSelectedNote(note);
  }

  return (
    <Container>
      <FloatingButton onClick={(): void => setIsModalVisible(!isModalVisible)}>
        <RiAddLine />
      </FloatingButton>

      <Header>
        <h1>Note It</h1>
      </Header>

      <CardContainer>
        <SearchBar>
          <RiSearch2Line />
          <input type="text" placeholder="Search" />
        </SearchBar>
      </CardContainer>

      {notes.map((note) => (
        <NoteCard key={note.title} note={note} handleEdit={(): void => handleEdit(note)} />
      ))}

      <NoteModal
        isOpen={isModalVisible}
        handleClose={(): void => setIsModalVisible(!isModalVisible)}
        handleSubmit={handleSubmit}
        editNote={selectedNote}
      >
        Content
      </NoteModal>
    </Container>
  );
};

export default Main;
