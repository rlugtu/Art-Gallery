import React from "react";
import { Flex, Button, Heading, Text, Input, Stack } from "@chakra-ui/react";

const MailingList = () => {
  return (
    <Flex p={40} minH="80vh">
      <Stack>
        <Heading mt={0} fontSize="2em">
          MAILING LIST:{" "}
        </Heading>
        <Text fontWeight="bold" fontSize="1.17em">
          Sign up to receive our newsletter and updates on book availibility.
        </Text>
        <Flex pt={20}>
          <Input placeholder="Your email" h="40px" pl={10} fontSize="1.2rem" />
          <Button w="100px" ml="10px" border="1px solid black">
            Submit
          </Button>
        </Flex>
      </Stack>
    </Flex>
  );
};

export default MailingList;
