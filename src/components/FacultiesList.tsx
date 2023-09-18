import { List, Text, ListItem, Button } from "@chakra-ui/react";
import useFaculties from "../Hooks/useFaculties";
import { Faculty } from "../Hooks/useFaculties";
interface Props
{
    onSelect: (faculty: Faculty)=>void;
}
const FacultiesList = ({onSelect}: Props) =>
{
    const genre = useFaculties();
    return (<List >
        {genre.map(gen=> <ListItem paddingY = {'10px'}  key = {gen.id}>
        <Button variant = 'link' onClick={()=>onSelect(gen)} fontSize={'sm'}>   
            {gen.name}
        </Button>
        </ListItem>)}
    </List>
    )
}
export default FacultiesList;