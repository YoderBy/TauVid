import { List, Text, ListItem, Button } from "@chakra-ui/react";
import useFaculties from "../Hooks/useFaculties";
import { Faculty } from "../Hooks/useFaculties";
interface Props {
    isOpen: boolean;
    onSelect: (faculty: Faculty) => void;
}
const FacultiesList = ({ onSelect, isOpen }: Props) => {
    const display = isOpen ? "closedSideBar" : "openedSideBar";
    const genre = useFaculties();
    return (
        <List >
            {genre.map(gen => 
            <ListItem paddingY={'10px'} key={gen.id}>
                <Button variant='link' onClick={() => onSelect(gen)} fontSize={'xx-small'}>
                    {gen.name}
                </Button>
            </ListItem>)}
        </List>
    )
}
export default FacultiesList;