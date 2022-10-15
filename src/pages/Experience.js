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
    useBreakpointValue,
  } from '@chakra-ui/react';
  import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
  import { MdLocalShipping } from 'react-icons/md';
  
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
              Education
            </Text>
            <br></br>
            <br />{' '}
          </Heading>
        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 18, md: 24 }}>
          <Flex>
            <Image
              rounded={'md'}
              alt={'product image'}
              src={
                'https://images.unsplash.com/photo-1596516109370-29001ec8ec36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyODE1MDl8MHwxfGFsbHx8fHx8fHx8fDE2Mzg5MzY2MzE&ixlib=rb-1.2.1&q=80&w=1080'
              }
              fit={'cover'}
              align={'center'}
              w={'100%'}
              h={{ base: '100%', sm: '400px', lg: '500px' }}
            />
          </Flex>
          <Stack spacing={{ base: 6, md: 10 }}>
            <Box as={'header'}>
              <Heading
                lineHeight={1.1}
                fontWeight={600}
                fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
                Automatic Watch
              </Heading>
              <Text
                color={useColorModeValue('gray.900', 'gray.400')}
                fontWeight={300}
                fontSize={'2xl'}>
                $350.00 USD
              </Text>
            </Box>
  
            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={'column'}
              divider={
                <StackDivider
                  borderColor={useColorModeValue('gray.200', 'gray.600')}
                />
              }>
              <VStack spacing={{ base: 4, sm: 6 }}>
                <Text
                  color={useColorModeValue('gray.500', 'gray.400')}
                  fontSize={'2xl'}
                  fontWeight={'300'}>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore
                </Text>
                <Text fontSize={'lg'}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
                  aliquid amet at delectus doloribus dolorum expedita hic, ipsum
                  maxime modi nam officiis porro, quae, quisquam quos
                  reprehenderit velit? Natus, totam.
                </Text>
              </VStack>
              {/* <Box>
                <Text
                  fontSize={{ base: '16px', lg: '18px' }}
                  color={useColorModeValue('yellow.500', 'yellow.300')}
                  fontWeight={'500'}
                  textTransform={'uppercase'}
                  mb={'4'}>
                  Features
                </Text>
  
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                  <List spacing={2}>
                    <ListItem>Chronograph</ListItem>
                    <ListItem>Master Chronometer Certified</ListItem>{' '}
                    <ListItem>Tachymeter</ListItem>
                  </List>
                  <List spacing={2}>
                    <ListItem>Anti‑magnetic</ListItem>
                    <ListItem>Chronometer</ListItem>
                    <ListItem>Small seconds</ListItem>
                  </List>
                </SimpleGrid>
              </Box> */}
              <Box>
                <Text
                  fontSize={{ base: '16px', lg: '18px' }}
                  color={useColorModeValue('yellow.500', 'yellow.300')}
                  fontWeight={'500'}
                  textTransform={'uppercase'}
                  mb={'4'}>
                  Product Details
                </Text>
  
                <List spacing={2}>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                      Between lugs:
                    </Text>{' '}
                    20 mm
                  </ListItem>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                      Bracelet:
                    </Text>{' '}
                    leather strap
                  </ListItem>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                      Case:
                    </Text>{' '}
                    Steel
                  </ListItem>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                      Case diameter:
                    </Text>{' '}
                    42 mm
                  </ListItem>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                      Dial color:
                    </Text>{' '}
                    Black
                  </ListItem>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                      Crystal:
                    </Text>{' '}
                    Domed, scratch‑resistant sapphire crystal with anti‑reflective
                    treatment inside
                  </ListItem>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                      Water resistance:
                    </Text>{' '}
                    5 bar (50 metres / 167 feet){' '}
                  </ListItem>
                </List>
              </Box>
            </Stack>
  
            <Button
              rounded={'none'}
              w={'full'}
              mt={8}
              size={'lg'}
              py={'7'}
              bg={useColorModeValue('gray.900', 'gray.50')}
              color={useColorModeValue('white', 'gray.900')}
              textTransform={'uppercase'}
              _hover={{
                transform: 'translateY(2px)',
                boxShadow: 'lg',
              }}>
              Add to cart
            </Button>
  
            <Stack direction="row" alignItems="center" justifyContent={'center'}>
              <MdLocalShipping />
              <Text>2-3 business days delivery</Text>
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>
    );
  }





// // const Experience = () => {
// //     return (
        
        
        
        
        
        
        
        
        
        
        
//         // <div>
//         //     <h1>Experience</h1>
//         //     <h2>Comitee Experience</h2>
//         //     <ul>
//         //         <li>
//         //             <h3>Schematics ITS </h3>
//         //             <p>Surabaya, Jawa Timur, Indonesia</p>
//         //             <br></br>
//         //             <ul>
//         //             <li>
//         //             <p>Recording Staff (Mei 2021 - October 2021)</p>
//         //             <p>Responsible for preparing drafted footage in Schematics Reeva.</p>
//         //             </li>
//         //             </ul>
//         //         </li>
//         //         <li>
//         //             <h3>Senyuman SMAN 5 Surabaya</h3>
//         //             <p>Surabaya, Jawa Timur, Indonesia</p>
//         //             <br></br>
//         //             <ul>
//         //         <li>
//         //             <p>Property Staff (2017—2018)</p>
//         //             <p>Responsible for preparing and supplying Senyuman event equipments and needs.</p>
//         //             </li>
//         //             </ul>
//         //         </li>
//         //         <li>
//         //             <h3>Nouveau SMAN 5 Surabaya</h3>
//         //             <p>Surabaya, Jawa Timur, Indonesia</p>
//         //             <br></br>
//         //             <ul>
//         //         <li>
//         //             <p>Property Staff (2017—2018)</p>
//         //             <p>Responsible for preparing and supplying Nouveau event equipments and needs.</p>
//         //             <br></br>
//         //             </li>
//         //         <li>
//         //             <p>Transportation Staff (2018—2019)</p>
//         //             <p>Responsible for setting up vehicles and providing transportation needs for Nouveau events.</p>
//         //             </li>
//         //             </ul>
//         //         </li>
//         //         <li>
//         //             <h3>Eunoia SMAN 5 Surabaya</h3>
//         //             <p>Surabaya, Jawa Timur, Indonesia</p>
//         //             <br></br>
//         //             <ul>
//         //         <li>
//         //             <p>Robotics Event Staff (2018—2019)</p>
//         //             <p>Responsible for designing and organizing Robotics competition events in Eunoia.</p>
//         //             </li>
//         //             </ul>
//         //         </li>
//         //     </ul>
//         // </div>
//     )
// }

// export default Experience;