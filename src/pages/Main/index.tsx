import React, { useState, useEffect } from 'react';
import { RiAddLine, RiSearch2Line } from 'react-icons/ri';

import NoteCard from '../../components/NoteCard';
import NoteModal from '../../components/NoteModal';
import FloatingButton from '../../components/FloatingButton';
import CardContainer from '../../components/CardContainer';

import dateHelper from '../../helpers/DateHelper';

import { Container, Header, SearchBar } from './styles';

export interface Note {
  id: string;
  date: Date;
  formatedDate: string;
  title: string;
  body: string;
  pinned: boolean;
}

const Main: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedNote, setSelectedNote] = useState<Note | undefined>(undefined);

  const [notes, setNotes] = useState<Note[]>([]);

  useEffect(() => {
    const storedNotes = localStorage.getItem('notes');

    if (storedNotes) {
      setNotes(JSON.parse(storedNotes));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  function handleClose(): void {
    setIsModalVisible(false);
    setSelectedNote(undefined);
  }

  function handleSubmit(note: Note): void {
    const today = new Date();
    const newNote = { ...note, date: today, formatedDate: dateHelper.formatDate(today) };

    const updatedNotes = notes.filter((n) => n.id !== newNote.id);
    setNotes([...updatedNotes, newNote]);

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

      {notes
        .slice()
        .sort(
          // First order by pinned then by date
          (n1, n2) => Number(n2.pinned) - Number(n1.pinned) || Number(n2.date) - Number(n1.date),
        )
        .map((note) => (
          <NoteCard key={note.id} note={note} handleEdit={(): void => handleEdit(note)} />
        ))}

      <NoteModal
        isOpen={isModalVisible}
        handleClose={handleClose}
        handleSubmit={handleSubmit}
        editNote={selectedNote}
      >
        Content
      </NoteModal>
    </Container>
  );
};

export default Main;
