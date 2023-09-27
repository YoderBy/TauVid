import { Text, Card, CardBody, AspectRatio,HStack, Image, Box, Link } from "@chakra-ui/react"
import { Video } from "../Hooks/useVideos"

interface Props{
    video: Video
}
const GameCard = ({video} : Props)=>
(
    //rendering the object as GameCard from its propertesd
    // this component styling can and should be imnporoved
    <Card width='100%' overflow={'hidden'}  padding = {{sm:'10px', lg:0}}borderRadius={'10px'}>
            <Link href={video.detailUrl} isExternal>
            <Image width = "100%" maxH={{sm: 'fr1', lg: '200px'}} objectFit= 'fill' src={video.thumbnailUrl}></Image>
                </Link>
        <CardBody>
            <Text noOfLines={2} dir='rtl' fontSize={'md'}>{video.name}</Text>
            <HStack justifyContent='space-between'>
            <Text noOfLines={2} dir='rtl' fontSize={'small'}>{video.title}</Text>
            <Text noOfLines={2} dir='rtl' fontSize={{sm: 'xx-small', md: "small"}}>{video.faculty}</Text>
            </HStack>
        </CardBody>
    </Card>
)
export default GameCard