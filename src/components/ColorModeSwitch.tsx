import { HStack,Text, Switch, useColorMode } from "@chakra-ui/react";

const ColorModeSwitch = () =>{
    const {toggleColorMode, colorMode} = useColorMode();
    return(
        <HStack justifyContent={'space-between'}>
            <Switch colorScheme="green" isChecked= {colorMode === 'dark'} onChange={toggleColorMode}></Switch>
            <Text></Text>
        </HStack>
    )
}
export default ColorModeSwitch;