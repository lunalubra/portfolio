import { ColorModeScript } from '@chakra-ui/color-mode';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import theme from '../styles/theme';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="shorcut icon" href="/logo.png" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;600;700;800&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;600;700;800&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
