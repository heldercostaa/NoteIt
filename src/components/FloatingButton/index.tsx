import React from 'react';

import { Button, Content } from './styles';

const FloatingButton: React.FC<{ onClick(): void }> = ({ children, onClick }) => {
  return (
    <Button onClick={onClick}>
      <Content>{children}</Content>
    </Button>
  );
};

export default FloatingButton;
