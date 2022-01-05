import React from "react";
import { Flex, Stack, Text } from "@chakra-ui/react";

import relationshipJson from "../assets/jsonFiles/relationships.json";
const RelationshipSingle = ({ person, switchBack }) => {
  // const [artist, setArtist] = useState(null);

  // useEffect(() => {
  //   setArtist(person);

  //   console.log(relationshipJson[`${person}`]);
  // }, [person]);
  return (
    <Stack>
      <Flex justifyContent="space-between">
        <Text fontWeight="bold" fontSize="2rem" mb={0}>
          {person}
        </Text>
        <Text
          fontSize="1.17em"
          color="white"
          bg="#f60d09"
          px={10}
          py={5}
          cursor="pointer"
          onClick={switchBack}
        >
          BACK
        </Text>
      </Flex>
      <Stack spacing={16} pt={10}>
        {person &&
          relationshipJson[`${person}`].map((el, i) => (
            <Text i={i} m={0} key={i}>
              {el}
            </Text>
          ))}
      </Stack>
      <Flex pt={20}>
        <Text
          fontSize="1.17em"
          color="white"
          bg="#f60d09"
          px={10}
          py={5}
          w="65px"
          cursor="pointer"
          onClick={switchBack}
        >
          BACK
        </Text>
      </Flex>
    </Stack>
  );
};

export default RelationshipSingle;
