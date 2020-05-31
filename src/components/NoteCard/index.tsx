import React from 'react';
import { RiPushpinLine } from 'react-icons/ri';

// import { Container } from './styles';

const NoteCard: React.FC<{ date: string; title: string; body: string; pinned?: boolean }> = ({
  date,
  title,
  body,
}) => {
  return (
    <div>
      <span>{date}</span>
      <RiPushpinLine size={14} />
      <h2>{title}</h2>
      <p>{body}</p>
    </div>
  );
};

export default NoteCard;
