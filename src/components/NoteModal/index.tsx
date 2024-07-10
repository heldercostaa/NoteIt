import React from 'react';
import { RiCloseLine } from 'react-icons/ri';

import NoteForm from '../NoteForm';

import { Note } from '../../pages/Main';

import { CloseButton, Modal } from './styles';

const NoteModal: React.FC<{
  isOpen: boolean;
  handleClose: () => void;
  handleSubmit(note: Note): void;
  handleDelete(id: string): void;
  editNote?: Note;
}> = ({ isOpen, handleClose, handleSubmit, editNote, handleDelete }) => {
  return (
    <Modal isOpen={isOpen}>
      <CloseButton title="Close Modal" onClick={handleClose}>
        <RiCloseLine />
      </CloseButton>

      <NoteForm submitNote={handleSubmit} deleteNote={handleDelete} editNote={editNote} />
    </Modal>
  );
};

Modal.setAppElement('#root');

export default NoteModal;
