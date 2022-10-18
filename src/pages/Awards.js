import {
    Box,
    Container,
    Stack,
    Text,
    Heading,
    SimpleGrid,
    useColorModeValue,
    useBreakpointValue,
} from '@chakra-ui/react';
import Carousel3 from '../components/Carousel3';
  
  export default function Awards() {
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
              Awards
            </Text>
            <br></br>
            <br />{' '}
          </Heading>
        <SimpleGrid
            spacing={{ base: 8, md: 10 }}
            py={{ base: 18, md: 24 }}>
            <Stack spacing={{ base: 6, md: 10 }}>
                <Box as={'header'}>
                <Heading
                    lineHeight={1.1}
                    fontWeight={600}
                    textAlign={'center'}
                    fontSize={{ base: 'xl', sm: '2xl', lg: '3xl' }}>
                    Category Champion of Manado Singing City 2018 International Choral Festival and Grandprix
                </Heading>
                <Text
                    textAlign={'center'}
                    color={useColorModeValue('gray.900', 'gray.400')}
                    fontWeight={300}
                    fontSize={'2xl'}>
                    Manado, Sulawesi Utara, Indonesia
                </Text>
                </Box>
                
            </Stack>
            <Carousel3 />
        </SimpleGrid>
      </Container>
    );
  }