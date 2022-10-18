import './About.css';
import {
  Center,
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
  Link,
} from '@chakra-ui/react';

import React from 'react';
export default function About() {
    return (
      <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex p={8} flex={1} 
      alignContent={'center'}
      alignSelf={'center'}
      alignItems={'center'}
      textAlign={'center'} 
      align={'center'} 
      justify={'center'}>
        <Stack spacing={6} w={'full'} maxW={'lg'}>
          <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
            <Text
              as={'span'}
              position={'relative'}
              _after={{
                content: "''",
                width: 'full',
                height: useBreakpointValue({ base: '20%', md: '30%' }),
                position: 'absolute',
                bottom: 1,
                left: 0,
                bg: 'blue.400',
                zIndex: -1,
              }}>
              About Me
            </Text>
            <br></br><br></br>
            <br />{' '}
            <Text color={'blue.400'} as={'span'}>
              Eldenabih Tavirazin Lutvie
            </Text>{' '}<br></br><br></br>
          </Heading>
          <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
            HELLO!
            <br></br><br></br>
            My name is Eldenabih Tavirazin Lutvie from the Department of Informatics Engineering, Sepuluh Nopember Institute of Technology. 
            <br></br>
            I live in the city of Surabaya, East Java. I have a desire to become a great Software Developer. I'm currently interested in learning back-end programming and becoming a full stack web developer.
          </Text>
          <Center>
            <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
              <Link href="/" isExternal>
                <Button
                  rounded={'full'}
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}>
                  My Primary Portofolio
                </Button>
              </Link>
              <Link href="https://sop.tavilutvie.dev/" isExternal>
                <Button
                  rounded={'full'}
                  bg={'purple.400'}
                  color={'white'}
                  _hover={{
                    bg: 'purple.500',
                  }}>
                  My Secondary Portofolio
                </Button>
              </Link>
            </Stack>
          </Center>
        </Stack>
      </Flex>
      <Flex p={8} flex={1} 
        alignContent={'center'}
        alignSelf={'center'}
        alignItems={'center'}
        textAlign={'center'} 
        align={'center'} 
        justify={'center'}>
        <Image
          borderTopRadius={'full'}
          alt={'Profile Picture'}
          objectFit={'cover'}
          // width={'max-content'} 
          // height={'max-content'}
          boxSize="80%"
          src={'images/foto.jpg'}
        />
      </Flex>
    </Stack>
    );
  
}