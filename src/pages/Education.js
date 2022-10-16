import React from 'react';
import {
  Box,
  Heading,
  Link,
  Image,
  Text,
  Divider,
  HStack,
  Tag,
  useColorModeValue,
  Container,
  Flex,
  Center,
  Stack,
  IconButton,
  useBreakpointValue,
} from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import Carousel from '../components/Carousel';
import Carousel2 from '../components/Carousel2';
import { SiLinkedin, SiInstagram, SiTwitter } from 'react-icons/si';

const BlogTags = (props) => {
    return (
      <HStack 
        spacing={2} 
        marginTop={props.marginTop}
        >
        {props.tags.map((tag) => {
          return (
            <Tag size={'md'} objectFit="contain" width={'max-content'} height={'max-content'} variant={'solid'} colorScheme="orange" key={tag}>
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

const Education = () => {
    return (
      <Container maxW={'7xl'} p="12">
        <Heading 
        alignContent={'center'}
        alignSelf={'center'}
        alignItems={'center'}
        textAlign={'center'} 
        align={'center'} 
        justify={'center'}
        fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
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
              Education
            </Text>
            <br></br>
            <br />{' '}
          </Heading>
        <Heading as="h2" marginTop="5">
          Current Education
        </Heading>
        <Divider marginTop="5" />
        <Box
          marginTop={{ base: '1', sm: '5' }}
          display="flex"
          flexDirection={{ base: 'column', sm: 'row' }}
          justifyContent="space-between">
          <Box
            display="flex"
            flex="1"
            marginRight="3"
            position="relative"
            alignItems="center">
            <Box
              width={{ base: '100%', sm: '85%' }}
              zIndex="2"
              marginLeft={{ base: '0', sm: '5%' }}
              marginTop="5%">
              <Link href='https://www.its.ac.id/' isExternal textDecoration="none" _hover={{ textDecoration: 'none' }}>
                <Image
                  borderRadius="lg"
                  src={'images/logo-its.png'}
                  alt="its"
                  objectFit="contain"
                />
              </Link>
            </Box>
            <Box zIndex="1" width="100%" position="absolute" height="100%">
              <Box
                bgGradient={useColorModeValue(
                  'radial(orange.600 1px, transparent 1px)',
                  'radial(orange.300 1px, transparent 1px)'
                )}
                backgroundSize="20px 20px"
                opacity="0.4"
                height="100%"
              />
            </Box>
          </Box>
          <Box
            display="flex"
            flex="1"
            flexDirection="column"
            justifyContent="center"
            marginTop={{ base: '3', sm: '0' }}>
            <Heading marginTop="1">
              <Link href='https://www.its.ac.id/' isExternal textDecoration="none" _hover={{ textDecoration: 'none' }}>
                Institut Teknologi Sepuluh Nopember
              </Link>
            </Heading>
            <br></br>
            <BlogTags tags={['Surabaya', 'Jawa Timur', 'Indonesia']} />
            <Text
              as="p"
              marginTop="2"
              color={useColorModeValue('gray.700', 'gray.200')}
              fontSize="lg">
              Major&emsp;: <spacing></spacing>
              <Link href='https://www.its.ac.id/informatika/' isExternal textDecoration="none" _hover={{ textDecoration: 'none' }}>
                Informatics Engineering <ExternalLinkIcon mx='2px' />
              </Link>
              <br></br>
              Current GPA&emsp;: 3.76 / 4.00
              <br></br>
              Year&emsp;: 2020 - Present
            </Text>
            <Stack direction={{ base: 'row' }}>
              <Link href="https://www.instagram.com/its_campus/" isExternal>
                <IconButton
                  aria-label="instagram"
                  variant="ghost"
                  size="lg"
                  icon={<SiInstagram size="28px" />}
                  _hover={{
                    bg: 'blue.500',
                    color: useColorModeValue('white', 'gray.700'),
                  }}
                  isRound
                />
              </Link>
              <Link href="https://www.linkedin.com/school/institutteknologisepuluhnopember/" isExternal>
                <IconButton
                  aria-label="linkedin"
                  variant="ghost"
                  size="lg"
                  icon={<SiLinkedin size="28px" />}
                  _hover={{
                    bg: 'blue.500',
                    color: useColorModeValue('white', 'gray.700'),
                  }}
                  isRound
                />
              </Link>
              <Link href="https://twitter.com/its_campus" isExternal>
                <IconButton
                  aria-label="twitter"
                  variant="ghost"
                  size="lg"
                  icon={<SiTwitter size="28px" />}
                  _hover={{
                    bg: 'blue.500',
                    color: useColorModeValue('white', 'gray.700'),
                  }}
                  isRound
                />
              </Link>
            </Stack>
          </Box>
        </Box>
        <Box marginTop={'50px'}>
          <Carousel />
        </Box>
        <Heading as="h2" marginTop="20">
          Past Education
        </Heading>
        <Divider marginTop="5" />
        <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
        <Flex p={8} flex={1} 
        alignContent={'center'}
        alignSelf={'center'}
        alignItems={'center'}
        textAlign={'center'} 
        align={'center'} 
        justify={'center'}>
            <Stack spacing={6} w={'full'} maxW={'lg'}>
            <Box flex='1' margin={'30px'}>
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
            <Stack align={'center'} justify={'center'} direction={{ base: 'row'}}>
              <Link href="https://www.instagram.com/mediasmalane/" isExternal>
                <IconButton
                  aria-label="instagram"
                  variant="ghost"
                  size="lg"
                  icon={<SiInstagram size="28px" />}
                  _hover={{
                    bg: 'blue.500',
                    color: useColorModeValue('white', 'gray.700'),
                  }}
                  isRound
                />
              </Link>
              <Link href="https://www.linkedin.com/school/smanegeri5-surabaya/" isExternal>
                <IconButton
                  aria-label="linkedin"
                  variant="ghost"
                  size="lg"
                  icon={<SiLinkedin size="28px" />}
                  _hover={{
                    bg: 'blue.500',
                    color: useColorModeValue('white', 'gray.700'),
                  }}
                  isRound
                />
              </Link>
              <Link href="https://twitter.com/MediaSmalane" isExternal>
                <IconButton
                  aria-label="twitter"
                  variant="ghost"
                  size="lg"
                  icon={<SiTwitter size="28px" />}
                  _hover={{
                    bg: 'blue.500',
                    color: useColorModeValue('white', 'gray.700'),
                  }}
                  isRound
                />
              </Link>
            </Stack>
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
            <Box flex='1' margin={'30px'}>
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
                <Stack align={'center'} justify={'center'} direction={{ base: 'row' }}>
              <Link href="https://www.instagram.com/spensabaya_official/" isExternal>
                <IconButton
                  aria-label="instagram"
                  variant="ghost"
                  size="lg"
                  icon={<SiInstagram size="28px" />}
                  _hover={{
                    bg: 'blue.500',
                    color: useColorModeValue('white', 'gray.700'),
                  }}
                  isRound
                />
              </Link>
              <Link href="https://twitter.com/smpn1surabaya" isExternal>
                <IconButton
                  aria-label="twitter"
                  variant="ghost"
                  size="lg"
                  icon={<SiTwitter size="28px" />}
                  _hover={{
                    bg: 'blue.500',
                    color: useColorModeValue('white', 'gray.700'),
                  }}
                  isRound
                />
              </Link>
            </Stack>
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
            <Box flex='1' margin={'30px'}>
                <Box borderRadius="lg" overflow="hidden">
                  <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
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
                  <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
                    Pelita Jaya School
                  </Link>
                </Heading>
                <Center>
                <BlogTags tags={['Surabaya', 'Jawa Timur', 'Indonesia']} marginTop="3" />
                </Center>
                <Text as="p" fontSize="md" marginTop="2">
                  Year&emsp;: 2008 - 2014
                </Text>
                <Stack align={'center'} justify={'center'} direction={{ base: 'row' }}>
              <Link href="https://www.instagram.com/pelitajayaschoolsby/" isExternal>
                <IconButton
                  aria-label="instagram"
                  variant="ghost"
                  size="lg"
                  icon={<SiInstagram size="28px" />}
                  _hover={{
                    bg: 'blue.500',
                    color: useColorModeValue('white', 'gray.700'),
                  }}
                  isRound
                />
              </Link>
            </Stack>
              </Box>
            </Stack>
        </Flex>
        </Stack>
        <Carousel2 />
      </Container>
    );
  };
  
export default Education;