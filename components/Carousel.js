import React, { useState } from 'react';
import { Text, Box, Flex, Image, HStack } from '@chakra-ui/react';

const Carousel = ({ slides }) => {
  const arrowStyles = {
    cursor: 'pointer',
    pos: 'absolute',
    top: '50%',
    w: 'auto',
    mt: '-22px',
    p: '16px',
    color: 'white',
    fontWeight: 'bold',
    fontSize: '18px',
    transition: '0.6s ease',
    borderRadius: '0 3px 3px 0',
    userSelect: 'none',
    _hover: {
      opacity: 0.8,
      bg: 'black'
    }
  };

  const [currentSlide, setCurrentSlide] = useState(0);

  const slidesCount = slides.length;

  const prevSlide = () => {
    setCurrentSlide((s) => (s === 0 ? slidesCount - 1 : s - 1));
  };
  const nextSlide = () => {
    setCurrentSlide((s) => (s === slidesCount - 1 ? 0 : s + 1));
  };
  const setSlide = (slide) => {
    setCurrentSlide(slide);
  };
  const carouselStyle = {
    transition: 'all .5s',
    ml: `-${currentSlide * 100}%`
  };

  return (
    <Flex w="full" p={10} alignItems="center" justifyContent="center">
      <Flex
        w="full"
        overflow="hidden"
        pos="relative"
        bg="gray.700"
        rounded={14}
      >
        <Flex w="full" {...carouselStyle}>
          {slides.map((slide, sid) => {
            return (
              <Box
                key={`slide-${sid}`}
                w="full"
                my="auto"
                shadow="md"
                rounded={14}
                flex="none"
              >
                {slide.type === 'image' ? (
                  <Image
                    w="full"
                    src={slide.data}
                    backgroundSize="cover"
                    rounded={14}
                  />
                ) : (
                  <video autoPlay muted loop controls src={slide.data} />
                )}
              </Box>
            );
          })}
        </Flex>
        <Text {...arrowStyles} left="0" onClick={prevSlide}>
          &#10094;
        </Text>
        <Text {...arrowStyles} right="0" onClick={nextSlide}>
          &#10095;
        </Text>
        <HStack justify="center" pos="absolute" bottom="8px" w="full">
          {Array.from({ length: slidesCount }).map((_, slide) => {
            return (
              <Box
                key={`dots-${slide}`}
                cursor="pointer"
                boxSize={['7px', , '15px']}
                m="0 2px"
                bg={
                  currentSlide === slide ? 'blackAlpha.800' : 'blackAlpha.500'
                }
                rounded="50%"
                display="inline-block"
                transition="background-color 0.6s ease"
                _hover={{ bg: 'blackAlpha.800' }}
                onClick={() => setSlide(slide)}
              ></Box>
            );
          })}
        </HStack>
      </Flex>
    </Flex>
  );
};
export default Carousel;
