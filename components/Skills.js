import {
  Container,
  SimpleGrid,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon
} from '@chakra-ui/react';
import { AiFillBug } from 'react-icons/ai';
import { SiStorybook, SiTypescript } from 'react-icons/si';
import Badge from './Badge';

import SkillsGraph from './SkillsGraph';

const Feature = ({ text, icon, iconBg }) => {
  return (
    <Stack direction={'row'} align={'center'}>
      <Flex
        w={8}
        h={8}
        align={'center'}
        justify={'center'}
        rounded={'full'}
        bg={iconBg}
      >
        {icon}
      </Flex>
      <Text color={'gray.900'} fontWeight={600}>
        {text}
      </Text>
    </Stack>
  );
};

export default function Skills() {
  return (
    <Container maxW={'6xl'} p={12}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4}>
          <Badge>Skills</Badge>
          <Heading color={'gray.900'}>
            Technologies I'm comfortable with
          </Heading>
          <Text color={'gray.500'} fontSize={'lg'}>
            Im familiarized with scrum/agile methodology. Besides the
            technologies named in the right, im currently learning:
          </Text>
          <Stack
            spacing={4}
            divider={<StackDivider borderColor={'gray.100'} />}
          >
            <Feature
              icon={<Icon as={SiTypescript} color={'yellow.500'} w={5} h={5} />}
              iconBg={'yellow.100'}
              text={'Typescript'}
            />
            <Feature
              icon={<Icon as={AiFillBug} color={'green.500'} w={5} h={5} />}
              iconBg={'green.100'}
              text={'TDD'}
            />
            <Feature
              icon={<Icon as={SiStorybook} color={'purple.500'} w={5} h={5} />}
              iconBg={'purple.100'}
              text={'Storyblocks'}
            />
          </Stack>
        </Stack>
        <SkillsGraph />
      </SimpleGrid>
    </Container>
  );
}
