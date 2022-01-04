import React from "react";
import {

  Heading,

  Link,
  Text,
  Stack,
} from "@chakra-ui/react";

const Contact = () => {
  return (
    <Stack p="30px" pl="40px">
      <Heading m={0}>CONTACT US:</Heading>
      <Heading color="grey" mb={0} pt="20px" fontSize="2em">
        TEMIMA GEZARI FOUNDATION FOR ART AND EDUCATION
      </Heading>
      <Text fontSize="1.5rem" m={0} mt={0} fontWeight="bold">
        P.O Box 793 Rocky Point, NY, 11778
      </Text>
      <Text fontSize="1.5rem" pt="30px" pb="35px" fontWeight="bold">
        Email: TemimaGezari@gmail.com
      </Text>
      <Text fontSize="1.5rem" fontWeight="bold">
        Phone: 202-413-2650
      </Text>
      <Text fontSize="1.5rem" fontWeight="bold" pt="30px" color="blue">
        <Link color="blue" href="/mailing-list">
          Signup for our mailing list
        </Link>
      </Text>
    </Stack>
  );
};

export default Contact;
