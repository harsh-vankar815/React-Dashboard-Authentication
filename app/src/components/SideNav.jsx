import { Box, Heading, HStack, Icon, Stack, Text } from '@chakra-ui/react';
import { BiSupport } from 'react-icons/bi';
import { BsArrowDownUp } from 'react-icons/bs';
import { RxDashboard } from 'react-icons/rx';
import { Link } from 'react-router-dom';

const SideNav = () => {
    const navLinks = [
        {
            icon: RxDashboard,
            text: "Dashboard",
            link: "/",
        },
        {
            icon: BsArrowDownUp,
            text: "Transactions",
            link: "/transactions",
        },
    ];

    return (
        <Stack bg='white' justifyContent='space-between' boxShadow={{ base: 'none', lg: 'lg' }} w={{ base: 'full', lg: '16rem' }} h='100vh' >
            <Box>
                <Heading textAlign='center' fontSize='20px' as='h1' color={'p.black'} pt='3.5rem'>@CODEWITHHARSH</Heading>
                <Box mt='6' mx='3'>
                    {navLinks.map((nav) => (
                        <Link to={nav.link} key={nav.text}>
                            <HStack borderRadius='10px' color='#797e82' mx='3' py='3' px='4' _hover={{ bg: "#F3F3F7", color: "#171717" }}>
                                <Icon as={nav.icon} />
                                <Text fontSize='14px' fontWeight='medium' >{nav.text}</Text>
                            </HStack>
                        </Link>
                    ))}
                </Box>
            </Box>
            <Box mt='6' mx='3' mb='6'>
                <Link to="/support">
                    <HStack borderRadius='10px' color='#797e82' mx='3' py='3' px='4' _hover={{ bg: "#F3F3F7", color: "#171717" }}>
                        <Icon as={BiSupport} />
                        <Text fontSize='14px' fontWeight='medium' >Support</Text>
                    </HStack>
                </Link>
            </Box>
        </Stack>
    );
};

export default SideNav