import React from "react";
import {
  Flex,
  Button,
  Heading,
  Image,
  Link,
  Text,
  Stack,
} from "@chakra-ui/react";

const Foundation = () => {
  return (
    <Flex flexDir="column" p={40} pr="80px" >
      <Stack spacing={20} mt={20}>
        <Heading m={0} fontSize="2rem" color="#838383">TEMIMA GEZARI FOUNDATION FOR ART AND EDUCATION</Heading>
        If you would like to support our efforts and the goals of the
        Foundation, click the icon below
        <Text pr="160px" >
          The Temima Gezari Foundation for Art and Education is a 501(c)3
          non-profit corporation that was founded to promote and publicize
          Temima's philosophy and method of education. Her humanistic approach
          to teaching children, college students, and adults is unique and
          highly effective. For an example of her attitude and approach, see
          Chapters 1 and 4 of her book Footprints and New Worlds
          <Text as="span">
            <Link color="blue" cursor="pointer" href="/footprints-preview" fontWeight="bold">
            {" "} CLICK HERE{" "}
            </Link>
          </Text>
          The foundation is also committed to curating, conserving, and
          exhibiting Temima's artwork, and operating and maintaining her Rocky
          Point Studio as a gallery for public education and inspiration.
        </Text>
        <Text pr="160px">
          If you would like to support our efforts and the goals of the
          Foundation,
          <Text as="span">
            <Link color="blue" cursor="pointer" href="/donate" fontWeight="bold">
              {" "}
              CLICK HERE{" "}
            </Link>
          </Text>{" "}
          to go to the Donate Page.
        </Text>
        <Stack mt={0} pt={0}>
          <Heading mt={0} pt={0} pr="160px" fontSize="2em">
            Donate to the TEMIMA GEZARI FOUNDATION FOR ART AND EDUCATION
          </Heading>
          <Heading pr="160px">
            If you would like to support our efforts and the goals of the
            Foundation, click the icon below
          </Heading>
          <Flex pt={40}>
            <Button
              h="75px"
              border="none"
              w="350px"
              bg="#FFDB58"
              borderRadius={50}
              p={10}
              cursor="pointer"
            >
              <Image
                w="100%"
                h="100%"
                objectFit="contain"
                src={require("../../assets/foundation/paypal.png").default}
              />
            </Button>
          </Flex>
        </Stack>
      </Stack>
    </Flex>
  );
};

export default Foundation;
