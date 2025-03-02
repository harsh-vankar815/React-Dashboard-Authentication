import { Box, Button, Heading, HStack, Icon, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { FaBars } from 'react-icons/fa'
import { FaCircleUser } from 'react-icons/fa6'
import useAuth from '../hooks/useAuth'

const TopNav = ({ title, onOpen }) => {
    const {logout} = useAuth()
    return (
        <Box px='4' bg='white'>
            <HStack mx='auto' maxW='70rem' h='16' justify='space-between'>
                <Icon as={FaBars} onClick={onOpen} display={{
                    base: "block",
                    lg: 'none',
                }} />
                <Heading fontWeight='medium' fontSize='28px' color={'p.black'}>{title}</Heading>
                <Menu>
                    <MenuButton as={Button}>
                        <Icon fontSize='24px' as={FaCircleUser} />
                    </MenuButton>
                    <MenuList>
                        <MenuItem onClick={logout}>Logout</MenuItem>
                        <MenuItem>Support</MenuItem>
                    </MenuList>
                </Menu>
            </HStack>
        </Box>
    )
}

export default TopNav

// STOPPED: 40:00