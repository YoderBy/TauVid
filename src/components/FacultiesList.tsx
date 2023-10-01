import { List, Text, ListItem, Button } from "@chakra-ui/react";
import useFaculties from "../Hooks/useFaculties";

import { Faculty } from "../utils/types";
import { JsonFaculties } from "../Hooks/useFetchObjects";
interface Props {
    selectedFaculty: Faculty | null;
    onSelect: (id: string) => void;
}
const FacultiesList = ({ onSelect, selectedFaculty }: Props) => {
    const genre = Object.values(JsonFaculties); // generate faculty[] object
    return (
        <List overflowWrap={'break-word'} w={{ base: "100px", md: "200px" }}>
            {genre.map(gen =>
                <ListItem
                    background={gen.id === selectedFaculty?.id ? '#f8f8ff' : ''}
                    border="1px" paddingY={'10px'} key={gen.id}>
                    <Button
                        maxWidth="100%" whiteSpace="normal" variant='link'
                        fontWeight={gen.id === selectedFaculty?.id ? 'bold' : 'normal'}
                        color={gen.id === selectedFaculty?.id ? 'black' : ''}
                        onClick={() => onSelect(gen.id)} fontSize={{ base: "10px", md: "15px" }}>
                        {gen.name}
                    </Button>
                    <Text font-size={'xx-small'}>מספר קורסים: {gen.amount}</Text>
                </ListItem>)}
        </List>
    )
}
export default FacultiesList;