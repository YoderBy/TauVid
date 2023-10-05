import { Text, Card, CardBody, AspectRatio,HStack, Image, Box, Link, Button } from "@chakra-ui/react"
import { Course } from "../utils/types"
interface Props{
    Course: Course;
    onClick: (course: Course) => void;

}
const CourseCard = ({Course, onClick} : Props)=>
(
    //rendering the object as GameCard from its propertesd
    // this component styling can and should be imnporoved because it has no images and no cats
    <Card maxWidth = {{base:'80%', md: '100%'}} width='100%' overflow={''}  padding = {{sm:'10px', lg:0}}borderRadius={'10px'} >
        <CardBody>
            <Text noOfLines={2} dir='rtl' fontSize={'md'}>{Course.name}</Text>
            <HStack justifyContent='space-between'>
            <Text noOfLines={2} dir='rtl' fontSize={'small'}>{Course.lecturer}</Text>
            <Text noOfLines={2} dir='rtl' fontSize={{sm: 'xx-small', md: "small"}}>{Course.faculty}</Text>
            </HStack>
            <HStack justifyContent='space-between'>
            <Text noOfLines={3} dir='rtl' fontSize={'xx-small'}> הוקלט בשנים {Course.date}</Text>
            <Text noOfLines={3} dir='rtl' fontSize={'xx-small'}>
            מספר סרטונים:   {Course.ids.length}</Text>
            </HStack>
            <Button onClick = {() => onClick(Course)} variant='solid' colorScheme='blue'>
                עבור לקורס
            </Button>
        </CardBody>
    </Card>
)
export default CourseCard