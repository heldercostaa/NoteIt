import styled from 'styled-components';

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
  position: relative;

  width: 80%;
  height: 90%;

  border: 1px solid #d8dce3;
  border-radius: 3px;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.5);

  background-color: #fdfdfe;
`;

export const CloseButton = styled.button.attrs((props) => ({
  type: 'button',
  title: props.title,
}))`
  position: absolute;
  top: 1rem;
  right: 1rem;

  padding: 0;
  margin: 0;

  border: none;
  background: transparent;

  cursor: pointer;

  svg {
    width: 1.5rem;
    height: 1.5rem;
  }
`;
