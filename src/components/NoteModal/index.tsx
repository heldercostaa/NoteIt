import React from 'react';
import { RiCloseLine } from 'react-icons/ri';

import NoteForm from '../NoteForm';

import { Note } from '../../pages/Main';

import { CloseButton, Modal } from './styles';

const NoteModal: React.FC<{
  isOpen: boolean;
  handleClose: () => void;
  handleSubmit(note: Note): void;
  editNote?: Note;
}> = ({ isOpen, handleClose, handleSubmit, editNote }) => {
  return (
    <Modal isOpen={isOpen}>
      <CloseButton title="Close Modal" onClick={handleClose}>
        <RiCloseLine />
      </CloseButton>

      <NoteForm submitNote={handleSubmit} editNote={editNote} />
    </Modal>
  );
};

Modal.setAppElement('#root');

export default NoteModal;
