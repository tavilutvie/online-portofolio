import './About.css';
import {
  Box,
  Avatar,
  HStack,
  Link,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  useColorMode,
  Center,
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';

import React, { Component } from 'react';
export default function About() {
    return (
      <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex p={8} flex={1} textAlign={'center'} align={'center'} justify={'center'}>
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
            I live in the city of Surabaya, East Java. I have a desire to become a great Software Developer.
          </Text>
          <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
            <Button
              rounded={'full'}
              bg={'blue.400'}
              color={'white'}
              _hover={{
                bg: 'blue.500',
              }}>
              Create Project
            </Button>
            <Button rounded={'full'}>How It Works</Button>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          borderRadius='full'
          alt={'Login Image'}
          objectFit={'cover'}
          src={'images/foto.jpg'}
        />
      </Flex>
    </Stack>
    // <div>
    //   <Center>
    //     <h1>About Me</h1>
    //   </Center>
    //   <br></br>
    //   <Center>
    //     <Box boxSize='sm'>
    //     <Center>
    //       <Image 
    //       borderRadius='full' 
    //       objectPosition='0px 20%' 
    //       boxSize='300px' 
    //       objectFit='cover' 
    //       className="about-photo" 
    //       src='images/foto.jpg' 
    //       alt='Eldenabih Tavirazin Lutvie' />
    //       </Center>
    //     </Box>
    //   </Center>
    //   <Center>
    //     <p>Hello!</p>
    //   </Center>
    //   <Center>
    //     <p>My name is Eldenabih Tavirazin Lutvie from the Department of Informatics Engineering, Sepuluh Nopember Institute of Technology. I live in the city of Surabaya, East Java. I have a desire to become a great Software Developer.</p>
    //   </Center>
    // </div>
    );
  
}