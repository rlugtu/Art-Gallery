import React, { useEffect } from "react";
import { Flex, Text, Image } from "@chakra-ui/react";

const SingleArt = ({ type }) => {
  return (
    <Flex flexDir="column">
      <Flex>
        <Image />
      </Flex>
      <Flex>
        <Text>test</Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
      </Flex>
    </Flex>
  );
};

export default SingleArt;
