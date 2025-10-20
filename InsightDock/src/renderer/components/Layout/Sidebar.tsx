import {
  Box,
  Button,
  Drawer,
  DrawerOverlay,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerContent,
  VStack,
  Icon,
  Highlight,
  Text,
  Link,
} from '@chakra-ui/react'
import { BsWallet2 } from 'react-icons/bs'
import { AiOutlineHome } from 'react-icons/ai'
import { TbArrowsDownUp } from 'react-icons/tb'
import { HiOutlineUser } from 'react-icons/hi'

interface props {
    onClose: Function,
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


const SidebarContent = ({ onClick }: {onClick: Function}) => {
    <VStack align="">
        <Box mb={16}>
            <Text fontSize='xl' fontWeight='bold' color='cyan.500'>

            </Text>
        </Box>
    </VStack>
} 