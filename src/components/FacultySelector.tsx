import { Button, Text, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import useFaculties from "../Hooks/useFaculties";
import { Faculty } from "../utils/types";
import { FaChevronDown as ChevronDownIcon } from 'react-icons/fa';
import { JsonFaculties } from "../Hooks/useFetchObjects";
interface Props {
    selected_Faculty: Faculty | null;
    onSelect: (id: string) => void;
}
// this renders the dropdown and it is absolutly useless and redandent. but I didnt 
// know whaat else to do with it

const FacultySelector = ({ onSelect, selected_Faculty }: Props) => {
    const Faculties = Object.values(JsonFaculties); // generate faculty[] object
    return (
        <Menu>
            <MenuButton rightIcon={<ChevronDownIcon />} as={Button}>{
                selected_Faculty?.name || 'פקולטות'
                //changing the name inside the botton
            }</MenuButton>
            <MenuList>
                {Faculties.map(faculty =>
                    <MenuItem onClick={() => onSelect(faculty.id)} key={faculty.id}>
                        {faculty.name
                            //rendering an endless list
                        }
                        
                        <Text textColor={"transparent"} fontSize={'xx-small'}> {"___"}</Text>
                  
                        <Text fontSize={'xx-small'}>מספר קורסים: {faculty.amount}</Text>
                
                    </MenuItem>)}
            </MenuList>
        </Menu>
    )
}
export default FacultySelector;