import { List, Text, ListItem } from "@chakra-ui/react";
import useFaculties from "../Hooks/useFaculties";
import { Faculty } from "../Hooks/useFaculties";
const FacultiesList = () =>
{
    const genre = useFaculties();
    return (<List >
        {genre.map(gen=> <ListItem paddingY = {'10px'}  key = {gen.id}>
        <Text fontSize={'sm'}>   
            {gen.name}
        </Text>
        </ListItem>)}
    </List>
    )
}
export default FacultiesList;