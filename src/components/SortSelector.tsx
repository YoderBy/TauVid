import { Button, Menu, MenuButton, MenuItem, MenuList, Show } from "@chakra-ui/react";
import useFaculties from "../Hooks/useFaculties";
import { FaChevronDown as ChevronDownIcon } from 'react-icons/fa';
import { DisplayQuery, Faculty } from "../utils/types";

interface Props {
    onSelect: (option: string) => void;
    DisplayQuery : DisplayQuery;
}
// should at the end sort the element by parameters, but the wiring to the other component will be pain
const SortSelector = ({ onSelect, DisplayQuery }: Props) => {
    return (
        <Menu>
            <MenuButton  rightIcon={<ChevronDownIcon />} as={Button}>
            מיין על פי תאריך
            </MenuButton> 
            <MenuList>
                <MenuItem onClick={() => onSelect('date')}>תאריך</MenuItem>      
                <MenuItem onClick={() => 
                    onSelect('amount')} display={DisplayQuery.type == 'faculty'? "" : 'none'}>כמות סרטונים</MenuItem>
                <MenuItem onClick={() => 
                    onSelect('duration')} display={DisplayQuery.type == 'course'? "" : 'none'}>אורך</MenuItem>
                <MenuItem onClick={() => 
                    onSelect('lecturer')}>מרצה</MenuItem>
                
            </MenuList>
        </Menu>
    )
}
export default SortSelector;