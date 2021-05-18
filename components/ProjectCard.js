import { Box, Center, Heading, Text, Stack } from '@chakra-ui/react';
import Image from 'next/image';

import ProjectModal from './ProjectModal';

export default function ProjectCard(props) {
  const { mainMedia, title, subtitle } = props;
  return (
    <Center py={12}>
      <Box
        role={'group'}
        p={6}
        maxW={'330px'}
        w={'full'}
        bg={'white'}
        boxShadow={'2xl'}
        rounded={'lg'}
        pos={'relative'}
        zIndex={1}
      >
        <Box
          rounded={'lg'}
          mt={-12}
          pos={'relative'}
          height={'230px'}
          _after={{
            transition: 'all .3s ease',
            content: '""',
            w: 'full',
            h: 'full',
            pos: 'absolute',
            top: 5,
            left: 0,
            backgroundImage: `url(${mainMedia})`,
            filter: 'blur(15px)',
            zIndex: -1
          }}
          _groupHover={{
            _after: {
              filter: 'blur(20px)'
            }
          }}
        >
          <Image
            rounded={'lg'}
            height={230}
            width={282}
            objectFit={'cover'}
            src={mainMedia}
          />
        </Box>
        <Stack pt={10} alignItems="center">
          <Text
            color={'gray.500'}
            fontSize={'sm'}
            textTransform={'uppercase'}
            textAlign="center"
          >
            {subtitle}
          </Text>
          <Heading
            py={2}
            color={'gray.900'}
            fontSize={'2xl'}
            fontFamily={'body'}
            fontWeight="semibold"
            textAlign="center"
          >
            {title}
          </Heading>
          <ProjectModal {...props} />
        </Stack>
      </Box>
    </Center>
  );
}
