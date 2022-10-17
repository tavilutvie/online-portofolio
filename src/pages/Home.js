import {
    Stack,
    Flex,
    Button,
    Text,
    VStack,
    useBreakpointValue,
  } from '@chakra-ui/react';
  
  export default function Home() {
    return (
      <Flex
        w={'full'}
        h={'100vh'}
        backgroundImage={'images/foto9.jpg'}
        backgroundSize={'cover'}
        backgroundPosition={'center center'}>
        <VStack
          w={'full'}
          justify={'center'}
          px={useBreakpointValue({ base: 4, md: 8 })}
          bgGradient={'linear(to-r, blackAlpha.600, transparent)'}>
          <Stack textAlign={'center'} maxW={'2xl'} align={'center'} spacing={6}>
            <Text
                color={'white'}
                fontWeight={700}
                lineHeight={1.2}
                fontSize={useBreakpointValue({ base: '5xl', md: '7xl' })}>
                WELCOME TO MY WEBSITE
            </Text>
            <Text
                color={'white'}
                fontWeight={200}
                lineHeight={0.8}
                fontSize={useBreakpointValue({ base: 'md', md: 'lg' })}>
                click the buttons below to see more about me
            </Text>
            <Stack direction={'row'}>
            <a href="about">
                <Button
                    bg={'blue.400'}
                    rounded={'full'}
                    color={'white'}
                    _hover={{ bg: 'blue.500' }}>
                    Show me more
                </Button>
            </a>
              
            </Stack>
          </Stack>
        </VStack>
      </Flex>
    );
  }