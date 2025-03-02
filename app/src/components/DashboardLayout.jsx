import { Box, Container, Flex, useDisclosure } from "@chakra-ui/react"
import TopNav from "./TopNav"
import SideNav from "./SideNav"
import SideDrawer from "./SideDrawer"

const DashboardLayout = ({ title, children }) => {
    const { isOpen, onClose, onOpen } = useDisclosure()

    return (
        <Flex>
            <Box display={{
                base: "none",
                lg: 'flex'
            }}>
                <SideNav />
            </Box>
            <SideDrawer isOpen={isOpen} onClose={onClose} />
            <Box flexGrow='1'>
                <TopNav title={title} onOpen={onOpen} />
                <Container overflowX='hidden' overflowY="auto" h="calc(100vh - 88px)" maxWidth="70rem" mt='6'>{children}</Container>
            </Box>
        </Flex>
    )
}

export default DashboardLayout