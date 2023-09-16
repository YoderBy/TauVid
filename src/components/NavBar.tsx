import React from "react";
import logo from '../assets/LOGO.png'
import {HStack, Image} from '@chakra-ui/react'
const NavBar = () => {
    return (
        <HStack>
            <Image src = {logo} boxSize ='60px'>

            </Image>
        </HStack>
    )
}
export default NavBar