import {
  Flex,
  Grid,
  GridItem,
  Icon,
  IconButton,
  Tooltip
} from '@chakra-ui/react';
import {
  SiTailwindcss,
  SiJavascript,
  SiRedux,
  SiNodeDotJs,
  SiPostgresql,
  SiWebpack
} from 'react-icons/si';
import { DiCss3, DiSass, DiReact, DiMongodb } from 'react-icons/di';
import { AiFillGithub, AiFillHtml5 } from 'react-icons/ai';
import Image from 'next/image';

const GraphIcon = ({
  colStart,
  rowStart,
  label,
  color,
  icon,
  size,
  href,
  bgColor = 'gray.100',
  bgIcon = 'none'
}) => {
  return (
    <GridItem
      maxW={['48px', '64px', '40px', '48px', '64px']}
      maxH={['48px', '64px', '40px', '48px', '64px']}
      colStart={colStart}
      rowStart={rowStart}
    >
      <Tooltip label={label} fontSize="md">
        <IconButton
          as="a"
          minW={['48px', '64px', '40px', '48px', '64px']}
          maxW={['48px', '64px', '40px', '48px', '64px']}
          minH={['48px', '64px', '40px', '48px', '64px']}
          maxH={['48px', '64px', '40px', '48px', '64px']}
          rounded="full"
          target="_blank"
          href={href}
          color={color}
          bg={bgColor}
          borderColor={color}
          icon={<Icon bg={bgIcon} as={icon} boxSize={size} />}
          _hover={{
            opacity: '0.9'
          }}
          _active={{
            opacity: '0.75',
            transform: 'scale(0.9)'
          }}
        />
      </Tooltip>
    </GridItem>
  );
};

const SkillsGraph = () => {
  return (
    <Flex
      width={['95vw', '90vw', '30vw']}
      maxW="500px"
      height={['95vw', '90vw', '30vw']}
      maxH="500px"
      position="relative"
      justifySelf={['center', 'center', 'end', 'end', 'end']}
      alignSelf="center"
    >
      <Image src="/skills.png" layout="fill" alt="skills background image" />
      <Grid
        w="100%"
        h="100%"
        templateColumns="repeat(11, 1fr)"
        templateRows="repeat(11, 1fr)"
      >
        <GridItem position="relative" rowStart={6} colStart={6}>
          <Image layout="fill" src="/logo.png" alt="logo" />
        </GridItem>
        <GraphIcon
          colStart={5}
          rowStart={5}
          label="HTML"
          color="#F16529"
          icon={AiFillHtml5}
          size={[8, 10, 6, 8, 10]}
          href="https://developer.mozilla.org/es/docs/Web/HTML"
        />
        <GraphIcon
          colStart={4}
          rowStart={4}
          label="Git & Github"
          color="#000"
          icon={AiFillGithub}
          size={[8, 10, 6, 8, 10]}
          href="https://github.com/"
        />
        <GraphIcon
          colStart={3}
          rowStart={5}
          label="Webpack"
          color="#8acff3"
          icon={SiWebpack}
          size={[8, 10, 6, 8, 10]}
          href="https://webpack.js.org/"
        />
        <GraphIcon
          colStart={7}
          rowStart={5}
          label="CSS"
          color="#61DAFB"
          icon={DiCss3}
          size={[8, 10, 6, 8, 10]}
          href="https://developer.mozilla.org/es/docs/Web/CSS"
        />
        <GraphIcon
          colStart={8}
          rowStart={4}
          label="SASS"
          color="#fc88c3"
          icon={DiSass}
          size={[8, 10, 6, 8, 10]}
          href="https://sass-lang.com/"
        />
        <GraphIcon
          colStart={7}
          rowStart={3}
          label="Tailwind CSS"
          color="#06B6D4"
          icon={SiTailwindcss}
          size={[8, 10, 6, 8, 10]}
          href="https://tailwindcss.com/"
        />
        <GraphIcon
          colStart={8}
          rowStart={8}
          label="PostgreSQL"
          color="#31648C"
          icon={SiPostgresql}
          size={[8, 10, 6, 8, 10]}
          href="https://www.postgresql.org/"
        />

        <GraphIcon
          colStart={7}
          rowStart={7}
          label="Node & Express"
          color="#5AAA45"
          icon={SiNodeDotJs}
          size={[8, 10, 6, 8, 10]}
          href="https://nodejs.org/"
        />
        <GraphIcon
          colStart={9}
          rowStart={7}
          label="MongoDB"
          color="#55A54E"
          icon={DiMongodb}
          size={[8, 10, 6, 8, 10]}
          href="https://www.mongodb.com/"
        />
        <GraphIcon
          colStart={5}
          rowStart={7}
          label="Javascript"
          color="#EFD81D"
          bgColor="#EFD81D"
          bgIcon="white"
          icon={SiJavascript}
          size={[8, 10, 6, 8, 10]}
          href="https://developer.mozilla.org/es/docs/Web/JavaScript"
        />
        <GraphIcon
          colStart={4}
          rowStart={8}
          label="React"
          color="#61DAFB"
          icon={DiReact}
          size={[8, 10, 6, 8, 10]}
          href="https://reactjs.org/"
        />
        <GraphIcon
          colStart={5}
          rowStart={9}
          label="Redux"
          color="#7248B6"
          icon={SiRedux}
          size={[8, 10, 6, 8, 10]}
          href="https://redux.js.org/"
        />
      </Grid>
    </Flex>
  );
};

export default SkillsGraph;
