import React from "react";
import { Flex, Heading, Center, Image, Text, Stack } from "@chakra-ui/react";

const FootprintsPreview = () => {
  const pages = [1, 2, 3, 4, 5, 6, 7];
  const pages2 = [8, 9, 10, 11]
  return (
    <Flex flexDirection="column" p={40} px={0} >
      <Heading
        bg="grey"
        p={10}
        color="white"
        fontSize="2rem"
        textAlign="center"
        m={0}
        px={0}
        pb={0}
      >
        <Text as="span" fontStyle="italic">
          "FOOTPRINTS AND NEW WORLDS"
        </Text>
        - CHAPTERS 1 & 4
      </Heading>
      <Text
        color="black"
        bg="grey"
        textAlign="center"
        fontSize="1.5rem"
        fontWeight="600"
        m={0}
        p={0}
        px={0}
        pb={10}
      >
        {/* TEMIMA GEZARI'S UNIQUE APPROACH TO EDUCATION AND CHILD DEVELOPMENT */}
        TEMIMA GEZARI'S METHOD OF CHILD DEVELOPMENT THROUGH ART
      </Text>

      <Stack px={0}>
        {pages.map((page) => (
          <Center maxW="100%">
            <Image
              src={require(`../assets/footprints/${page}.jpg`).default}
              w="100%"
            />
          </Center>
        ))}
      </Stack>
      <Stack borderTop="40px solid rgb(195, 195, 195)" px={0}>
        {pages2.map((page) => (
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
