import React from 'react';
import { RiPushpinLine } from 'react-icons/ri';

import CardContainer from '../CardContainer';
import { Note } from '../../pages/Main';

import { Card, Content } from './styles';

const NoteCard: React.FC<{ note: Note; handleEdit?(): void }> = ({ note, handleEdit }) => {
  return (
    <Card onClick={handleEdit}>
      <CardContainer>
        <Content>
          <header>
            <span>{note.formatedDate}</span>
            {note.pinned && <RiPushpinLine />}
          </header>
          <h2>{note.title}</h2>
          <p>{note.body}</p>
        </Content>
      </CardContainer>
    </Card>
  );
};

export default NoteCard;
