import { Button, Menu, MenuButton, MenuItem, MenuList, Show } from "@chakra-ui/react";
import useFaculties from "../Hooks/useFaculties";
import { FaChevronDown as ChevronDownIcon } from 'react-icons/fa';
import { DisplayQuery, Faculty } from "../utils/types";
import { useState } from "react";

interface Props {
    onSelect: (option: string) => void;
    DisplayQuery : DisplayQuery;
}
// should at the end sort the element by parameters, but the wiring to the other component will be pain
const SortSelector = ({ onSelect, DisplayQuery }: Props) => {
    const [option, setOption] = useState('תאריך'); 
    return (
        <Menu>
            <MenuButton  rightIcon={<ChevronDownIcon />} as={Button}>
            מיין על פי {option}
            </MenuButton> 
            <MenuList>
                <MenuItem onClick={() => {onSelect('date'); setOption('תאריך')}}>תאריך</MenuItem>      
                <MenuItem onClick={() => 
                    {onSelect('amount'); setOption('סרטונים')}} display={DisplayQuery.type == 'faculty'? "" : 'none'}>כמות סרטונים</MenuItem>
                <MenuItem onClick={() => 
                    {onSelect('duration'); setOption('אורך')}} display={DisplayQuery.type == 'course'? "" : 'none'}>אורך</MenuItem>
                <MenuItem onClick={() => 
                    {onSelect('lecturer'); setOption('מרצה')}}>מרצה</MenuItem>
                
            </MenuList>
        </Menu>
    )
}
export default SortSelector;