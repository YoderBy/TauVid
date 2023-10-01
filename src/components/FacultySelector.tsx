import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import useFaculties from "../Hooks/useFaculties";
import { Faculty } from "../utils/types";
import { FaChevronDown as ChevronDownIcon } from 'react-icons/fa';
interface Props {
    selected_Faculty: Faculty | null;
    onSelect: (Faculty: Faculty) => void;
}

const FacultySelector = ({ onSelect, selected_Faculty }: Props) => {
    const Faculties = useFaculties();
    return (
        <Menu>
            <MenuButton rightIcon={<ChevronDownIcon />} as={Button}>{
                selected_Faculty?.name || 'פקולטות'
                //changing the name inside the botton
            }</MenuButton>
            <MenuList>
                {Faculties.map(faculty =>
                    <MenuItem onClick={() => onSelect(faculty)} key={faculty.id}>
                        {faculty.name
                            //rendering an endless list
                        }
                    </MenuItem>)}
            </MenuList>
        </Menu>
    )
}
export default FacultySelector;