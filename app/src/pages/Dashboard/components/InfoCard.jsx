import React from 'react'
import { CustomCard } from '../../../chakra/CustomCard'
import { Tag, Text } from '@chakra-ui/react'

const InfoCard = ({ imgUrl, text, tagText, inverted }) => {
    return (
        <CustomCard bgImage={imgUrl} bgSize="cover" bgRepeat="no-repeat" bgColor={inverted ? "p.purple" : "white"}>
            <Tag color={inverted ? "p.purple" : "white"} bg={inverted ? "white" : "p.purple"} borderRadius="full">
                {tagText}
            </Tag>
            <Text textStyle='h5' mt='4' fontWeight="medium" color={inverted ? "white" : "black.80"}>
                {text}
            </Text>
        </CustomCard>
    )
}

export default InfoCard
