import React from "react";
import { Flex, Heading, Center, Image, Text, Stack } from "@chakra-ui/react";

const FootprintsPreview = () => {
  const pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  return (
    <Flex flexDirection="column" p={40} px={80}>
      <Heading
        bg="grey"
        p={10}
        color="white"
        fontSize="2rem"
        textAlign="center"
        m={0}
      >
        "FOOTPRINTS AND NEW WORLDS" - CHAPTERS 1 & 4
      </Heading>
      <Text color="grey" fontSize="1.33rem" fontWeight="600" m={0} mt={10} p={0}>
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
