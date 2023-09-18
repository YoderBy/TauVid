import { Text, Card, CardBody, AspectRatio,HStack, Image, Box, Link } from "@chakra-ui/react"
import { Video } from "../Hooks/useVideos"

interface Props{
    video: Video
}
const GameCard = ({video} : Props)=>(
    <Card width='100%' overflow={'hidden'} borderRadius={'10px'}>
            <Link href={video.detailUrl} isExternal>
            <Image maxH={{sm: 'fr1', md: '200px'}} objectFit='cover' src={video.thumbnailUrl}></Image>
                </Link>
        <CardBody>
            <Text noOfLines={2} dir='rtl' fontSize={{ xl: 'md', lg: 'md', md: "md", sm: 'md' }}>{video.name}</Text>
            <HStack justifyContent='space-around'>
            <Text noOfLines={2} dir='rtl' fontSize={'small'}>{video.title}</Text>
            <Text noOfLines={2} dir='rtl' fontSize={'xx-small'}>{video.faculty}</Text>
            </HStack>
        </CardBody>
    </Card>
)
export default GameCard