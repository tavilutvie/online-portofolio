import React from 'react';
import {
    Box,
    Flex,
    Avatar,
    HStack,
    Link,
    IconButton,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    useDisclosure,
    useColorModeValue,
    Stack,
    useColorMode,
    Center,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';
import {Route, Routes,} from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Awards from '../pages/Awards';
import Education from '../pages/Education';
import Experience from '../pages/Experience';
import Contact from '../pages/Contact';
import Skills from '../pages/Skills';

const Links = ['About', 'Education', 'Awards', 'Experience', 'Skills', 'Contact'];

const NavLink = ({ children }) => (
    <Link
        px={2}
        py={1}
        rounded={'md'}
        _hover={{
        textDecoration: 'none',
        bg: useColorModeValue('gray.200', 'gray.700'),
        }}
        href={children}>
        {children}
    </Link>
);

export default function Navbar() {
    const { colorMode, toggleColorMode } = useColorMode();
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                <IconButton
                    size={'md'}
                    icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                    aria-label={'Open Menu'}
                    display={{ md: 'none' }}
                    onClick={isOpen ? onClose : onOpen}
                />
                <HStack spacing={8} alignItems={'center'}>
                    <Box>
                        <a href="https://www.tavilutvie.dev/"><img className="home"  src="images/home.png" alt="home" /></a>
                    </Box>
                    <HStack
                    as={'nav'}
                    spacing={4}
                    display={{ base: 'none', md: 'flex' }}>
                        {Links.map((link) => (
                            <NavLink key={link}>{link}</NavLink>
                        ))}
                    </HStack>
                </HStack>
                <Flex alignItems={'center'}>
                <Stack direction={'row'} spacing={7}>
                    <Button onClick={toggleColorMode}>
                        {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                    </Button>
                    <Menu>
                    <MenuButton
                        as={Button}
                        rounded={'full'}
                        variant={'link'}
                        cursor={'pointer'}
                        minW={0}>
                            <Center>
                                <Avatar
                                className='avatar'
                                size={'sm'}
                                src={'images/foto6.jpg'}
                                />
                            </Center>
                    </MenuButton>
                    <MenuList >
                        <Center>
                            <Avatar
                            className='avatar'
                            size={'2xl'}
                            src={'images/foto6.jpg'}
                            />
                        </Center>
                        <MenuDivider />
                        <Center>
                            <p>Eldenabih Tavirazin Lutvie</p>
                        </Center>
                        <MenuDivider />
                        <MenuItem>Link 1</MenuItem>
                        <MenuItem>Link 2</MenuItem>
                        <MenuDivider />
                        <MenuItem>Link 3</MenuItem>
                    </MenuList>
                    </Menu>
                    </Stack>
                </Flex>
                </Flex>

                {isOpen ? (
                <Box pb={4} display={{ md: 'none' }}>
                    <Stack as={'nav'} spacing={4}>
                        {Links.map((link) => (
                            <NavLink key={link}>{link}</NavLink>
                        ))}
                    </Stack>
                </Box>
                ) : null}
            </Box>
            <Box p={4}>
            <div class='split content'>
          <main>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/About' element={<About />} />
              <Route path='/Awards' element={<Awards />} />
              <Route path='/Education' element={<Education />} />
              <Route path='/Experience' element={<Experience />} />
              <Route path='/Contact' element={<Contact />} />
              <Route path='/Skills' element={<Skills />} />
            </Routes>
          </main>
        </div>
            </Box>
        </>
    );
}