import { Text, Card, CardBody, Heading, Image, Box, Link } from "@chakra-ui/react"
import { Video } from "../Hooks/useVideos"

interface Props{
    video: Video
}
const GameCard = ({video} : Props)=>{
    return (
        <Card overflow={'hidden'} borderRadius={'10px'}>
            <Box>
      <Link href={video.detailUrl} isExternal>
            <Image src={video.thumbnailUrl}></Image></Link></Box>
            <CardBody>
                <Text dir='rtl' fontSize={{ xl: 'sm', lg: 'md', md: "md", sm: 'md' }}>{video.name}</Text>
                <Text dir='rtl'fontSize={'md'}>{video.title}</Text>    
                <Text dir='rtl' fontSize={'xx-small'}>{video.faculty}</Text>    
            </CardBody>
        </Card>
    )
}
export default GameCard