import React from 'react';
import { RiCloseLine } from 'react-icons/ri';

import NoteForm from '../NoteForm';

import { Note } from '../../pages/Main';

import { CloseButton, Modal } from './styles';

const NoteModal: React.FC<{
  isOpen: boolean;
  handleClose: () => void;
  handleSubmit(note: Note): void;
}> = ({ isOpen, handleClose, handleSubmit }) => {
  return (
    <Modal isOpen={isOpen}>
      <CloseButton title="Close Modal" onClick={handleClose}>
        <RiCloseLine />
      </CloseButton>

      <NoteForm submitNote={handleSubmit} />
    </Modal>
  );
};

Modal.setAppElement('#root');

export default NoteModal;
