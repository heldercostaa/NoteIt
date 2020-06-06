import React from 'react';
import { RiPushpinLine } from 'react-icons/ri';

import CardContainer from '../CardContainer';
import { Note } from '../../pages/Main';

import { Content } from './styles';

const NoteCard: React.FC<{ note: Note; handleEdit?(): void }> = ({ note, handleEdit }) => {
  return (
    <CardContainer>
      <Content onClick={handleEdit}>
        <header>
          <span>{note.date}</span>
          {note.pinned && <RiPushpinLine />}
        </header>
        <h2>{note.title}</h2>
        <p>{note.body}</p>
      </Content>
    </CardContainer>
  );
};

export default NoteCard;
