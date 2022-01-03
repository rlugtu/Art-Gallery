import React, { useState } from "react";
import RelationShipSingle from "../../components/RelationshipSingle";
import { Flex, Heading, Stack, Text } from "@chakra-ui/react";

const Relationships = () => {
  const [showSingle, setShowSingle] = useState(false);
  const [person, setPerson] = useState("");

  const switchToSingle = (id) => {
    setShowSingle(true);
    setPerson(id);
  };

  const switchBack = () => {
    setShowSingle(false);
  };

  return (
    <Flex flexDirection="column" py="40px" px={150} minH="100vh">
      {showSingle ? (
        <RelationShipSingle person={person} switchBack={switchBack} />
      ) : (
        <Stack>
          <Heading m={0} fontSize="2rem">
            PROFESSIONAL RELATIONSHIPS WITH{" "}
          </Heading>
          <Heading m={0} fontSize="2rem">
            CONTEMPORARY ARTISTS AND EDUCATORS
          </Heading>
          <Stack>
            <Text fontWeight="500" fontSize="1.2rem">
              Temima Gezari wrote a memoir,{" "}
              <Text
                as="span"
                fontWeight="bold"
                fontStyle="italic"
                fontSize="1.2rem"
              >
                I REMEMBER
              </Text>
              , in which she describes her friendships and experiences with 20th
              Century artists and educators.
            </Text>
            <Text></Text>
          </Stack>
          <Text fontSize="1.8rem" pt={10}>
            Read highlights from{" "}
            <Text as="span" fontWeight="bold" fontStyle="italic">
              I REMEMBER:
            </Text>
          </Text>

          <Stack>
            <Heading fontWeight="normal" fontSize="1.8rem" mb={0}>Artists:</Heading>
            <Text
              color="blue"
              cursor="pointer"
              fontSize="1.5rem"
              fontWeight="bold"
              onClick={() => switchToSingle("MARK ROTHKO")}
            >
              MARK ROTHKO
            </Text>
            <Text
              color="blue"
              cursor="pointer"
              fontSize="1.5rem"
              fontWeight="bold"
              onClick={() => switchToSingle("BRANCUSI")}
            >
              BRANCUSI
            </Text>
            <Text
              color="blue"
              cursor="pointer"
              fontSize="1.5rem"
              fontWeight="bold"
              onClick={() => switchToSingle("DIEGO RIVERA")}
            >
              DIEGO RIVERA
            </Text>
            <Text
              color="blue"
              cursor="pointer"
              fontSize="1.5rem"
              fontWeight="bold"
              onClick={() => switchToSingle("GEORGIA O’KEEFE")}
            >
              GEORGIA O’KEEFE
            </Text>
            <Text
              color="blue"
              cursor="pointer"
              fontSize="1.5rem"
              fontWeight="bold"
              onClick={() => switchToSingle("MARC CHAGALL")}
            >
              MARC CHAGALL
            </Text>
          </Stack>

          <Stack>
            <Heading fontWeight="normal" fontSize="1.8rem" mb={0}>
              Educators:
            </Heading>
            <Text
              color="blue"
              cursor="pointer"
              fontSize="1.5rem"
              fontWeight="bold"
              onClick={() => switchToSingle("ALEXANDER DUSHKIN")}
            >
              ALEXANDER DUSHKIN
            </Text>
            <Text
              color="blue"
              cursor="pointer"
              fontSize="1.5rem"
              fontWeight="bold"
              onClick={() => switchToSingle("MORDECAI M. KAPLAN")}
            >
              MORDECAI M. KAPLAN
            </Text>
            <Text
              color="blue"
              cursor="pointer"
              fontSize="1.5rem"
              fontWeight="bold"
              onClick={() => switchToSingle("DAVID FINN")}
            >
              DAVID FINN
            </Text>
            <Text
              color="blue"
              cursor="pointer"
              fontSize="1.5rem"
              fontWeight="bold"
              onClick={() => switchToSingle("MARTHA GRAHAM")}
            >
              MARTHA GRAHAM
            </Text>
            <Text
              color="blue"
              cursor="pointer"
              fontSize="1.5rem"
              fontWeight="bold"
              onClick={() => switchToSingle("ELEANOR ROOSEVELT")}
            >
              ELEANOR ROOSEVELT
            </Text>
          </Stack>
        </Stack>
      )}
    </Flex>
  );
};

export default Relationships;
