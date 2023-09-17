import React from "react";
import logo from '../assets/LOGO.png'
import {HStack, Image} from '@chakra-ui/react'
import ColorModeSwitch from "./ColorModeSwitch";
const NavBar = () => {
    return (
        <HStack>
            <ColorModeSwitch></ColorModeSwitch>
            <Image src = {logo} boxSize ='60px'/>
        </HStack>
    )
}
export default NavBar