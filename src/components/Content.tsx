import React from 'react'

import {
    Container,
    Box,
    Text
} from '@chakra-ui/react'

export default function Content() {


    return (
        <>
            <Container maxW='xl' centerContent>
                <Box padding='4' maxW='3xl'>
                    <Text>
                        My name is Safouane :)
                    </Text>
                </Box>
            </Container>
        </>
    )
}