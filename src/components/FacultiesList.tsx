import useFaculties from "../Hooks/useFaculties";
import { Faculty } from "../Hooks/useFaculties";
const FacultiesList = () =>
{
    const genre = useFaculties();
    return (<ul>
        {genre.map(gen=> <li key = {gen.id}>{gen.name}</li>)}
    </ul>
    )
}
export default FacultiesList;