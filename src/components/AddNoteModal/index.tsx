import React from 'react';
import { RiCloseLine } from 'react-icons/ri';
import ReactModal from 'react-modal';

import AddNoteForm from '../AddNoteForm';

import { CloseButton } from './styles';

const AddNoteModal: React.FC<{ isOpen: boolean; handleClose: () => void }> = ({
  isOpen,
  handleClose,
}) => {
  return (
    <ReactModal isOpen={isOpen}>
      <CloseButton title="Close Modal" onClick={handleClose}>
        <RiCloseLine />
      </CloseButton>

      <AddNoteForm />
    </ReactModal>
  );
};

export default AddNoteModal;
