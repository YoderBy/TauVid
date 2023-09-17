// RefreshButton.tsx

import React from 'react';
import { Button } from '@chakra-ui/react';

interface Props {
  onRefresh: () => void;
}

const RefreshButton: React.FC<Props> = ({ onRefresh }) => {
  return (
    <Button colorScheme="blue" onClick={onRefresh}>
      Refresh Videos
    </Button>
  );
};

export default RefreshButton;
