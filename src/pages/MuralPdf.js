import React from "react";
import { Flex, Heading, Center, Image, Text, Stack } from "@chakra-ui/react";

const MuralPdf = () => {
  const pages = [196, 202, 205, 206, 208, 209, 210];
  return (
    <Flex flexDirection="column" p={40} px={0}>
      <Stack px={0}>
        {pages.map((page) => (
          <Center maxW="100%">
            <Image
              src={require(`../assets/muralpdf/${page}.jpg`).default}
              w="100%"
            />
          </Center>
        ))}
      </Stack>
    </Flex>
  );
};

export default MuralPdf;
