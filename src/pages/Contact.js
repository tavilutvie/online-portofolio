import {
    Box,
  Heading,
  Link,
  Image,
  Text,
  Divider,
  HStack,
  Tag,
  Wrap,
  WrapItem,
  SpaceProps,
  useColorModeValue,
  Container,
  VStack,
  Flex,
  Center,
  Stack,
  useBreakpointValue,
  } from '@chakra-ui/react';
import React, { Component } from 'react';

const BlogTags = (props) => {
    return (
      <HStack spacing={2} marginTop={props.marginTop}>
        {props.tags.map((tag) => {
          return (
            <Tag size={'md'} variant="solid" colorScheme="orange" key={tag}>
              {tag}
            </Tag>
          );
        })}
      </HStack>
    );
  };

export const BlogAuthor = (props) => {
    return (
      <HStack marginTop="2" spacing="2" display="flex" alignItems="center">
        <Image
          borderRadius="full"
          boxSize="40px"
          src="https://100k-faces.glitch.me/random-image"
          alt={`Avatar of ${props.name}`}
        />
        <Text fontWeight="medium">{props.name}</Text>
        <Text>—</Text>
        <Text>{props.date.toLocaleDateString()}</Text>
      </HStack>
    );
  };

const Contact = () => {
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
            <Box flex='1' >
            <Box borderRadius="lg" overflow="hidden">
              <Link href='https://www.sman5surabaya.sch.id/' isExternal textDecoration="none" _hover={{ textDecoration: 'none' }}>
                <Image
                  boxSize='300px'
                  transform="scale(1.0)"
                  src={'images/logo-smala.png'}
                  alt="smala"
                  objectFit="contain"
                  width="100%"
                  transition="0.3s ease-in-out"
                  _hover={{
                    transform: 'scale(1.05)',
                  }}
                />
              </Link>
            </Box>
            <Heading fontSize="xl" marginTop="2">
              <Link href='https://www.sman5surabaya.sch.id/' isExternal textDecoration="none" _hover={{ textDecoration: 'none' }}>
                SMA Negeri 5 Surabaya
              </Link>
            </Heading>
            <Center>
            <BlogTags tags={['Surabaya', 'Jawa Timur', 'Indonesia']} marginTop="3" />
            </Center>
            <Text as="p" fontSize="md" marginTop="2">
              Major&emsp;: Science
              <br></br>
              Year&emsp;: 2017 - 2020
            </Text>
          </Box>
            </Stack>
        </Flex>
        <Flex p={8} flex={1} 
        alignContent={'center'}
        alignSelf={'center'}
        alignItems={'center'}
        textAlign={'center'} 
        align={'center'} 
        justify={'center'}>
            <Stack spacing={6} w={'full'} maxW={'lg'}>
            <Box flex='1' >
                <Box borderRadius="lg" overflow="hidden">
                  <Link href='https://www.smpn1-sby.sch.id/' isExternal textDecoration="none" _hover={{ textDecoration: 'none' }}>
                    <Image
                      boxSize='300px'
                      transform="scale(1.0)"
                      src={'images/logo-spensa.png'}
                      alt="spensa"
                      objectFit="contain"
                      width="100%"
                      transition="0.3s ease-in-out"
                      _hover={{
                        transform: 'scale(1.05)',
                      }}
                    />
                  </Link>
                </Box>
                <Heading fontSize="xl" marginTop="2">
                  <Link href='https://www.smpn1-sby.sch.id/' isExternal textDecoration="none" _hover={{ textDecoration: 'none' }}>
                    SMP Negeri 1 Surabaya
                  </Link>
                </Heading>
                <Center>
                <BlogTags tags={['Surabaya', 'Jawa Timur', 'Indonesia']} marginTop="3" />
                </Center>
                <Text as="p" fontSize="md" marginTop="2">
                  Year&emsp;: 2014 - 2017
                </Text>
              </Box>
            </Stack>
        </Flex>
        <Flex p={8} flex={1} 
        alignContent={'center'}
        alignSelf={'center'}
        alignItems={'center'}
        textAlign={'center'} 
        align={'center'} 
        justify={'center'}>
            <Stack spacing={6} w={'full'} maxW={'lg'}>
            <Box flex='1' >
                <Box borderRadius="lg" overflow="hidden">
                  <Link href='https://www.instagram.com/pelitajayaschoolsby/' isExternal textDecoration="none" _hover={{ textDecoration: 'none' }}>
                    <Image
                      boxSize='300px'
                      transform="scale(1.0)"
                      src={'images/logo-pjs.png'}
                      alt="pjs"
                      objectFit="contain"
                      width="100%"
                      transition="0.3s ease-in-out"
                      _hover={{
                        transform: 'scale(1.05)',
                      }}
                    />
                  </Link>
                </Box>
                <Heading fontSize="xl" marginTop="2">
                  <Link href='https://www.instagram.com/pelitajayaschoolsby/' isExternal textDecoration="none" _hover={{ textDecoration: 'none' }}>
                    Pelita Jaya School
                  </Link>
                </Heading>
                <Center>
                <BlogTags tags={['Surabaya', 'Jawa Timur', 'Indonesia']} marginTop="3" />
                </Center>
                <Text as="p" fontSize="md" marginTop="2">
                  Year&emsp;: 2008 - 2014
                </Text>
              </Box>
            </Stack>
        </Flex>
        </Stack>
    )
}

export default Contact;