import styled from 'styled-components';

export const Container = styled.div`
  padding: 3em 1.5em;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    color: #9caabf;
  }
`;

export const SearchBar = styled.div`
  display: flex;
  align-items: center;

  input {
    flex-grow: 1;
    align-items: center;
    margin-left: 0.5em;

    font-size: 1.2em;
    border: none;
    color: #069db7;
    background-color: transparent;

    &::placeholder {
      opacity: 0.5;
      color: #069db7;
    }
  }

  svg {
    height: 1.2em;
    width: 1.2em;
    opacity: 0.5;
    color: #069db7;
  }
`;
