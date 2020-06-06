import styled from 'styled-components';

export const Button = styled.button.attrs({
  type: 'button',
})`
  background: #f9f9f9;
  border: 0;
  border-radius: 50%;
  border: 1.25px solid #fff;
  box-shadow: 10px 10px 20px #e0e5e9, -10px -10px 20px #f6f6f6;

  height: 3.5rem;
  width: 3.5rem;

  position: fixed;
  bottom: 2rem;
  right: 2rem;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    color: #069db7;
    width: 2rem;
    height: 2rem;
  }
`;
