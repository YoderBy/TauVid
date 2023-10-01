import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import useFaculties from "../Hooks/useFaculties";
import { FaChevronDown as ChevronDownIcon } from 'react-icons/fa';
import { Faculty } from "../utils/types";

interface Props {
    selected_Faculty : Faculty|null;
    onSelect: (Faculty: Faculty) => void;
}

const SortSelector = ({ onSelect, selected_Faculty }: Props) => {
    const Faculties = useFaculties();
    return (
        <Menu>
            <MenuButton  rightIcon={<ChevronDownIcon />} as={Button}>
            order by Relevane
            </MenuButton> 
            <MenuList>
                <MenuItem>Relevance</MenuItem>
                <MenuItem>Date</MenuItem>
                <MenuItem>Name</MenuItem>
                <MenuItem>Length</MenuItem>
                <MenuItem>Lecuture</MenuItem>
                
            </MenuList>
        </Menu>
    )
}
export default SortSelector;