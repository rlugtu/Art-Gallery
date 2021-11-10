import React from "react";
import { Flex, Button, Heading, Text, Input, Stack } from "@chakra-ui/react";

const MailingList = () => {
  return (
    <Flex>
      <Stack>
        <Heading>MAILING LIST: </Heading>
        <Text fontWeight="bold">
          Sign up to receive our newsletter and updates on book availibility.
        </Text>
        <Flex pt={20}>
          <Input placeholder="Your email" h="40px" pl={10} fontSize="1.2rem" />
          <Button w="100px">Submit</Button>
        </Flex>
      </Stack>
    </Flex>
  );
};

export default MailingList;
