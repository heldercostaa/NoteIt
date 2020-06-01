import React from 'react';
import { RiCloseLine } from 'react-icons/ri';
import ReactModal from 'react-modal';

import { CloseButton } from './styles';

const Modal: React.FC<{ isOpen: boolean; handleClose: () => void }> = ({
  children,
  isOpen,
  handleClose,
}) => {
  return (
    <ReactModal isOpen={isOpen}>
      <CloseButton title="Close Modal" onClick={handleClose}>
        <RiCloseLine />
      </CloseButton>
      {children}
    </ReactModal>
  );
};

export default Modal;
