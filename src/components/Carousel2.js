import React from 'react';
import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Heading,
  Container,
  // Center,
} from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
// And react-slick as our Carousel Lib
import Slider from 'react-slick';

// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function Carousel() {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = React.useState(null);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: '83%', md: '50%' });
  const side = useBreakpointValue({ base: '30%', md: '40px' });

  // This list contains all the data for carousels
  // This can be static or loaded from a server
  const cards = [
    {
      title: 'SMA Negeri 5 Surabaya',
      image: 'images/smala-v3.3.png',
    },
    {
      title: 'SMA Negeri 5 Surabaya',
      image: 'images/smala-v1.3.png',
    },
    {
      title: 'SMA Negeri 5 Surabaya',
      image: 'images/smala-v2.3.png',
    },
    {
      title: 'SMP Negeri 1 Surabaya',
      image: 'images/spensa-v4.2.png',
    },
    {
      title: 'SMP Negeri 1 Surabaya',
      image: 'images/spensa-v1.4.png',
    },
    {
      title: 'SMP Negeri 1 Surabaya',
      image: 'images/spensa-v3.3.png',
    },
    {
      title: 'Pelita Jaya School',
      image: 'images/pjs-v2.3.png',
    },
    {
      title: 'Pelita Jaya School',
      image: 'images/pjs-v3.3.png',
    },
  ];

  return (
    <Box
      position={'relative'}
      height={'350px'}
      width='70%'
      overflow={'hidden'}
      mx='auto'
    >
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {/* Left Icon */}
      <IconButton
        aria-label="left-arrow"
        variant="ghost"
        position="absolute"
        left={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickPrev()}>
        <BiLeftArrowAlt size="40px" />
      </IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        variant="ghost"
        position="absolute"
        right={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickNext()}>
        <BiRightArrowAlt size="40px" />
      </IconButton>
      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((card, index) => (
          <Box
            key={index}
            height={'6xl'}
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize='contain'
            boxSize='full'
            transform="scale(1.0)"
            objectFit="contain"
            width="100%"
            backgroundImage={`url(${card.image})`}>
            {/* This is the block you need to change, to customize the caption */}
            <Container size="container.lg" height="300px" position="relative">
              <Stack
                spacing={6}
                w={'max-content'}
                maxW={'lg'}
                position="absolute"
                top={'80%'}
                left={'50%'}
                textAlign="center"
                transform="translate(-50%, -50%)">
                {/* <Center> */}
                <Heading bgColor={'Highlight'} textColor={'navy'} fontSize={{ base: 'lg', md: 'xl', lg: '2xl' }} width={'110%'}>
                  {card.title}
                </Heading>
                {/* <Text fontSize={{ base: 'md', lg: 'lg' }} color="GrayText">
                      {card.text}
                    </Text> */}
                {/* </Center> */}
              </Stack>
            </Container>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}