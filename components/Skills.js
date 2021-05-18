import {
  Container,
  SimpleGrid,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
  useColorModeValue
} from '@chakra-ui/react';
import { AiFillBug } from 'react-icons/ai';
import {
  IoAnalyticsSharp,
  IoLogoBitcoin,
  IoSearchSharp
} from 'react-icons/io5';
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
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  );
};

export default function Skills() {
  return (
    <Container maxW={'6xl'} p={12}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4}>
          <Badge>Skills</Badge>
          <Heading>Technologies I'm comfortable with</Heading>
          <Text color={'gray.500'} fontSize={'lg'}>
            Im familiarized with scrum/agile methodology. Besides the
            technologies named in the right, im currently learning:
          </Text>
          <Stack
            spacing={4}
            divider={
              <StackDivider
                borderColor={useColorModeValue('gray.100', 'gray.700')}
              />
            }
          >
            <Feature
              icon={<Icon as={SiTypescript} color={'yellow.500'} w={5} h={5} />}
              iconBg={useColorModeValue('yellow.100', 'yellow.900')}
              text={'Typescript'}
            />
            <Feature
              icon={<Icon as={AiFillBug} color={'green.500'} w={5} h={5} />}
              iconBg={useColorModeValue('green.100', 'green.900')}
              text={'TDD'}
            />
            <Feature
              icon={<Icon as={SiStorybook} color={'purple.500'} w={5} h={5} />}
              iconBg={useColorModeValue('purple.100', 'purple.900')}
              text={'Storyblocks'}
            />
          </Stack>
        </Stack>
        <SkillsGraph />
      </SimpleGrid>
    </Container>
  );
}
