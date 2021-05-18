import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false
  },
  fonts: {
    heading: 'Work Sans',
    body: 'Work Sans'
  }
});

export default theme;
