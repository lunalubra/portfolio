import { Box, ChakraProvider } from '@chakra-ui/react';
import Sky from 'react-sky';

import theme from '../styles/theme';
import Navbar from '../components/Navbar';
import { useEffect, useState } from 'react';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (window) {
      setHeight(window.innerHeight - 66);
    }
  }, []);

  return (
    <>
      <Head>
        <title>Lucas Acosta | Frontend developer</title>
      </Head>
      <ChakraProvider resetCSS theme={theme}>
        <Navbar />
        <Box position="relative" bg="white">
          <Box position="relative">
            <Box w="100vw" h={height} position="absolute" zIndex="1">
              <Sky
                images={{
                  0: '/gradient_1.png',
                  1: '/gradient_2.png',
                  2: '/gradient_3.png',
                  3: '/gradient_4.png'
                }}
                how={15}
                time={75}
                size={'500px'}
                background={'palettedvioletred'}
              />
            </Box>
            <Box position="relative" zIndex="2">
              <Component {...pageProps} />
            </Box>
          </Box>
        </Box>
      </ChakraProvider>
    </>
  );
}

export default MyApp;
