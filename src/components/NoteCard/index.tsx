import React from 'react';
import { RiPushpinLine } from 'react-icons/ri';

import { CardContainer } from '../CardContainer';

import { Note } from './styles';

const NoteCard: React.FC<{ date: string; title: string; body: string; pinned?: boolean }> = ({
  date,
  title,
  body,
  pinned,
}) => {
  return (
    <CardContainer>
      <Note>
        <header>
          <span>{date}</span>
          {pinned && <RiPushpinLine />}
        </header>
        <h2>{title}</h2>
        <p>{body}</p>
      </Note>
    </CardContainer>
  );
};

export default NoteCard;
