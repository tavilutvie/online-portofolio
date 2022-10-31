import { Box, SimpleGrid, Icon, Text, Stack, Flex, List, ListItem, ListIcon, Container, Heading, useBreakpointValue } from '@chakra-ui/react';
import { GiPowerLightning, GiBackstab } from 'react-icons/gi';

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
      <Text color={'green.500'} textAlign={'center'} fontWeight={600}>{title}</Text>
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
          Personality
        </Text>
        <br></br>
        <br />{' '}
        </Heading>
        <Text textAlign={'center'}>
            <br></br>
            According to the MBTI test, I have an ISTP-T personality with an explorer role and constant improvement strategy, which means I have the following traits.
        </Text>
    <Box p={4} paddingLeft={'50px'} marginTop={'10'}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Box>
        <Feature
          icon={<Icon as={GiPowerLightning} w={10} h={10} />}
          title={'Strength'}
        />
        <List 
        marginTop={'5%'}
        spacing={'3'}
        align={'center'} 
        >
            <ListItem>
              <ListIcon as={GiPowerLightning} color='green.500' />
              Spontaneous and Rational
            </ListItem>
            <ListItem>
              <ListIcon as={GiPowerLightning} color='green.500' />
              Optimistic and Energetic
            </ListItem>
            <ListItem>
              <ListIcon as={GiPowerLightning} color='green.500' />
              Know How to Prioritize
            </ListItem>
            <ListItem>
              <ListIcon as={GiPowerLightning} color='green.500' />
              Creative and Practical
            </ListItem>
            <ListItem>
              <ListIcon as={GiPowerLightning} color='green.500' />
              Great in a Crisis
            </ListItem>
            <ListItem>
              <ListIcon as={GiPowerLightning} color='green.500' />
              Relaxed
            </ListItem>
        </List>
        </Box>
        <Box>
        <Feature
          icon={<Icon as={GiBackstab} w={10} h={10} />}
          title={'Weakness'}
        />
        <List 
        marginTop={'5%'}
        spacing={'3'}
        align={'center'} 
        >
            <ListItem>
                <ListIcon as={GiBackstab} color='green.500' />
                Private and Reserved
            </ListItem>
            <ListItem>
                <ListIcon as={GiBackstab} color='green.500' />
                Dislike Commitment
            </ListItem>
            <ListItem>
                <ListIcon as={GiBackstab} color='green.500' />
                Risky Behavior
            </ListItem>
            <ListItem>
                <ListIcon as={GiBackstab} color='green.500' />
                Easily Bored
            </ListItem>
            <ListItem>
                <ListIcon as={GiBackstab} color='green.500' />
                Insensitive
            </ListItem>
            <ListItem>
                <ListIcon as={GiBackstab} color='green.500' />
                Stubborn
            </ListItem>
        </List>
        </Box>
      </SimpleGrid>
    </Box>
    </Container>
  );
}