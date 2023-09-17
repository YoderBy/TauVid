import React from "react";
import logo from '../assets/LOGO.png'
import {HStack, Heading, Image} from '@chakra-ui/react'
import ColorModeSwitch from "./ColorModeSwitch";
const NavBar = () => {
    return (
        <HStack>
            <ColorModeSwitch></ColorModeSwitch>
            <Heading alignSelf={'center'}>יוסף בן יהודה</Heading>
        </HStack>
    )
}
export default NavBar