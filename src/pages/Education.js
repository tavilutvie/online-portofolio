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
  Wrap,
  WrapItem,
  SpaceProps,
  useColorModeValue,
  Container,
  VStack,
  Flex,
} from '@chakra-ui/react';

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

const Education = () => {
    return (
      <Container maxW={'7xl'} p="12">
        <Heading as="h1">Education</Heading>
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
              <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
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
              <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
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
              Major&emsp;: Informatics Engineering
              <br></br>
              Current GPA&emsp;: 3.76 / 4.00
              <br></br>
              Year&emsp;: 2020 - Present
            </Text>
          </Box>
        </Box>
        <Heading as="h2" marginTop="5">
          Past Educations
        </Heading>
        <Divider marginTop="5" />
        <Flex p={8} flex={1} 
        alignContent={'center'}
        alignSelf={'center'}
        alignItems={'center'}
        textAlign={'center'} 
        align={'center'} 
        justify={'center'}>
        <Wrap spacing="30px" marginTop="5">
          <WrapItem width={{ base: '100%', sm: '45%', md: '45%', lg: '30%' }}>
            <Box w="100%">
              <Box borderRadius="lg" overflow="hidden">
                <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
                  <Image
                    transform="scale(1.0)"
                    src={
                      'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80'
                    }
                    alt="some text"
                    objectFit="contain"
                    width="100%"
                    transition="0.3s ease-in-out"
                    _hover={{
                      transform: 'scale(1.05)',
                    }}
                  />
                </Link>
              </Box>
              <BlogTags tags={['Engineering', 'Product']} marginTop="3" />
              <Heading fontSize="xl" marginTop="2">
                <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
                  Some blog title
                </Link>
              </Heading>
              <Text as="p" fontSize="md" marginTop="2">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book.
              </Text>
              <BlogAuthor
                name="John Doe"
                date={new Date('2021-04-06T19:01:27Z')}
              />
            </Box>
          </WrapItem>
        </Wrap>
    
        </Flex>
        
      </Container>
    );
  };
  
  export default Education;
  



// const Education = () => {
//     return (
        
        // <div>
        //     <h1>Education</h1>
        //     <ul>
        //         <li>
        //             <h2>Institut Teknologi Sepuluh Nopember</h2>
        //             <p>Surabaya, Jawa Timur, Indonesia</p>
        //             <p>2020 - Present</p>
        //             <p>Major: Informatics Engineering</p>
        //             <p>Current GPA: 3.76/4.00</p>
        //         </li>
        //         <li>
        //             <h2>SMAN 5 Surabaya</h2>
        //             <p>Surabaya, Jawa Timur, Indonesia</p>
        //             <p>2017 - 2020</p>
        //             <p>Major: Science</p>
        //         </li>
        //         <li>
        //             <h2>SMPN 1 Surabaya</h2>
        //             <p>Surabaya, Jawa Timur, Indonesia</p>
        //             <p>2014 - 2017</p>
        //         </li>
        //         <li>
        //             <h2>Pelita Jaya School</h2>
        //             <p>Surabaya, Jawa Timur, Indonesia</p>
        //             <p>2008 - 2014</p>
        //         </li>
        //     </ul>
        // </div>
//     )
// }

// export default Education;