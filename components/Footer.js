import { Box, Button, Container, Link, Stack, Text } from '@chakra-ui/react';
import Image from 'next/image';
import ContactModal from './ContactButton';

export default function Footer() {
  return (
    <Box bg={'gray.50'} color={'gray.700'}>
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}
      >
        <Button
          as="a"
          href="#"
          minH="50px"
          padding="5px"
          bg="none"
          _hover={{ opacity: '0.9' }}
          _active={{
            opacity: '0.75',
            transform: 'scale(0.9)'
          }}
        >
          <Image width={40} height={40} src="/logo.png" />
        </Button>
        <Text>© 2021 Lucas Acosta. All rights reserved</Text>

        <Stack direction={'row'} alignItems="center" spacing={6}>
          <Link href={'#portfolio'}>Portfolio</Link>
          <Link href={'#skills'}>Skills</Link>
          <Link href={'#hobbies'}>Hobbies</Link>
          <ContactModal />
        </Stack>
      </Container>
    </Box>
  );
}
