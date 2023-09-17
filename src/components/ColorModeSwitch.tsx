import { HStack,Text, Switch, useColorMode } from "@chakra-ui/react";

const ColorModeSwitch = () =>{
    const {toggleColorMode, colorMode} = useColorMode();
    return(
        <HStack justifyContent={'space-between'} padding={'10px'}>
            <Switch colorScheme="green" isChecked= {colorMode === 'dark'} onChange={toggleColorMode}></Switch>
            <Text></Text>
        </HStack>
    )
}
export default ColorModeSwitch;