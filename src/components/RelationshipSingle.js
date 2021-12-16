import React, { useState, useEffect } from "react";
import {
  Box,
  Flex,
  Heading,
  Center,
  Stack,
  Image,
  Button,
  Text,
} from "@chakra-ui/react";

import relationshipJson from "../assets/jsonFiles/relationships.json";
const RelationshipSingle = ({ person, switchBack }) => {
  const [artist, setArtist] = useState(null);
  const data = relationshipJson;

  useEffect(() => {
    setArtist(person);

    console.log(relationshipJson[`${person}`]);
  }, []);
  return (
    <Stack>
      <Flex justifyContent="space-between">
        <Text fontWeight="bold" fontSize="1.17em">{person}</Text>
        <Text fontSize="1.17em" color="blue" cursor="pointer" onClick={switchBack}>
          BACK
        </Text>
      </Flex>
      <Stack spacing={16} pt={10}>
        {person &&
          relationshipJson[`${person}`].map((el, i) => <Text i={i} m={0}>{el}</Text>)}
      </Stack>
      <Text fontSize="1.17em" pt={40} color="blue" cursor="pointer" onClick={switchBack}>
        BACK
      </Text>
    </Stack>
  );
};

export default RelationshipSingle;
