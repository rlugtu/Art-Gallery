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
        <Text>{person}</Text>
        <Text color="blue" cursor="pointer" onClick={switchBack}>
          BACK
        </Text>
      </Flex>

      <Stack spacing={20}>
        {person &&
          relationshipJson[`${person}`].map((el, i) => <Text i={i}>{el}</Text>)}
      </Stack>
      <Text pt={40} color="blue" cursor="pointer" onClick={switchBack}>
        BACK
      </Text>
    </Stack>
  );
};

export default RelationshipSingle;
