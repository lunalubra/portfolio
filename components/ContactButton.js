import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  useDisclosure,
  Button,
  Icon,
  Stack,
  Tooltip
} from '@chakra-ui/react';
import { AiFillGithub } from 'react-icons/ai';
import { FaTwitter } from 'react-icons/fa';
import { SiGmail, SiLinkedin } from 'react-icons/si';
import { HiDocument } from 'react-icons/hi';

const ContactModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        fontFamily={'heading'}
        bgGradient="linear(to-r, red.400,pink.400)"
        color={'white'}
        _hover={{
          opacity: '0.9',
          boxShadow: 'xl'
        }}
        _active={{
          opacity: '0.75',
          transform: 'scale(0.9)'
        }}
        onClick={onOpen}
      >
        Contact me
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} isCenteredy>
        <ModalOverlay />
        <ModalContent>
          <ModalBody bgImage="url('/gradient_4.png')">
            <Stack my={5} spacing="5">
              <Button
                as="a"
                maxW={'md'}
                href="https://github.com/LunacTec"
                target="_blank"
                onClick={onClose}
                bg="black"
                color="white"
                leftIcon={<Icon py={2} w={10} height={10} as={AiFillGithub} />}
                _hover={{
                  opacity: '0.9'
                }}
                _active={{
                  opacity: '0.75',
                  transform: 'scale(0.9)'
                }}
              >
                Github
              </Button>
              <Button
                as="a"
                maxW={'md'}
                href="https://twitter.com/lunactec"
                target="_blank"
                onClick={onClose}
                colorScheme={'twitter'}
                leftIcon={<Icon py={2} w={10} height={10} as={FaTwitter} />}
                _hover={{
                  opacity: '0.9'
                }}
                _active={{
                  opacity: '0.75',
                  transform: 'scale(0.9)'
                }}
              >
                Twitter
              </Button>
              <Button
                as="a"
                maxW={'md'}
                href="https://www.linkedin.com/in/lucas-acosta-bravo/"
                target="_blank"
                onClick={onClose}
                colorScheme={'messenger'}
                leftIcon={<SiLinkedin />}
                _hover={{
                  opacity: '0.9'
                }}
                _active={{
                  opacity: '0.75',
                  transform: 'scale(0.9)'
                }}
              >
                Linkedin
              </Button>
              <Tooltip label="lucas2002luna@gmail.com">
                <Button
                  as="a"
                  maxW={'md'}
                  href="mailto:lucas2002luna@gmail.com?subject=<Te%20contacto%20por%20...>"
                  target="_blank"
                  onClick={onClose}
                  colorScheme={'red'}
                  leftIcon={<SiGmail />}
                  _hover={{
                    opacity: '0.9'
                  }}
                  _active={{
                    opacity: '0.75',
                    transform: 'scale(0.9)'
                  }}
                >
                  Gmail
                </Button>
              </Tooltip>
              <Button
                as="a"
                maxW={'md'}
                href="/LucasAcostaFrontendDeveloper.pdf"
                target="_blank"
                onClick={onClose}
                colorScheme={'green'}
                leftIcon={<HiDocument />}
                _hover={{
                  opacity: '0.9'
                }}
                _active={{
                  opacity: '0.75',
                  transform: 'scale(0.9)'
                }}
              >
                Curriculum Vitae
              </Button>
            </Stack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ContactModal;
