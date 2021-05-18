import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Skills from '../components/Skills';
import Footer from '../components/Footer';
import Portfolio from '../components/Portfolio';
import Hobbies from '../components/Hobbies';
import { Box } from '@chakra-ui/react';
import { FadeInBox } from '../components/FadeInBox';
import { IntersectionObserver } from '../components/IntersectionObserver';

export default function Home() {
  return (
    <>
      <IntersectionObserver>
        <FadeInBox>
          <Box id="/#">
            <Hero />
          </Box>
        </FadeInBox>
      </IntersectionObserver>
      <Box id="portfolio">
        <Portfolio />
      </Box>
      <IntersectionObserver>
        <FadeInBox>
          <Box
            py="96px"
            bgImage="url('/gradient_1.png')"
            bgPosition="center"
            bgRepeat="no-repeat"
            id="skills"
          >
            <Skills />
          </Box>
        </FadeInBox>
      </IntersectionObserver>
      <IntersectionObserver>
        <FadeInBox>
          <Box id="hobbies">
            <Hobbies />
          </Box>
        </FadeInBox>
      </IntersectionObserver>
      <Footer />
    </>
  );
}
