import {
    Box,
    chakra,
    Container,
    Stack,
    Text,
    Image,
    Flex,
    VStack,
    Button,
    Heading,
    SimpleGrid,
    StackDivider,
    useColorModeValue,
    VisuallyHidden,
    List,
    ListItem,
} from '@chakra-ui/react';
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { MdLocalShipping } from 'react-icons/md';
import Carousel3 from '../components/Carousel3';
  
  export default function Simple() {
    return (
      <Container maxW={'7xl'}>
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