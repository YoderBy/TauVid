import { Text, Card, CardBody, HStack, Image, Box, Link, Skeleton, SkeletonText } from "@chakra-ui/react"
import { Video } from "../Hooks/useVideos"

const GameCardSkeleton = ()=>
{    return(
    <Card  overflow={'hidden'} borderRadius={'10px'}>
        <Skeleton>
            <CardBody>
                <SkeletonText></SkeletonText>
            </CardBody>
        </Skeleton>
    </Card>
    )
}
export default GameCardSkeleton