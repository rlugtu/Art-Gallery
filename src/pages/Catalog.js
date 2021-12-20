import React from "react";
import { Flex, Center, Image, Stack } from "@chakra-ui/react";

const Catalog = () => {
  const pages = ["catalog1", "catalog2", "catalog3", "catalog4"];
  return (
    <Flex flexDirection="column" p={40} px={80}>
      <Stack>
        {pages.map((page) => (
          <Center maxW="100%">
            <Image
              src={require(`../assets/catalog/${page}.jpg`).default}
              w="100%"
            />
          </Center>
        ))}
      </Stack>
    </Flex>
  );
};

export default Catalog;
