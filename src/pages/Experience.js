import { ExternalLinkIcon } from '@chakra-ui/icons';
import {
  Box,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  useBreakpointValue,
  Divider,
  Link,
  HStack,
  Tag,
  IconButton,
} from '@chakra-ui/react';
import { SiInstagram, SiTwitter } from 'react-icons/si';

const BlogTags = (props) => {
  return (
    <HStack
      alignContent={'center'}
      alignSelf={'center'}
      alignItems={'center'}
      textAlign={'center'}
      align={'center'}
      justify={'center'}
      spacing={2}
      marginTop={props.marginTop}>
      {props.tags.map((tag) => {
        return (
          <Tag
            objectFit="contain"
            width={'max-content'}
            height={'max-content'}
            size={'md'}
            variant="solid"
            colorScheme="orange"
            key={tag}>
            {tag}
          </Tag>
        );
      })}
    </HStack>
  );
};

export default function Experience() {
  return (
    <Container maxW={'7xl'}>
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
          Experience
        </Text>
        <br></br>
        <br />{' '}
      </Heading>
      <Heading as="h2" marginTop="5">
        Comitee Experience
      </Heading>
      <Divider marginTop="5" />
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 18, md: 24 }}
        mb={'90px'}
      >
        <Flex>
          <Box
            flex="1"
            flexDirection="column"
            justifyContent="center"
            marginTop={{ base: '0', sm: '0', lg: '-10' }}
            textAlign={{ base: 'center' }}
          >
            <Image
              rounded={'md'}
              alt={'product image'}
              src={'images/reeva.png'}
              fit={'contain'}
              align={'center'}
              w={'100%'}
              h={{ base: '100%', sm: '150px', lg: '250px' }}
            />
            <br></br>
            <Heading marginTop="1">
              <Link href='https://schematics.its.ac.id/' isExternal textDecoration="none" _hover={{ textDecoration: 'none' }}>
                Schematics ITS <ExternalLinkIcon mx='3px' boxSize={'20px'} />
              </Link>
            </Heading>
            <br></br>
            <BlogTags tags={['Surabaya', 'Jawa Timur', 'Indonesia']} />
            <Stack
              alignContent={'center'}
              alignSelf={'center'}
              alignItems={'center'}
              textAlign={'center'}
              align={'center'}
              justify={'center'}
              marginTop={'10px'}
              direction={{ base: 'row' }}>
              <Link href="https://www.instagram.com/schematics.its/" isExternal>
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
              <Link href="https://twitter.com/schematics_its" isExternal>
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
        </Flex>
        <Stack spacing={{ base: 6, md: 10 }}>
          <Box as={'header'}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: 'xl', sm: '3xl', lg: '4xl' }}>
              Schematics REEVA
            </Heading>
          </Box>

          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={'column'}
            divider={
              <StackDivider
                borderColor={useColorModeValue('gray.200', 'gray.600')}
              />
            }>
            <Text
              fontSize={{ base: '19px', lg: '21px' }}
              color={useColorModeValue('yellow.500', 'yellow.300')}
              fontWeight={'500'}
              textTransform={'uppercase'}
              mb={'4'}>
              Work Section
            </Text>

            <Box>
              <Text
                fontSize={{ base: 'xl', lg: '2xl' }}
                color={useColorModeValue('blue.500', 'blue.300')}
                fontWeight={'500'}
                mb={'2'}>
                Recording Staff
              </Text>
              <Text
                color={useColorModeValue('gray.900', 'gray.400')}
                fontWeight={300}
                fontSize={{ base: 'lg', lg: 'xl' }}
                mb={'1'}>
                Mei 2021 - October 2021
              </Text>
              <Text fontSize={'md'}>
                Responsible for preparing drafted footage in Schematics Reeva.
              </Text>
            </Box>
            <Box>
              <Text
                fontSize={{ base: 'xl', lg: '2xl' }}
                color={useColorModeValue('blue.500', 'blue.300')}
                fontWeight={'500'}
                mb={'2'}>
                Production Staff
              </Text>
              <Text
                color={useColorModeValue('gray.900', 'gray.400')}
                fontWeight={300}
                fontSize={{ base: 'lg', lg: 'xl' }}
                mb={'1'}>
                March 2022 - November 2022
              </Text>
              <Text fontSize={'md'}>
                Responsible for preparing things related to Schematics Reeva event production.
              </Text>
            </Box>
          </Stack>

        </Stack>
      </SimpleGrid>
      <Divider marginTop="5" />
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 18, md: 24 }}
        mb={'90px'}
      >
        <Flex>
          <Box
            flex="1"
            flexDirection="column"
            justifyContent="center"
            marginTop={{ base: '0', sm: '0', lg: '-10' }}
            textAlign={{ base: 'center' }}
          >
            <br></br>
            <Heading marginTop="1">
              <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
                Nouveau SMAN 5 Surabaya
              </Link>
            </Heading>
            <br></br>
            <BlogTags tags={['Surabaya', 'Jawa Timur', 'Indonesia']} />

          </Box>
        </Flex>
        <Stack spacing={{ base: 6, md: 10 }}>
          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={'column'}
            divider={
              <StackDivider
                borderColor={useColorModeValue('gray.200', 'gray.600')}
              />
            }>
            <Text
              fontSize={{ base: '19px', lg: '21px' }}
              color={useColorModeValue('yellow.500', 'yellow.300')}
              fontWeight={'500'}
              textTransform={'uppercase'}
              mb={'4'}>
              Work Section
            </Text>

            <Box>
              <Text
                fontSize={{ base: 'xl', lg: '2xl' }}
                color={useColorModeValue('blue.500', 'blue.300')}
                fontWeight={'500'}
                mb={'2'}>
                Property Staff
              </Text>
              <Text
                color={useColorModeValue('gray.900', 'gray.400')}
                fontWeight={300}
                fontSize={{ base: 'lg', lg: 'xl' }}
                mb={'1'}>
                2017
              </Text>
              <Text fontSize={'md'}>
                Responsible for preparing and supplying Nouveau event equipments and needs.</Text>
            </Box>
            <Box>
              <Text
                fontSize={{ base: 'xl', lg: '2xl' }}
                color={useColorModeValue('blue.500', 'blue.300')}
                fontWeight={'500'}
                mb={'2'}>
                Transportation Staff
              </Text>
              <Text
                color={useColorModeValue('gray.900', 'gray.400')}
                fontWeight={300}
                fontSize={{ base: 'lg', lg: 'xl' }}
                mb={'1'}>
                2018
              </Text>
              <Text fontSize={'md'}>
                Responsible for setting up vehicles and providing transportation needs for Nouveau event.</Text>
            </Box>
          </Stack>

        </Stack>
      </SimpleGrid>

      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 18, md: 24 }}
        mb={'90px'}
      >
        <Flex>
          <Box
            flex="1"
            flexDirection="column"
            justifyContent="center"
            marginTop={{ base: '0', sm: '0', lg: '-10' }}
            textAlign={{ base: 'center' }}
          >
            <br></br>
            <Heading marginTop="1">
              <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
                Eunoia SMAN 5 Surabaya
              </Link>
            </Heading>
            <br></br>
            <BlogTags tags={['Surabaya', 'Jawa Timur', 'Indonesia']} />

          </Box>
        </Flex>
        <Stack spacing={{ base: 6, md: 10 }}>
          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={'column'}
            divider={
              <StackDivider
                borderColor={useColorModeValue('gray.200', 'gray.600')}
              />
            }>
            <Text
              fontSize={{ base: '19px', lg: '21px' }}
              color={useColorModeValue('yellow.500', 'yellow.300')}
              fontWeight={'500'}
              textTransform={'uppercase'}
              mb={'4'}>
              Work Section
            </Text>

            <Box>
              <Text
                fontSize={{ base: 'xl', lg: '2xl' }}
                color={useColorModeValue('blue.500', 'blue.300')}
                fontWeight={'500'}
                mb={'2'}>
                Robotics Event Staff
              </Text>
              <Text
                color={useColorModeValue('gray.900', 'gray.400')}
                fontWeight={300}
                fontSize={{ base: 'lg', lg: 'xl' }}
                mb={'1'}>
                2018
              </Text>
              <Text fontSize={'md'}>
                Responsible for designing and organizing Robotics competition events in Eunoia.</Text>
            </Box>
          </Stack>

        </Stack>
      </SimpleGrid>

      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 18, md: 24 }}
        mb={'90px'}
      >
        <Flex>
          <Box
            flex="1"
            flexDirection="column"
            justifyContent="center"
            marginTop={{ base: '0', sm: '0', lg: '-10' }}
            textAlign={{ base: 'center' }}
          >
            <br></br>
            <Heading marginTop="1">
              <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
                Senyuman SMAN 5 Surabaya
              </Link>
            </Heading>
            <br></br>
            <BlogTags tags={['Surabaya', 'Jawa Timur', 'Indonesia']} />

          </Box>
        </Flex>
        <Stack spacing={{ base: 6, md: 10 }}>
          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={'column'}
            divider={
              <StackDivider
                borderColor={useColorModeValue('gray.200', 'gray.600')}
              />
            }>
            <Text
              fontSize={{ base: '19px', lg: '21px' }}
              color={useColorModeValue('yellow.500', 'yellow.300')}
              fontWeight={'500'}
              textTransform={'uppercase'}
              mb={'4'}>
              Work Section
            </Text>

            <Box>
              <Text
                fontSize={{ base: 'xl', lg: '2xl' }}
                color={useColorModeValue('blue.500', 'blue.300')}
                fontWeight={'500'}
                mb={'2'}>
                Property Staff
              </Text>
              <Text
                color={useColorModeValue('gray.900', 'gray.400')}
                fontWeight={300}
                fontSize={{ base: 'lg', lg: 'xl' }}
                mb={'1'}>
                2018
              </Text>
              <Text fontSize={'md'}>
                Responsible for preparing and supplying Senyuman event equipments and needs.</Text>
            </Box>
          </Stack>

        </Stack>
      </SimpleGrid>
    </Container>
  );
}