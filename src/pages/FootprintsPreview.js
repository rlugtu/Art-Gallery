import React from "react";
import { Flex, Heading, Center, Image, Text, Stack } from "@chakra-ui/react";

const FootprintsPreview = () => {
  const pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  return (
    <Flex flexDirection="column">
      <Heading
        bg="lightgrey"
        p={20}
        fontSize="2rem"
        textAlign="center"
        m={0}
        mt={12}
      >
        "FOOTPRINTS AND NEW WORLDS" - CHAPTERS 1 & 4
      </Heading>
      <Text color="grey" textAlign="center" fontSize="1.5rem" m={0} mt={10}>
        TEMIMA GEZARI'S UNIQUE APPROACH TO EDUCATION AND CHILD DEVELOPMENT
      </Text>

      <Stack>
        {pages.map((page) => (
          <Center maxW="100%">
            <Image
              src={require(`../assets/footprints/${page}.jpg`).default}
              w="100%"
            />
          </Center>
        ))}
      </Stack>
    </Flex>
  );
};

export default FootprintsPreview;
