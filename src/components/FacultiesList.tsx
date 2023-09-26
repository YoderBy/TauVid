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
        <List overflowWrap={'break-word'} w={{ base: "100px", md: "200px" }}>
            {genre.map(gen =>
                <ListItem  border="1px" paddingY={'10px'} key={gen.id}>
                    <Button maxWidth="100%"  // Set maximum width
                        whiteSpace="normal" variant='link' onClick={() => onSelect(gen)} fontSize={{ base: "10px", md: "15px" }}>
                        {gen.name}
                    </Button>
                </ListItem>)}
        </List>
    )
}
export default FacultiesList;