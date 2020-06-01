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

export const IconButton = styled.button.attrs({
  type: 'button',
})`
  background: #f9f9f9;
  border: 0;
  padding: 0.5em;
  border-radius: 50%;
  border: 1.25px solid #fff;
  box-shadow: 10px 10px 20px #e0e5e9, -10px -10px 20px #f6f6f6;

  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    color: #069db7;
    width: 2em;
    height: 2em;
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
