import React from "react";
import { Box, Image, Heading } from "@chakra-ui/react";

const Memories = () => {
  const arr = ["1", "2", "3", "4", "5", "6"];
  return (
    <Box pb={60}>
      <Heading color="grey" textAlign="center" fontSize="2rem">
        MEMORIES OF TEMIMA GEZARI
      </Heading>
      <Heading textAlign="center" fontSize="1rem">
        Recollections of Temima Gezari by art teachers she inspired:
      </Heading>

      {arr.map((item) => (
        <Box h="100%" w="100%">
          <Image
            src={require(`../../assets/memoriesPage/${item}.jpg`).default}
            w="100%"
          />
        </Box>
      ))}
      {/* <Box h="100%" w="100%">
        <Image
          src={require("../../assets/memoriesPage/memories_page.jpg").default}
          w="100%"
        />
      </Box> */}
    </Box>
  );
};

export default Memories;
