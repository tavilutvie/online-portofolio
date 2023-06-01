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

const Links = ['About', 'Personality', 'Education', 'Awards', 'Experience', 'Skills', 'Contact'];

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
                        <HStack
                        as={'nav'}
                        spacing={4}
                        display={{ base: 'none', md: 'flex' }}>
                            <a href="/"><img width={'40px'} className="home"  src="favicon.ico" alt="home" /></a>
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
                                    <Link href="/" isExternal><MenuItem>My Portofolio</MenuItem></Link>
                                    {/* <Link href="https://sop.tavilutvie.dev/" isExternal><MenuItem>My Secondary Portofolio</MenuItem></Link> */}
                                    <MenuDivider />
                                    <Link href="https://rrg.tavilutvie.dev/" isExternal><MenuItem>Random Recipe Generator</MenuItem></Link>
                                </MenuList>
                            </Menu>
                        </Stack>
                    </Flex>
                </Flex>

                {isOpen ? (
                <Box pb={4} display={{ md: 'none' }}>
                    <Stack as={'nav'} spacing={4}>
                    <a href="/"><img width={'40px'} className="home"  src="favicon.ico" alt="home" /></a>
                        {Links.map((link) => (
                            <NavLink key={link}>{link}</NavLink>
                        ))}
                    </Stack>
                </Box>
                ) : null}
            </Box>
        </>
    );
}