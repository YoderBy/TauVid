import { List, Text, ListItem, Button } from "@chakra-ui/react";
import useFaculties from "../Hooks/useFaculties";

import { Faculty, JsonFaculty } from "../utils/types";
import { JsonFaculties } from "../Hooks/useFetchObjects";
interface Props {
    selectedFaculty: Faculty | null;
    onSelect: (id: string) => void;
}
// this shoud be sorted by video amnout, this renders the side faculties and allow to choose
//right now the color isnt chaneging - will be fixed
const FacultiesList = ({ onSelect, selectedFaculty }: Props) => {
    const genre = Object.values(JsonFaculties).sort((faculty1: JsonFaculty, faculty2: JsonFaculty)=> faculty2.ids.length - faculty1.ids.length); // generate faculty[] object and sort it
    
    return (
        <List overflowWrap={'break-word'} maxWidth= {"200px" }>
            {genre.map(gen =>
                <ListItem
                    background={gen.id === selectedFaculty?.id ? '#f8f8ff' : ''}
                    border="1px" paddingY={'10px'} key={gen.id}>
                    <Button textAlign={'right'}
                        maxWidth="100%" whiteSpace="normal" variant='link'
                        fontWeight={gen.id === selectedFaculty?.id ? 'bold' : 'normal'}
                        color={gen.id === selectedFaculty?.id ? 'black' : ''}
                        onClick={() => onSelect(gen.id)} fontSize={{ base: "10px", md: "15px" }}>
                        {gen.name}
                    </Button>
                    <Text fontSize={'xx-small'}>מספר קורסים: {gen.ids.length}</Text>
                </ListItem>)}
        </List>
    )
}
export default FacultiesList;