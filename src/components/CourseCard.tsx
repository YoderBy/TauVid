'use client'
import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Image,
  Avatar,
  useColorModeValue,
  HStack,
  Button,
} from '@chakra-ui/react'
import { Course, Video } from "../utils/types"

interface Props{
    Course: Course;
    onClick: (course: Course) => void;
}
export default function blogPostWithImage({Course, onClick} : Props) {
  return (
    <Center py={6}>
        <Box
        borderColor={'white'}
        borderStyle={'solid'}
        borderWidth={'1px'}
        h={'400px'}
        w={{base: '350px', md: '445px'}}
        // eslint-disable-next-line react-hooks/rules-of-hooks
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        rounded={'md'}
        p={6}
        overflow={'hidden'}
        position="relative"
        >

        <Stack alignContent={'space-between'}>
        <Heading
            // eslint-disable-next-line react-hooks/rules-of-hooks
            color={useColorModeValue('gray.700', 'white')}
            fontSize={'md'}
            fontFamily={'body'}>
                {Course.name}
        </Heading>
        <Text color={'green.500'}
            fontSize={'sm'}
            letterSpacing={1.1} noOfLines={3}> {Course.lecturer.map(lec=> lec +', ')}</Text>
        
        {/* {Course.lecturer.map(name =>
          <Text
            color={'green.500'}
            textTransform={'uppercase'}
            fontWeight={800}
            fontSize={'sm'}
            letterSpacing={1.1}>
             {name + ','}
          </Text>)
        } */}
        <HStack>
        {Course.date.map(date=>  
        <Text color={'gray.500'}>
            {date + ', '}
        </Text>)}
         </HStack>
          <Text noOfLines={3} dir='rtl' fontSize={'small'}>
            מספר סרטונים:   {Course.ids.length}</Text>
          <Text dir='rtl' fontSize={'small'}> {Course.faculty}</Text>
        </Stack>
        <Button
                onClick={() => onClick(Course)}
                variant='solid'
                colorScheme='blue'
                position="absolute"  // This removes the button from the normal flow of the document
                bottom={4}  // Adjust distance from the bottom as needed
                right={4}  // Adjust distance from the right as needed
            >
              עבור לקורס
            </Button>
      </Box>
    </Center>
  )
}

// import { Text, Card, CardBody, AspectRatio,HStack, Image, Box, Link, Button } from "@chakra-ui/react"
// import { Course } from "../utils/types"
// interface Props{
//     Course: Course;
//     onClick: (course: Course) => void;

// }
// const CourseCard = ({Course, onClick} : Props)=>
// (
//     //rendering the object as GameCard from its propertesd
//     // this component styling can and should be imnporoved because it has no images and no cats
//     <Card width='100%' overflow={''}  padding = {{sm:'10px', lg:0}}borderRadius={'10px'} >
//         <CardBody>
//             <Text noOfLines={2} dir='rtl' fontSize={'md'}>{Course.name}</Text>
//             <HStack justifyContent='space-between'>
//             <Text noOfLines={2} dir='rtl' fontSize={'small'}>{Course.lecturer}</Text>
//             <Text noOfLines={2} dir='rtl' fontSize={{sm: 'xx-small', md: "small"}}>{Course.faculty}</Text>
//             </HStack>
//             <HStack justifyContent='space-between'>
//             <Text noOfLines={3} dir='rtl' fontSize={'xx-small'}> הוקלט בשנים {Course.date}</Text>
//             <Text noOfLines={3} dir='rtl' fontSize={'xx-small'}>
//             מספר סרטונים:   {Course.ids.length}</Text>
//             </HStack>
//             <Button onClick = {() => onClick(Course)} variant='solid' colorScheme='blue'>
//                 עבור לקורס
//             </Button>
//         </CardBody>
//     </Card>
// )
// export default CourseCard