import { Box, SimpleGrid, Icon, Text, Stack, Flex, List, ListItem, ListIcon } from '@chakra-ui/react';
import { GiPsychicWaves } from 'react-icons/gi';
import { MdCheckCircle, MdComputer, MdLanguage } from 'react-icons/md';

const Feature = ({ title, text, icon }) => {
  return (
    <Stack>
      <Flex
        w={16}
        h={16}
        align={'center'}
        justify={'center'}
        color={'white'}
        rounded={'full'}
        bg={'blue.600'}
        borderRadius="25%"
        mb={1}>
        {icon}
      </Flex>
      <Text fontWeight={600}>{title}</Text>
      <Text color={'gray.600'}>{text}</Text>
    </Stack>
  );
};

export default function Skills() {
  return (
    <Box p={4} paddingLeft={'25px'} marginLeft={'25px'}
    >
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        <Box>
        <Feature
          icon={<Icon as={MdComputer} w={10} h={10} />}
          title={'Programming Language'}
          text={
            'System of notation for writing computer programs.'
          }
        />
        <List spacing={'3'}>
            <ListItem>
                <ListIcon as={MdCheckCircle} color='green.500' />
                C
            </ListItem>
            <ListItem>
                <ListIcon as={MdCheckCircle} color='green.500' />
                C++
            </ListItem>
            <ListItem>
                <ListIcon as={MdCheckCircle} color='green.500' />
                Java
            </ListItem>
            <ListItem>
                <ListIcon as={MdCheckCircle} color='green.500' />
                Javascript
            </ListItem>
            <ListItem>
                <ListIcon as={MdCheckCircle} color='green.500' />
                Python
            </ListItem>
            <ListItem>
                <ListIcon as={MdCheckCircle} color='green.500' />
                HTML
            </ListItem>
            <ListItem>
                <ListIcon as={MdCheckCircle} color='green.500' />
                CSS
            </ListItem>
        </List>
        </Box>
        <Box>
        <Feature
          icon={<Icon as={GiPsychicWaves} w={10} h={10} />}
          title={'Ability and Competence'}
          text={
            'Qualities needed to be able to perform certain behaviors.'
          }
        />
        <List spacing={'3'}>
            <ListItem>
                <ListIcon as={MdCheckCircle} color='green.500' />
                Teamwork
            </ListItem>
            <ListItem>
                <ListIcon as={MdCheckCircle} color='green.500' />
                Leadership
            </ListItem>
            <ListItem>
                <ListIcon as={MdCheckCircle} color='green.500' />
                Problem Solving
            </ListItem>
            <ListItem>
                <ListIcon as={MdCheckCircle} color='green.500' />
                Time Management
            </ListItem>
            <ListItem>
                <ListIcon as={MdCheckCircle} color='green.500' />
                Communication
            </ListItem>
            <ListItem>
                <ListIcon as={MdCheckCircle} color='green.500' />
                Adaptability
            </ListItem>
            <ListItem>
                <ListIcon as={MdCheckCircle} color='green.500' />
                Detail Oriented
            </ListItem>
            <ListItem>
                <ListIcon as={MdCheckCircle} color='green.500' />
                Self-Management
            </ListItem>
            <ListItem>
                <ListIcon as={MdCheckCircle} color='green.500' />
                Self-Confidence
            </ListItem>
            <ListItem>
                <ListIcon as={MdCheckCircle} color='green.500' />
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
        <List spacing={'3'}>
            <ListItem>
                <ListIcon as={MdCheckCircle} color='green.500' />
                English
            </ListItem>
            <ListItem>
                <ListIcon as={MdCheckCircle} color='green.500' />
                Indonesia
            </ListItem>
        </List>
        </Box>
      </SimpleGrid>
    </Box>
  );
}