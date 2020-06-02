import React from 'react';
import { RiCloseLine } from 'react-icons/ri';

import AddNoteForm from '../AddNoteForm';

import { CloseButton, Modal } from './styles';

const AddNoteModal: React.FC<{ isOpen: boolean; handleClose: () => void }> = ({
  isOpen,
  handleClose,
}) => {
  return (
    <Modal isOpen={isOpen}>
      <CloseButton title="Close Modal" onClick={handleClose}>
        <RiCloseLine />
      </CloseButton>

      <AddNoteForm />
    </Modal>
  );
};

export default AddNoteModal;
