import React from 'react';
import { RiCloseLine } from 'react-icons/ri';

import AddNoteForm from '../AddNoteForm';

import { Note } from '../../pages/Main';

import { CloseButton, Modal } from './styles';

const AddNoteModal: React.FC<{
  isOpen: boolean;
  handleClose: () => void;
  handleSubmit(note: Note): void;
}> = ({ isOpen, handleClose, handleSubmit }) => {
  return (
    <Modal isOpen={isOpen}>
      <CloseButton title="Close Modal" onClick={handleClose}>
        <RiCloseLine />
      </CloseButton>

      <AddNoteForm submitNote={handleSubmit} />
    </Modal>
  );
};

Modal.setAppElement('#root');

export default AddNoteModal;
