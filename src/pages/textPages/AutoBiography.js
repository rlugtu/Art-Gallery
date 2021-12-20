import React from "react";
import { Flex, Heading, Text, Image, Stack, Link } from "@chakra-ui/react";
import booksJson from "../../assets/jsonFiles/books.json";

const AutoBiography = () => {
  return (
    <Flex flexDirection="column" py={60} px={135}>
      <Heading m={0}>AUTOBIOGRAPHY</Heading>

      <Stack spacing={20} mt={20}>
        <Text mb={0}>Never A Dull Moment</Text>
        <Text>Read, Download, and Print Online</Text>
        <Text>This is the house that Zvi Built</Text>

        <Text>Read, Download, and Print Online</Text>

        <Text>I Remember</Text>

        <Text>Read, Download, and Print Online</Text>
        <Flex>
          <Link href="/book/mamapapaandme">
            <Flex flexDir="column">
              <Flex w="100%" maxW="150px">
                <Image
                  h="100%"
                  w="100%"
                  objectFit="contain"
                  src={
                    require(`../../assets/bookImages/mama_papa_and_me.jpg`)
                      .default
                  }
                  alt="mama papa and me"
                />{" "}
              </Flex>
              <Text fontWeight="bold">Mama, Papa, and Me</Text>
            </Flex>
          </Link>

          <Flex flexDir="column" ml="10px" maxW="150px">
            <Link href="/book/isthereatomorrow">
              <Flex w="100%" maxW="150px">
                <Image
                  h="100%"
                  w="100%"
                  objectFit="contain"
                  src={
                    require(`../../assets/bookImages/is_there_a_tomorrow.jpg`)
                      .default
                  }
                  alt="Is there a tomorrow"
                />
              </Flex>
            </Link>
            <Text fontWeight="bold">Is there a tomorrow? - Yes!</Text>
          </Flex>
        </Flex>
      </Stack>
    </Flex>
  );
};

export default AutoBiography;
