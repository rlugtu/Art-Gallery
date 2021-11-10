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

const Contact = () => {
  return (
    <Stack spacing={20}>
      <Heading color="grey">
        TEMIMA GEZARI FOUNDATION FOR ART AND EDUCATION
      </Heading>
      <Text fontSize="1.5rem" fontWeight="bold">
        P.O Box 793 Rocky Point, NY, 11778
      </Text>
      <Text fontSize="1.5rem" fontWeight="bold">
        Email: TemimaGezari@gmail.com
      </Text>
      <Text fontSize="1.5rem" fontWeight="bold">
        Phone: 202-413-2650
      </Text>
      <Text fontSize="1.5rem" fontWeight="bold" color="blue">
        <Link color="blue" href="/mailing-list">
          Signup for our mailing list
        </Link>
      </Text>
    </Stack>
  );
};

export default Contact;
