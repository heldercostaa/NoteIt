import styled from 'styled-components';

export const Content = styled.div`
  cursor: pointer;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #9caabf;

    svg {
      color: #9caabf;
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
    -webkit-line-clamp: 8;
    -webkit-box-orient: vertical;
  }
`;
