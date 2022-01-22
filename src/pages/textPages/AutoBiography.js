import React from "react";
import { Flex, Heading, Text, Image, Stack, Link } from "@chakra-ui/react";

const AutoBiography = () => {
  return (
    <Flex flexDirection="column" py={60} px={135} minH="100vh">
      <Heading m={0}>AUTOBIOGRAPHY</Heading>
      {/* <Heading m={0} fontSize="1.2rem">Books By: Temima Gezari</Heading> */}

      <Stack spacing={20} mt={10}>
        <Text mb={0}>Never A Dull Moment</Text>
        <Text>This is the house that Zvi Built</Text>
        <Text>I Remember</Text>
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
          <Flex flexDir="column" ml="10px" maxW="150px">
            <Link href="/book/isthereatomorrow">
              <Flex w="100%" maxW="150px">
                <Image
                  h="100%"
                  w="100%"
                  objectFit="contain"
                  src={
                    require(`../../assets/bookImages/never_a_dull_moment.jpg`)
                      .default
                  }
                  alt="Is there a tomorrow"
                />
              </Flex>
            </Link>
            <Text fontWeight="bold">Never a Dull Moment</Text>
          </Flex>
          <Flex flexDir="column" ml="10px" maxW="150px">
            <Link href="/book/isthereatomorrow">
              <Flex w="100%" maxW="150px">
                <Image
                  h="100%"
                  w="100%"
                  objectFit="contain"
                  src={
                    require(`../../assets/bookImages/this_is_the_house.jpg`)
                      .default
                  }
                  alt="Is there a tomorrow"
                />
              </Flex>
            </Link>
            <Text fontWeight="bold">This is the House that Zvi Built</Text>
          </Flex>
        </Flex>
        <Flex>
          <Flex flexDir="column" ml="10px" maxW="150px">
            <Link href="/book/isthereatomorrow">
              <Flex w="100%" maxW="150px">
                <Image
                  h="100%"
                  w="100%"
                  objectFit="contain"
                  src={
                    require(`../../assets/bookImages/I_remember.jpg`).default
                  }
                  alt="Is there a tomorrow"
                />
              </Flex>
            </Link>
            <Text fontWeight="bold">I Remember</Text>
          </Flex>
          <Flex flexDir="column" ml="10px" maxW="150px">
            <Link href="/book/isthereatomorrow">
              <Flex w="100%" maxW="150px">
                <Image
                  h="100%"
                  w="100%"
                  objectFit="contain"
                  src={
                    require(`../../assets/bookImages/now_that_im_ninety.jpg`)
                      .default
                  }
                  alt="Is there a tomorrow"
                />
              </Flex>
            </Link>
            <Text fontWeight="bold">Now That I'm Ninety</Text>
          </Flex>
          <Flex flexDir="column" ml="10px" maxW="150px">
            <Link href="/book/isthereatomorrow">
              <Flex w="100%" maxW="150px">
                <Image
                  h="100%"
                  w="100%"
                  objectFit="contain"
                  src={
                    require(`../../assets/bookImages/now_that_im_ninety_five.jpg`)
                      .default
                  }
                  alt="Is there a tomorrow"
                />
              </Flex>
            </Link>
            <Text fontWeight="bold">Now That I'm Ninety-Five</Text>
          </Flex>
        </Flex>
      </Stack>
    </Flex>
  );
};

export default AutoBiography;
