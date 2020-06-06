import React, { useState, FormEvent } from 'react';
import { RiPushpinLine } from 'react-icons/ri';

import CardContainer from '../CardContainer';

import { Note } from '../../pages/Main';

import { Form, DateStyle, Pin, TitleInput, TextArea, AddButton } from './styles';

function formatToday(): string {
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  const today = new Date();

  const month = months[today.getMonth()];
  const day = today.getDate();
  const year = today.getFullYear();

  return `${month} ${day}, ${year}`;
}

const AddNoteForm: React.FC<{ submitNote(note: Note): void }> = ({ submitNote }) => {
  const [note, setNote] = useState<Note>({ date: formatToday() } as Note);

  function handlePinned(): void {
    setNote({ ...note, pinned: !note.pinned });
  }

  function handleTitle(title: string): void {
    setNote({ ...note, title });
  }

  function handleBody(body: string): void {
    setNote({ ...note, body });
  }

  function handleSubmit(e: FormEvent): void {
    e.preventDefault();

    submitNote(note);
  }

  return (
    <CardContainer>
      <Form onSubmit={handleSubmit}>
        <header>
          <DateStyle>{note.date}</DateStyle>

          <Pin pinned={note.pinned} type="button" onClick={handlePinned}>
            <RiPushpinLine />
          </Pin>
        </header>

        <TitleInput
          type="text"
          placeholder="Amazing story"
          onBlur={({ target: { value } }): void => handleTitle(value)}
        />

        <TextArea
          placeholder="Once upon a time, in a land far, far away..."
          onBlur={({ target: { value } }): void => handleBody(value)}
        />

        <AddButton>Add</AddButton>
      </Form>
    </CardContainer>
  );
};

export default AddNoteForm;
