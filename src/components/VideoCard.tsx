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
  Link,
} from '@chakra-ui/react'
import { Video } from "../utils/types"
interface Props{
    video: Video
}


export default function blogPostWithImage({video} : Props) {
  return (

    <Center py={6}>
      <Box
        w={{base: '300px', md: '445px'}}
        // eslint-disable-next-line react-hooks/rules-of-hooks
        bg={useColorModeValue('white', 'gray.900')}
        borderColor={'white'}
        borderStyle={'solid'}
        borderWidth={'1px'}
        boxShadow={'2xl'}
        rounded={'md'}
        p={6}
        overflow={'hidden'}>
        <Box bg={'gray.100'} mt={-6} mx={-6} mb={6} pos={'relative'}>
          <Image src={
              video.thumbnailUrl == 'file:///C:/Panopto/Images/no_thumbnail.svg'?
            'https://loremflickr.com/740/416' : video.thumbnailUrl}
            fit={'fill'}
            alt="Example"
          />
        </Box>
        
    <Link href={video.detailUrl} isExternal>
        <Stack>
        <Text  display = {video.thumbnailUrl == 'file:///C:/Panopto/Images/no_thumbnail.svg'?
            '' : 'none'}
        dir='rtl' fontSize={'xx-small'}>* מרצה שלא טרח להעלות תמונה של הוידאו, קיבל חתול.</Text>
      
          <Text
            color={'green.500'}
            textTransform={'uppercase'}
            fontWeight={800}
            fontSize={'sm'}
            letterSpacing={1.1}>
             {video.title}
          </Text>
          <Heading
            // eslint-disable-next-line react-hooks/rules-of-hooks
            color={useColorModeValue('gray.700', 'white')}
            fontSize={'md'}
            fontFamily={'body'}>
                {video.name}
          </Heading>
          <HStack>

          <Text>
            {video.lecturer}
          </Text>
         
        </HStack>
            <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
                <Stack direction={'column'} spacing={0} fontSize={'sm'}>
                
                <Text dir = 'rtl' color={'gray.500'}>
                    תאריך: 
                    {" " + video.date}
                </Text>
                <Text dir = 'rtl' color={'gray.500'}>
                    אורך: 
                    {" " + video.duration}
                </Text>
                
          <Text dir='rtl' fontSize={'small'}> {video.faculty}</Text>
                </Stack>
            </Stack>
            </Stack>
            </Link>
      </Box>
    </Center>
  )
}

// import { Text, Card, CardBody, AspectRatio,HStack, Image, Box, Link } from "@chakra-ui/react"
// import { Video } from "../utils/types"
// interface Props{
//     video: Video
// }
// const VideoCard = ({video} : Props)=>
// (
//     //rendering the object as GameCard from its propertesd
//     // this component styling can and should be imnporoved
//     <Card width='100%' overflow={'hidden'}  padding = {{sm:'10px', lg:0}}borderRadius={'10px'}>
//             <Link href={video.detailUrl} isExternal>
//             <Image width = "100%" h={{sm: 'fr1', lg: '140px'}} objectFit= 'fill' src={video.thumbnailUrl}></Image>
//                 </Link>
//         <CardBody>
//             <Text noOfLines={2} dir='rtl' fontSize={'md'}>{video.name}</Text>
//             <HStack justifyContent='space-between'>
//             <Text noOfLines={2} dir='rtl' fontSize={'small'}>{video.title}</Text>
//             <Text noOfLines={2} dir='rtl' fontSize={{sm: 'xx-small', md: "small"}}>{video.faculty}</Text>
//             </HStack>
//             <HStack justifyContent='space-between'>
//             <Text noOfLines={1} dir='rtl' fontSize={'xx-small'}>{video.date}</Text>
//             <Text noOfLines={1} dir='rtl' fontSize={'xx-small'}>
//                 {video.duration}</Text>
//             </HStack>
//         </CardBody>
//     </Card>
// )
// export default VideoCard