import React from "react";
import { Flex, Heading, Text, Stack, Link } from "@chakra-ui/react";

const Books = () => {
  return (
    <Flex flexDir="column">
      <Stack>
        <Heading color="white" bg="grey" p={10} borderRadius={5}>
          Books Written by Temima Gezari
        </Heading>
      </Stack>
      <Stack>
        <Heading color="white" bg="grey" p={10} borderRadius={5}>
          Books illustrated by Temima Gezari
        </Heading>
      </Stack>
      <Stack>
        <Heading color="white" bg="grey" p={10} borderRadius={5}>
          Books about Temima Gezari
        </Heading>
      </Stack>
    </Flex>
  );
};

export default Books;
