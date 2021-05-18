import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Text,
  Flex,
  Icon,
  Badge,
  Stack,
  Divider,
  Link,
  SimpleGrid
} from '@chakra-ui/react';
import { Button } from '@chakra-ui/button';
import Carousel from './Carousel';
import { AiFillGithub } from 'react-icons/ai';
import Image from 'next/image';

const ProjectModal = ({
  media,
  title,
  bgColor = 'black',
  tags,
  howTo,
  description,
  githubLink,
  webLink,
  links
}) => {
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
        Learn more!
      </Button>

      <Modal
        isOpen={isOpen}
        onClose={onClose}
        scrollBehavior="inside"
        size="4xl"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader
            fontSize="2xl"
            textAlign="center"
            bg={bgColor}
            color="white"
            roundedTop="6"
          >
            {title || 'Modal Title'}
          </ModalHeader>
          <ModalCloseButton color="white" mt={2} mr={1} />
          <ModalBody>
            <Flex direction="column">
              <Carousel slides={media} />
              <Flex mx={12} direction="row" wrap="wrap">
                {tags.map((tag, i) => (
                  <Badge
                    key={tag.text}
                    variant="subtle"
                    colorScheme={tag.color}
                  >
                    {tag.text}
                  </Badge>
                ))}
              </Flex>
              <Flex mx={12} mt={5} direction="column">
                <Text fontWeight="semibold" fontSize="lg">
                  About the project
                </Text>
                <Text>{description}</Text>
                {howTo && (
                  <>
                    <Divider my={6} />
                    <Text fontWeight="semibold" fontSize="lg">
                      How to use it
                    </Text>
                    <Text>{howTo}</Text>
                  </>
                )}
                {links && (
                  <>
                    <Divider my={6} />
                    <Text fontWeight="semibold" fontSize="lg">
                      Links
                    </Text>
                    {links.map((link) => (
                      <Flex key={link.text}>
                        <Link href={link.href} target="_blank" color="blue.400">
                          {link.text}
                        </Link>
                      </Flex>
                    ))}
                  </>
                )}
              </Flex>
            </Flex>
          </ModalBody>
          <ModalFooter>
            <Button
              as="a"
              pl="5px"
              href={githubLink}
              target="_blank"
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
              pl="10px"
              ml={2}
              href={webLink}
              target="_blank"
              leftIcon={<Image width={30} height={30} src="/logo.png" />}
              _hover={{
                opacity: '0.9'
              }}
              _active={{
                opacity: '0.75',
                transform: 'scale(0.9)'
              }}
            >
              Website
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ProjectModal;
