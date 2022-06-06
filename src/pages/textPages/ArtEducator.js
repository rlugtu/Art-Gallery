import React from "react";
import { Flex, Heading, Center, Image, Text, Stack } from "@chakra-ui/react";

const ArtEducator = () => {
  const pages = [1, 2, 3, 4, 5, 6, 7];
  const pages2 = [8, 9, 10, 11];

  return (
    <Flex flexDirection="column" py={60} px={135}>
      <Stack spacing={16} id="artChildDev">
        <Heading my={0} mt={40}>
          ART AND CHILD DEVELOPMENT
        </Heading>
        <Text>
          “Children instinctively have the knowledge of our world. It amazes me,
          what a child can do with one stroke. The art medium provides children
          with a universal language, through which they can express ideas and
          feelings that they may find difficult to convey in words. Through
          manipulation of basic materials, children develop confidence, courage,
          and creative spirit. People, especially parents, must be brought to
          the realization that art should become part of everyone’s experience
          to develop their greatest capability. A child’s creativity and
          perception of the world must be encouraged. An adult may look at a
          child’s painting and say, ‘I never saw a purple cow.’ When the child
          proudly holds it up. Of course, the child hasn’t either, but was
          looking with imagination. An understanding parent or teacher will tell
          the child, ‘that’s the most beautiful cow I’ve ever seen!’ ”
        </Text>
        <Text>
          “My philosophy of art is that the fundamental principles of art can be
          found in the artwork of a two-year-old, work which the child does
          instinctively.”
        </Text>
        <Text>
          Temima Gezari organized international exhibits of children’s art
          annually from 1943 to 2004. “First, the children learn that their work
          is accepted. We respect and appreciate their effort. With this
          acceptance they can go on to the exhibition and is proud to see their
          creation displayed. They look at other children’s work and learn that
          there are many ways of expressing the same subject. They learn to
          appreciate the efforts of htheir peers. Teachers see how other
          teachers have utilized the art medium to motivate their students. This
          expands children’s knowledge, and they go on to the next step in their
          development. Have you ever seen the absorbed concentration in
          children’s faces when they are permitted to do the creative work they
          love? There is intensity and involvement, no bribe is necessary.”
        </Text>
      </Stack>

      <Stack spacing={16} id="noCompetitions">
        <Heading my={0} mt={40}>
          NO COMPETITIONS
        </Heading>
        <Text>
          “Prizes in art are basically destructive and self-defeating. The
          winner’s gratification is gained at the price of the rejection of
          those who failed. To rule that their best isn’t good enough is to
          inflict needless damage on their self-esteem. I reject the argument
          that contests provide incentive for productivity.”
        </Text>
      </Stack>

      <Stack spacing={16} id="noColoringBooks">
        <Heading my={0} mt={40}>
          NO COLORING BOOKS
        </Heading>
        <Text>
          “No coloring books!! The young children who learn to please their
          elders by staying inside the lines of coloring book drawings, grow up
          to be a followers, not leaders. This is the beginning of conformity.
          The seeds of a mentality that accepts without questioning.”
        </Text>
      </Stack>

      <Stack>
        <Heading>TEACHING ART TO CHILDREN</Heading>
        <Text>
          “What I have done is to demonstrate my philosophy of art, that the
          fundamental principles of art can be found in the world of a
          two-year-old… work which the child does instinctively.”
        </Text>
        <Text>
          “The art medium provides children with a universal language, through
          which they can express ideas and feelings that they may find difficult
          to convey in words. Through manipulation of basic materials, children
          develop confidence, courage, and creative spirit. People, especially
          parents, must be brought to the realization that art should become
          part of everyone’s experience to develop their greatest capability.”
        </Text>
        <Text>
          “A child’s creativity and perception of the world must be encouraged.
          An adult may look at a child’s painting and say,” I never saw a purple
          cow.” When the child proudly holds it up. Of course, the child hasn’t
          either, but was looking with imagination. An understanding parent or
          teacher will tell the child, “that’s the most beautiful cow I’ve ever
          seen!”
        </Text>
      </Stack>

      <Stack>
        <Heading>EXHIBITS OF CHILDREN'S ART</Heading>
        <Text>
          Temima Gezari has organized international exhibits of children’s art
          annually since 1943. “First, the child learns that his work is
          accepted. We respect and appreciate his effort. With this acceptance
          he can go on to the exhibition and is proud to see his creation
          displayed. He looks at other children’s work and learns that there are
          many ways of expressing the same subject. He learns to appreciate the
          efforts of his peers. Teachers see how other teachers have utilized
          the art medium to motivate their students. This expands their
          knowledge, and they go on to the next step in their development.
        </Text>
        <Text>
          “The young child who learns to please his elders by staying inside the
          lines of coloring book drawings, grows up to be a follower, not a
          leader. This is the beginning of conformity. The seeds of a mentality
          that accepts without questioning.”
        </Text>
      </Stack>

      <Flex flexDirection="column" mt="120px">
        <Heading
          bg="grey"
          p={10}
          color="white"
          fontSize="2rem"
          textAlign="center"
          m={0}
          px={0}
          pb={0}
        >
          <Text as="span" fontStyle="italic">
            "FOOTPRINTS AND NEW WORLDS"
          </Text>
          - CHAPTERS 1 & 4
        </Heading>
        <Text
          color="black"
          bg="grey"
          textAlign="center"
          fontSize="1.5rem"
          fontWeight="600"
          m={0}
          p={0}
          px={0}
          pb={10}
        >
          {/* TEMIMA GEZARI'S UNIQUE APPROACH TO EDUCATION AND CHILD DEVELOPMENT */}
          TEMIMA GEZARI'S METHOD OF CHILD DEVELOPMENT THROUGH ART
        </Text>
        <Text
          ml="20px"
          p="10px"
          w="180px"
          className="hide-print"
          textAlign="center"
          // bg="red"
          // color="white"
          cursor="pointer"
          color="#5a5a5a"
          fontWeight="700"
          border="4px outset #e2e2e2"
          onClick={() => {
            window.print();
            return false;
          }}
        >
          CLICK HERE TO PRINT
        </Text>

        <Stack px={0}>
          {pages.map((page) => (
            <Center maxW="100%">
              <Image
                src={require(`../../assets/footprints/${page}.jpg`).default}
                w="100%"
              />
            </Center>
          ))}
        </Stack>
        <Stack borderTop="40px solid rgb(195, 195, 195)" px={0}>
          {pages2.map((page) => (
            <Center maxW="100%">
              <Image
                src={require(`../../assets/footprints/${page}.jpg`).default}
                w="100%"
              />
            </Center>
          ))}
        </Stack>
      </Flex>
    </Flex>
  );
};

export default ArtEducator;
