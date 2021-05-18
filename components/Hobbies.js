import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Icon,
  Text,
  Stack,
  HStack,
  VStack,
  Flex
} from '@chakra-ui/react';
import {
  FaCamera,
  FaChalkboardTeacher,
  FaCubes,
  FaDog,
  FaGamepad,
  FaGuitar
} from 'react-icons/fa';
import Badge from './Badge';

const Hobbie = ({ bgColor, color, icon, title, description }) => {
  return (
    <HStack align={'top'}>
      <Flex
        minW={8}
        h={8}
        align={'center'}
        justify={'center'}
        rounded={'full'}
        bg={bgColor}
      >
        <Icon color={color} as={icon} />
      </Flex>
      <VStack align={'start'}>
        <Text fontWeight={600}>{title}</Text>
        <Text color={'gray.600'}>{description}</Text>
      </VStack>
    </HStack>
  );
};

export default function Hobbies() {
  return (
    <Box my="96px" p={4}>
      <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
        <Badge>Hobbies</Badge>
        <Heading fontSize={'3xl'}>What i like to do in my free time!</Heading>
        <Text color={'gray.600'} fontSize={'xl'}>
          Althoug i love coding, i also think is important to have hobbies to
          help your self go out the routine and clear your mind. Some of them
          are:
        </Text>
      </Stack>
      <Container maxW={'6xl'} mt={10}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
          <Hobbie
            bgColor="red.100"
            color="red.400"
            icon={FaGuitar}
            title="Music | Ukelele"
            description="Im learning to play the Ukelele! I have always wanted too jaja, althoug im not as good as it can seems"
          />
          <Hobbie
            bgColor="blue.100"
            color="blue.400"
            icon={FaGamepad}
            title="Games"
            description="Gaming in the weekends its one of my favourite things to do! I like games any kind of games"
          />
          <Hobbie
            bgColor="green.100"
            color="green.400"
            icon={FaCubes}
            title="3D | Blender art"
            description="3D art is something i really like! Im currently learning the core concepts of UV mapping on blender"
          />
          <Hobbie
            bgColor="yellow.100"
            color="yellow.400"
            icon={FaDog}
            title="Animals"
            description="Currently coliving with 2 dogs and 1 cat! I really love spending time with them jaja"
          />
          <Hobbie
            bgColor="orange.100"
            color="orange.400"
            icon={FaCamera}
            title="Photography"
            description="Some times i like to go on a trip and start taking photos! and when im at home, my cat is my model"
          />
          <Hobbie
            bgColor="purple.100"
            color="purple.400"
            icon={FaChalkboardTeacher}
            title="Helping others"
            description="By helping others, i have earned alot of friends and contacts in this community! Thats why im never stoping to do it"
          />
        </SimpleGrid>
      </Container>
    </Box>
  );
}
