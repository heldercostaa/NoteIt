import React, { useState, FormEvent } from 'react';
import { RiPushpinLine } from 'react-icons/ri';
import { v4 as uuid } from 'uuid';

import CardContainer from '../CardContainer';

import { Note } from '../../pages/Main';

import dateHelper from '../../helpers/DateHelper';

import {
  Form,
  DateStyle,
  Pin,
  TitleInput,
  TextArea,
  Button,
  DeleteButton,
  ButtonsContainer,
} from './styles';

const NoteForm: React.FC<{
  submitNote(note: Note): void;
  editNote?: Note;
  deleteNote(id: string): void;
}> = ({ submitNote, editNote, deleteNote }) => {
  const [note, setNote] = useState<Note>({
    ...(editNote || {
      id: uuid(),
      pinned: false,
      title: '',
      body: '',
      date: Date.now(),
      formatedDate: '',
    }),
  });

  if (!note.id) setNote({ ...note, id: uuid() });
  if (note.pinned === undefined) setNote({ ...note, pinned: false });

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

    submitNote({ ...note, date: Date.now(), formatedDate: dateHelper.formatNow() });
  }

  function handleDelete(): void {
    if (editNote?.id) deleteNote(editNote.id);
  }

  return (
    <CardContainer>
      <Form onSubmit={handleSubmit}>
        <header>
          <DateStyle>{note.formatedDate}</DateStyle>

          <Pin pinned={note.pinned} type="button" onClick={handlePinned}>
            <RiPushpinLine />
          </Pin>
        </header>

        <TitleInput
          type="text"
          placeholder="Amazing story"
          defaultValue={editNote?.title}
          onBlur={({ target: { value } }): void => handleTitle(value)}
        />

        <TextArea
          placeholder="Once upon a time, in a land far, far away..."
          defaultValue={editNote?.body}
          onBlur={({ target: { value } }): void => handleBody(value)}
        />

        <ButtonsContainer>
          {editNote && <DeleteButton onClick={handleDelete}>Delete</DeleteButton>}
          <Button>{editNote ? 'Save' : 'Add'}</Button>
        </ButtonsContainer>
      </Form>
    </CardContainer>
  );
};

export default NoteForm;
