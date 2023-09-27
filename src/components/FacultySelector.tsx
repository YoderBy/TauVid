import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import useFaculties, { Faculty } from "../Hooks/useFaculties";
import { FaChevronDown as ChevronDownIcon } from 'react-icons/fa';
interface Props {
    selected_Faculty : Faculty|null;
    onSelect: (Faculty: Faculty) => void;
}

const FacultySelector = ({ onSelect, selected_Faculty }: Props) => {
    const Faculties = useFaculties();
    return (
        <Menu>
            <MenuButton  rightIcon={<ChevronDownIcon />} as={Button}>{
            selected_Faculty?.name || 'פקולטות'}</MenuButton>
            <MenuList>
                {Faculties.map(faculty => 
                <MenuItem onClick={() => onSelect(faculty)} key={faculty.id}>
                    {faculty.name}
                </MenuItem>)}
            </MenuList>
        </Menu>
    )
}
export default FacultySelector;