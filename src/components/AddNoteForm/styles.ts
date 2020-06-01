import styled from 'styled-components';

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

export const Form = styled.form``;

export const DateInput = styled.input``;

export const Pin = styled.button<{ pinned: boolean }>``;

export const TitleInput = styled.input``;

export const TextArea = styled.textarea``;
