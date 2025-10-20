import {
  Box,
  Button,
  VStack,
  Icon,
  Text,
  Link,
} from '@chakra-ui/react'
import {
  DrawerBackdrop,
  DrawerBody,
  DrawerCloseTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerRoot,
} from '@chakra-ui/react'
import { GiCaravel } from "react-icons/gi";
import { DiFirebase } from "react-icons/di";
import { AiOutlineHome } from 'react-icons/ai'
import { TbArrowsDownUp } from 'react-icons/tb'
import { HiOutlineUser } from 'react-icons/hi'

interface Props {
    onClose: () => void,
    isOpen: boolean,
    variant: 'drawer' | 'sidebar'
}

const LinkStyle = {
    textDecoration: 'none',
    color: 'gray',
    '&:hover': {
        color: 'blue',
    },
    fontSize: '1.2rem',
    margin: '17px',
}

const SidebarContent = ({ onClick }: {onClick: () => void}) => (
    <VStack align="start">
        <Box mb={16}>
            <Text fontSize='xl' fontWeight='bold' color='cyan.500'>
                <Icon as={GiCaravel} w={10} h={10} />InsightDock
            </Text>
        </Box>
        <Link href="#" style={LinkStyle}>
            <Icon as={AiOutlineHome} w={6} h={6} mr={4}/>
            Home
        </Link>
        <Link href="#" style={LinkStyle}>
            <Icon as={TbArrowsDownUp} w={6} h={6} mr={4}/>
            Transactions
        </Link>
        <Link href="#" style={LinkStyle}>
            <Icon as={DiFirebase} w={6} h={6} mr={4}/>
            DataBase
        </Link>
        <Link href="#" style={LinkStyle}>
            <Icon as={HiOutlineUser} w={6} h={6} mr={4}/>
            Profile
        </Link>
    </VStack>
)

const Sidebar = ({ isOpen, variant, onClose}: Props) => {
    return variant === 'sidebar' ? (
        <Box
            position="fixed"
            left={0}
            p={5}
            w="266px"
            top={0}
            h="100%"
            bg="white"
            boxShadow="dark-lg"
        >
            <SidebarContent onClick={onClose}/>
        </Box>
    ) : (
        <DrawerRoot open={isOpen} placement="start" onOpenChange={(e) => !e.open && onClose()} size="full">
            <DrawerBackdrop />
            <DrawerContent>
                <DrawerCloseTrigger />
                <DrawerBody>
                    <SidebarContent onClick={onClose}/>
                </DrawerBody>
            </DrawerContent>
        </DrawerRoot>
    )
}

export default Sidebar