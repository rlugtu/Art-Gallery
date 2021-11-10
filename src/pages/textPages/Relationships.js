import React, { useState } from "react";
import RelatcionshipSingle from "../../components/RelationshipSingle";
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
    <Flex flexDirection="column" py={80} px={120}>
      {showSingle ? (
        <RelatcionshipSingle person={person} switchBack={switchBack} />
      ) : (
        <Stack>
          <Heading m={0}>PROFESSIONAL RELATIONSHIPS - </Heading>
          <Heading m={0}>CONTEMPORARY ARTISTS AND EDUCATORS</Heading>
          <Stack>
            <Text>
              Temima Gezari wrote a memoir,{" "}
              <Text as="span" fontWeight="bold" fontStyle="italic">
                I REMEMBER
              </Text>
              , in which she describes her friendships and experiences with 20th
              century artists and educators.
            </Text>
            <Text></Text>
          </Stack>
          <Text>
            Read highlights from{" "}
            <Text as="span" fontWeight="bold" fontStyle="italic">
              I REMEMBER:
            </Text>
          </Text>

          <Stack>
            <Heading>Artists:</Heading>
            <Text
              color="blue"
              cursor="pointer"
              onClick={() => switchToSingle("MARK ROTHKO")}
            >
              MARK ROTHKO
            </Text>
            <Text
              color="blue"
              cursor="pointer"
              onClick={() => switchToSingle("BRANCUSI")}
            >
              BRANCUSI
            </Text>
            <Text
              color="blue"
              cursor="pointer"
              onClick={() => switchToSingle("DIEGO RIVERA")}
            >
              DIEGO RIVERA
            </Text>
            <Text
              color="blue"
              cursor="pointer"
              onClick={() => switchToSingle("GEORGIA O’KEEFE")}
            >
              GEORGIA O’KEEFE
            </Text>
            <Text
              color="blue"
              cursor="pointer"
              onClick={() => switchToSingle("MARC CHAGALL")}
            >
              MARC CHAGALL
            </Text>
          </Stack>

          <Stack>
            <Heading>Educators:</Heading>
            <Text
              color="blue"
              cursor="pointer"
              onClick={() => switchToSingle("ALEXANDER DUSHKIN")}
            >
              ALEXANDER DUSHKIN
            </Text>
            <Text
              color="blue"
              cursor="pointer"
              onClick={() => switchToSingle("MORDECAI M. KAPLAN")}
            >
              MORDECAI M. KAPLAN
            </Text>
            <Text
              color="blue"
              cursor="pointer"
              onClick={() => switchToSingle("DAVID FINN")}
            >
              DAVID FINN
            </Text>
            <Text
              color="blue"
              cursor="pointer"
              onClick={() => switchToSingle("MARTHA GRAHAM")}
            >
              MARTHA GRAHAM
            </Text>
            <Text
              color="blue"
              cursor="pointer"
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
