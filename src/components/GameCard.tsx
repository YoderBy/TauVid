import { Card, CardBody, Heading, Image } from "@chakra-ui/react"
import { Video } from "../Hooks/useVideos"

interface Props{
    video: Video
}
const GameCard = ({video} : Props)=>{
    return (
        <Card overflow={'hidden'} borderRadius={'10px'}>
            <Image src = {video.thumbnailUrl}></Image>
            <CardBody>
                <Heading fontSize={'2xl'}>{video.title}</Heading>
            </CardBody>
        </Card>
    )
}
export default GameCard