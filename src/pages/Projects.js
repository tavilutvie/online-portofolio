import {
  Box,
  Heading,
  Text,
  Img,
  Flex,
  Center,
  HStack,
  Link,
  Container,
  Grid,
  useBreakpointValue,
} from '@chakra-ui/react';
import { BsArrowUpRight } from 'react-icons/bs';
import projectList from '../components/projectList';



export default function Projects() {

  return (
    <Container maxW={"full"}>
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
          Projects
        </Text>
        <br></br>
        <br />{' '}
      </Heading>
      <Grid mx={'auto'} templateColumns={{ base: 'repeat(1, 2fr)', md: 'repeat(3, 2fr)' }} gap={10}>
        {projectList.map((project, index) => (
          <Center py={6}>
            <Box
              w="s"
              h={'full'}
              rounded={'sm'}
              my={5}
              mx={[0, 5]}
              overflow={'hidden'}
              bg="white"
              border={'1px'}
              borderColor="black"
              boxShadow="6px 6px 0 black" _dark={{ boxShadow: "6px 6px 0 cyan" }}
            >
              <Box h={'200px'} borderBottom={'1px'} borderColor="black">
                <Img
                  src={project.image}
                  roundedTop={'sm'}
                  objectFit="cover"
                  h="full"
                  w="full"
                  alt={'Blog Image'}
                />
              </Box>
              <Box p={4}>
                <Box
                  bg="black"
                  display={'inline-block'}
                  px={2}
                  py={1}
                  color="white"
                  mb={2}>
                  <Text fontSize={'xs'} fontWeight="medium">
                    {project.language}
                  </Text>
                </Box>
                <Heading color={'black'} fontSize={'2xl'} noOfLines={1}>
                  {project.title}
                </Heading>
                <Text color={'gray.500'} noOfLines={7}>
                  {project.text}
                </Text>
              </Box>
              <Link href={project?.url} isExternal>
                <HStack borderTop={'1px'} borderBottom={'1px'} color="black">
                  <Flex
                    p={4}
                    alignItems="center"
                    justifyContent={'space-between'}
                    roundedBottom={'sm'}
                    cursor={'pointer'}
                    w="full">
                    <Text fontSize={'md'} fontWeight={'semibold'}>
                      View more
                    </Text>
                    <BsArrowUpRight />
                  </Flex>
                </HStack>
              </Link>
            </Box>
          </Center>
        ))}
      </Grid>
    </Container>
  );
}