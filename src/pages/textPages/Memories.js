import React from 'react';
import { Box,Image, Heading } from "@chakra-ui/react";

const Memories = () => {
    return (
        <Box>
         <Heading color="grey" textAlign="center" fontSize="2rem">MEMORIES OF TEMIMA GEZARI
</Heading>
<Heading textAlign="center" fontSize="1rem">Recollections of Temima Gezari by art teachers she inspired:

</Heading>
            <Box h="100%" w="100%">
            <Image src={require("../../assets/memoriesPage/memories_page.jpg").default} w="100%"/>

            </Box>
            
        </Box>
    );
};

export default Memories;