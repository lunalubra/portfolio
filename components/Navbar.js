import { HStack, Link, Flex } from '@chakra-ui/layout';
import { Button } from '@chakra-ui/button';
import Image from 'next/image';
import ContactModal from './ContactButton';

const Links = ['Portfolio', 'Skills', 'Hobbies'];

const NavLink = ({ children }) => (
  <Link
    as="a"
    px={2}
    py={1}
    href={`#${children.toLowerCase()}`}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: 'gray.200'
    }}
  >
    {children}
  </Link>
);

const Navbar = () => {
  return (
    <Flex
      as="header"
      minW="100vw"
      justifyContent="center"
      zIndex="999"
      position="sticky"
      top={0}
      css={{ backdropFilter: 'saturate(180%) blur(20px)' }}
    >
      <Flex
        maxW="1250px"
        w="100%"
        justifyContent="space-between"
        alignItems="center"
        my={2}
        mx={4}
      >
        <Flex alignItems="center">
          <Button
            as="a"
            href="#"
            minH="50px"
            padding="5px"
            bg="none"
            _hover={{
              opacity: '0.9'
            }}
            _active={{
              opacity: '0.75',
              transform: 'scale(0.9)'
            }}
          >
            <Image width={40} height={40} src="/logo.png" />
          </Button>
          <HStack
            ml="20px"
            as={'nav'}
            spacing={4}
            display={{ base: 'none', md: 'flex' }}
          >
            {Links.map((link) => (
              <NavLink key={link}>{link}</NavLink>
            ))}
          </HStack>
        </Flex>
        <ContactModal />
      </Flex>
    </Flex>
  );
};

export default Navbar;
