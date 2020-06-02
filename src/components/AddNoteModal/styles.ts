import styled from 'styled-components';

import ReactModal from 'react-modal';

export const Container = styled.div.attrs({ role: 'dialog', 'aria-modal': true })`
  z-index: 999;
  position: absolute;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: rgba(255, 255, 255, 0.7);
`;

export const Content = styled.div`
  width: 80%;
  height: 90%;

  border: 1px solid #d8dce3;
  border-radius: 3px;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.5);

  background-color: #fdfdfe;
`;

if (ReactModal.defaultStyles.overlay?.backgroundColor)
  ReactModal.defaultStyles.overlay.backgroundColor = 'rgba(246, 246, 246, 0.84)';
export const CloseButton = styled.button.attrs((props) => ({
  type: 'button',
  title: props.title,
}))`
  display: flex;
  justify-content: flex-end;
  width: 100%;

  margin: 0 0 -1em -1em;

  border: none;
  background: transparent;

  cursor: pointer;

  svg {
    width: 1.5rem;
    height: 1.5rem;
  }
`;

export const Modal = styled(ReactModal)`
  width: 95%;

  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);

  .overlay {
    background-color: red;
  }
`;
