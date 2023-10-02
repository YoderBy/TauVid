// NavBar.tsx

import React from "react";
import logo from '../assets/LOGO.png'
import { HStack, Heading, Image, Button } from '@chakra-ui/react'
import ColorModeSwitch from "./ColorModeSwitch";

interface Props {
  onRefresh: () => void;
  
}

const NavBar: React.FC<Props> = ({ onRefresh }) => {
  return (

    <HStack justifyContent={'space-between'} padding={'10px'}>

      <ColorModeSwitch />
      <Heading fontSize={{sm:'sm',md:'xl', lg:"xl"}}>יוסף בן יהודה</Heading>

    </HStack>
  );
}

export default NavBar;
