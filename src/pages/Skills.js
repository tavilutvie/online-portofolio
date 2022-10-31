import { Box, SimpleGrid, Icon, Text, Stack, Flex, List, ListItem, ListIcon, Container, Heading, useBreakpointValue } from '@chakra-ui/react';
import { GiAwareness } from 'react-icons/gi';
import { MdComputer, MdLanguage } from 'react-icons/md';

const Feature = ({ title, text, icon }) => {
  return (
    <Stack>
      <Flex
        w={16}
        h={16}
        alignContent={'center'}
        alignSelf={'center'}
        alignItems={'center'}
        textAlign={'center'} 
        align={'center'} 
        justify={'center'}
        color={'background'}
        rounded={'full'}
        bg={'blue.600'}
        borderRadius="25%"
        mb={1}>
        {icon}
      </Flex>
      <Text textAlign={'center'} fontWeight={600}>{title}</Text>
      <Text textAlign={'center'} color={'gray.600'}>{text}</Text>
    </Stack>
  );
};

export default function Skills() {
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
          Skills
        </Text>
        <br></br>
        <br />{' '}
      </Heading>
    <Box p={4} paddingLeft={'50px'} >
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        <Box>
        <Feature
          icon={<Icon as={MdComputer} w={10} h={10} />}
          title={'Programming Language'}
          text={
            'System of notation for writing computer programs.'
          }
        />
        <List marginTop={'5%'} marginLeft={'37%'} spacing={'3'}>
            <ListItem>
                <ListIcon as={MdComputer} color='green.500' />
                C
            </ListItem>
            <ListItem>
                <ListIcon as={MdComputer} color='green.500' />
                C++
            </ListItem>
            <ListItem>
                <ListIcon as={MdComputer} color='green.500' />
                Java
            </ListItem>
            <ListItem>
                <ListIcon as={MdComputer} color='green.500' />
                Javascript
            </ListItem>
            <ListItem>
                <ListIcon as={MdComputer} color='green.500' />
                Python
            </ListItem>
            <ListItem>
                <ListIcon as={MdComputer} color='green.500' />
                HTML
            </ListItem>
            <ListItem>
                <ListIcon as={MdComputer} color='green.500' />
                CSS
            </ListItem>
            <ListItem>
                <ListIcon as={MdComputer} color='green.500' />
                SQL
            </ListItem>
            <ListItem>
                <ListIcon as={MdComputer} color='green.500' />
                React
            </ListItem>
            <ListItem>
                <ListIcon as={MdComputer} color='green.500' />
                React Native
            </ListItem>
        </List>
        </Box>
        <Box>
        <Feature
          icon={<Icon as={GiAwareness} w={10} h={10} />}
          title={'Ability and Competence'}
          text={
            'Qualities needed to be able to perform certain behaviors.'
          }
        />
        <List marginTop={'5%'} marginLeft={'37%'} spacing={'3'}>
            <ListItem>
                <ListIcon as={GiAwareness} color='green.500' />
                Teamwork
            </ListItem>
            <ListItem>
                <ListIcon as={GiAwareness} color='green.500' />
                Leadership
            </ListItem>
            <ListItem>
                <ListIcon as={GiAwareness} color='green.500' />
                Problem Solving
            </ListItem>
            <ListItem>
                <ListIcon as={GiAwareness} color='green.500' />
                Time Management
            </ListItem>
            <ListItem>
                <ListIcon as={GiAwareness} color='green.500' />
                Communication
            </ListItem>
            <ListItem>
                <ListIcon as={GiAwareness} color='green.500' />
                Adaptability
            </ListItem>
            <ListItem>
                <ListIcon as={GiAwareness} color='green.500' />
                Detail Oriented
            </ListItem>
            <ListItem>
                <ListIcon as={GiAwareness} color='green.500' />
                Self-Management
            </ListItem>
            <ListItem>
                <ListIcon as={GiAwareness} color='green.500' />
                Self-Confidence
            </ListItem>
            <ListItem>
                <ListIcon as={GiAwareness} color='green.500' />
                Handsome
            </ListItem>
        </List>
        </Box>
        <Box>
        <Feature
          icon={<Icon as={MdLanguage} w={10} h={10} />}
          title={'Laguage Profeciency'}
          text={
            ' Ability to speak a language.'
          }
        />
        <List marginTop={'5%'} marginLeft={'37%'} spacing={'3'}>
            <ListItem>
                <ListIcon as={MdLanguage} color='green.500' />
                English
            </ListItem>
            <ListItem>
                <ListIcon as={MdLanguage} color='green.500' />
                Indonesia
            </ListItem>
        </List>
        </Box>
      </SimpleGrid>
    </Box>
    </Container>
  );
}