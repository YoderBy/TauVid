
import {
    IconButton,
    Avatar,
    Box,
    CloseButton,
    Flex,
    HStack,
    VStack,
    Icon,
    useColorModeValue,
    Text,
    Drawer,
    DrawerContent,
    useDisclosure,
    BoxProps,
    FlexProps,
    Menu,
    MenuButton,
    MenuDivider,
    MenuItem,
    MenuList,
    Button,
} from '@chakra-ui/react'
import {
    FiHome,
    FiTrendingUp,
    FiCompass,
    FiStar,
    FiSettings,
    FiMenu,
    FiBell,
    FiChevronDown,
} from 'react-icons/fi'
import { IconType } from 'react-icons'
import { JsonFaculties } from '../Hooks/useFetchObjects'
import { Console } from 'console'
import { Course } from '../utils/types'

export interface LinkItemProps {
    amount: number;
    name: string
    icon: IconType
    id: string
}

export interface NavItemProps extends FlexProps {

    icon: IconType
    children: React.ReactNode
}
interface realNavItemProps extends NavItemProps {
    onSelectItem: (id: string) => void;
    id: string;
}
export interface MobileProps extends FlexProps {
    onOpen: () => void
}

export interface SidebarProps extends BoxProps {
    onClose: () => void
}
interface realSideBarProps extends SidebarProps {
    onSelectItem: (id: string) => void;
}
interface SideBarHeaderProps {
    onSelectItem: (id: string) => void;
    isOpen: boolean;
    onOpen: ()=> void;
    onClose: ()=> void;
    
}

const LinkItems: Array<LinkItemProps> =
    Object.values(JsonFaculties).map(faculty =>
        ({ 'name': faculty.name, 'icon': FiStar, 'id': faculty.id, 'amount': faculty.amount })).sort((Object1 : any, Object2 : any) => Object2.amount - Object1.amount);

const SidebarContent = ({ onSelectItem, onClose, ...rest }: realSideBarProps) => {
    return (
        <Box
            transition="3s ease"
            bg={useColorModeValue('white', 'gray.900')}
            borderRight="1px"
            borderRightColor={useColorModeValue('gray.200', 'gray.700')}
            w={{ base: 'full', md: "100%" }}
            //w = '100%'
            {...rest}>
            {<CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />}

            {LinkItems.map((link) => (
                <NavItem id={link.id} onSelectItem={() => {
                    onClose()
                    onSelectItem(link.id)
                }
                } key={link.name} icon={link.icon}>
                    <VStack alignItems={'right'}>
                        <Text>
                            {link.name}
                        </Text>
                        <Text fontSize={'x-small'}>
                            מספר קורסים זמינים {link.amount}
                        </Text>
                    </VStack>
                </NavItem>
            ))}
        </Box>
    )
}

const NavItem = ({ onSelectItem, id, icon, children, ...rest }: realNavItemProps) => {

    return (
        <Box
            onClick={(e: React.MouseEvent<HTMLElement, MouseEvent>) => {

                console.log(id);
                onSelectItem(id);
            }}
            as="a"
            href="#"
            style={{ textDecoration: 'none' }}
            _focus={{ boxShadow: 'none' }}>
            <Flex
                align="center"
                p="4"
                mx="4"
                borderRadius="lg"
                role="group"
                cursor="pointer"
                _hover={{
                    bg: 'cyan.400',
                    color: 'white',
                }}
                {...rest}>

                {children}
            </Flex>
        </Box>
    )
}
export const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
    return (
        <Flex
            ml={{ base: 0, md: 60 }}
            px={{ base: 4, md: 4 }}
            alignItems="center"
            bg={useColorModeValue('white', 'gray.900')}
            borderBottomWidth="1px"
            borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
            justifyContent={{ base: 'space-between', md: 'flex-end' }}
            {...rest}>
            <Button
                display={{ base: 'flex', md: 'none' }}
                onClick={onOpen}
                
            >בחרו פקולטה</Button>
        </Flex>
    )
}

const SidebarWithHeader = ({isOpen,onClose,onOpen, onSelectItem }: SideBarHeaderProps) => {
    
    return (
        <Box maxWidth={ {md: "200px" }} minH="100vh" bg={useColorModeValue('gray.100', 'gray.900')}>
            <SidebarContent onSelectItem={onSelectItem} onClose={() => onClose}
                display={{ base: 'none'/*none*/, md: 'block' }} />

            <Drawer
                isOpen={isOpen}
                placement="right"
                onClose={onClose}
                returnFocusOnClose={false}
                onOverlayClick={onClose}
                preserveScrollBarGap={true}
            >

                <DrawerContent
                    overflow={'scroll'}
                    dir='rtl'>
                    <SidebarContent onSelectItem={onSelectItem} onClose={onClose} />
                </DrawerContent>
            </Drawer>
            {/* mobilenav */}
            <Box ml={{ base: 0 /*0*/, md: 60 }} p="4">
                {/* Content */}
            </Box>
        </Box>
    )
}

export default SidebarWithHeader