/* eslint-disable @typescript-eslint/explicit-function-return-type */
import styled from 'styled-components';
import TextareaAutosize from 'react-autosize-textarea';

export const Note = styled.div`
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #9caabf;

    svg {
      color: #9caabf;
      opacity: 0.5;
      width: 1.5em;
      height: 1.5em;
    }
  }

  h2 {
    color: #31456a;
    margin: 0.2em 0 0.4em 0;
  }

  p {
    color: #576785;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }
`;

export const Form = styled.form`
  button {
    background: none;
    border: none;
  }

  input {
    border: none;
    flex-grow: 1;
    background: none;

    &::placeholder {
      opacity: 0.5;
    }
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #9caabf;
  }
`;

export const DateInput = styled.input`
  color: #9caabf;
`;

export const Pin = styled.button<{ pinned: boolean }>`
  svg {
    opacity: ${({ pinned }) => (pinned ? '1' : '0.5')};
    color: #9caabf;
    width: 1.5em;
    height: 1.5em;

    &:hover {
      opacity: 1;
    }
  }
`;

export const TitleInput = styled.input`
  color: #31456a;
  font-size: 1.5em;
  font-weight: bold;
  margin: 0.2em 0 0.4em 0;
`;

export const TextArea = styled(TextareaAutosize)`
  color: #576785;
  font-family: inherit;
  width: 100%;
  height: 10vh;
  outline: none;
  border: none;
  background: none;
  resize: none;

  &::placeholder {
    opacity: 0.5;
  }
`;