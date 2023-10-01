import { Text, Card, CardBody, AspectRatio,HStack, Image, Box, Link } from "@chakra-ui/react"
import { Video } from "../utils/types"
interface Props{
    video: Video
}
const GameCard = ({video} : Props)=>
(
    //rendering the object as GameCard from its propertesd
    // this component styling can and should be imnporoved
    <Card width='100%' overflow={'hidden'}  padding = {{sm:'10px', lg:0}}borderRadius={'10px'}>
            <Link href={video.detailUrl} isExternal>
            <Image width = "100%" h={{sm: 'fr1', lg: '140px'}} objectFit= 'fill' src={video.thumbnailUrl}></Image>
                </Link>
        <CardBody>
            <Text noOfLines={2} dir='rtl' fontSize={'md'}>{video.name}</Text>
            <HStack justifyContent='space-between'>
            <Text noOfLines={2} dir='rtl' fontSize={'small'}>{video.title}</Text>
            <Text noOfLines={2} dir='rtl' fontSize={{sm: 'xx-small', md: "small"}}>{video.faculty}</Text>
            </HStack>
            <HStack justifyContent='space-between'>
            <Text noOfLines={1} dir='rtl' fontSize={'xx-small'}>{video.date}</Text>
            <Text noOfLines={1} dir='rtl' fontSize={'xx-small'}>
                {video.duration}</Text>
            </HStack>
        </CardBody>
    </Card>
)
export default GameCard