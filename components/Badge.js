import { Text } from '@chakra-ui/layout';
import React from 'react';

const Badge = ({ children }) => {
  return (
    <Text
      textTransform={'uppercase'}
      color={'blue.400'}
      fontFamily={'Caveat'}
      fontWeight="bold"
      fontSize={'lg'}
      bg={'blue.50'}
      p={2}
      alignSelf={'flex-start'}
      rounded={'md'}
    >
      {children}
    </Text>
  );
};

export default Badge;
