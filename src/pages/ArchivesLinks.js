import React from "react";
import { Flex, Heading, Text, Stack, Link } from "@chakra-ui/react";

const ArchivesLinks = () => {
  return (
    <Flex flexDirection="column" py="60px" px="150px">
      <Heading>ARCHIVES AND LINKS</Heading>
      <Stack spacing={20}>
        <Stack spacing={0}>
          <Text fontSize="1.17em" fontWeight="bold" m={0}>
            Temima Gezari, Jewish Women's Archive
          </Text>
          <Link
            color="blue"
            href="https://jwa.org/people/gezari-temima"
            target="_blank"
            m={0}
          >
            https://jwa.org/people/gezari-temima
          </Link>
        </Stack>

        <Stack spacing={0}>
          <Text fontSize="1.17em" fontWeight="bold" m={0}>
            Wikipedia - Temima Gezari
          </Text>
          <Link
            color="blue"
            href="https://en.wikipedia.org/wiki/Temima_Gezari"
            target="_blank"
            m={0}
          >
            https://en.wikipedia.org/wiki/Temima_Gezari
          </Link>
        </Stack>

        <Stack spacing={0}>
          <Text fontSize="1.17em" fontWeight="bold" m={0}>
            Temima Gezari Worldcat Identites
          </Text>
          <Link
            color="blue"
            href="http://worldcat.org/identities/lccn-n85231468/"
            target="_blank"
            m={0}
          >
            http://worldcat.org/identities/lccn-n85231468/
          </Link>
        </Stack>

        <Stack spacing={0}>
          <Text fontSize="1.17em" fontWeight="bold" m={0}>
            Yeshiva University - Temima Gezari Papers
          </Text>
          <Link
            color="blue"
            href="https://archives.yu.edu/xtf/view?docId=ead/temimagezari/temimagezari.xml;query=temima%20gezari;brand=default"
            target="_blank"
            m={0}
          >
            https://archives.yu.edu/xtf/view?docId=ead/temimagezari/temimagezari.xml;query=temima%20gezari;brand=default
          </Link>
        </Stack>

        <Stack spacing={0}>
          <Text fontSize="1.17em" fontWeight="bold" m={0}>
            Art And The Growing Child (filmstrip and sound)
          </Text>
          <Link
            color="blue"
            href="https://www.discogs.com/Temima-Gezari-Art-And-The-Growing-Child-Filmstrip-And-Sound/release/9419766"
            target="_blank"
            m={0}
          >
            https://www.discogs.com/Temima-Gezari-Art-And-The-Growing-Child-Filmstrip-And-Sound/release/9419766
          </Link>
        </Stack>

        <Stack spacing={0}>
          <Text fontSize="1.17em" fontWeight="bold" m={0}>
            Temima Gezari: Seventy Years in Art Education. (Teacher Talk)
          </Text>
          <Link
            color="blue"
            href="https://www.questia.com/magazine/1G1-94774358/temima-gezari-seventy-years-in-art-education-teacher"
            target="_blank"
            m={0}
          >
            https://www.questia.com/magazine/1G1-94774358/temima-gezari-seventy-years-in-art-education-teacher
          </Link>
        </Stack>

        <Stack spacing={0}>
          <Text fontSize="1.17em" fontWeight="bold" m={0}>
            Archive Encyclopedia - Temima Gezari
          </Text>
          <Link
            color="blue"
            href="https://jwa.org/encyclopedia/article/gezari-temima"
            target="_blank"
            m={0}
          >
            https://jwa.org/encyclopedia/article/gezari-temima
          </Link>
        </Stack>

        <Stack spacing={0}>
          <Text fontSize="1.17em" fontWeight="bold" m={0}>
            Rocky Point, Einstein and Me
          </Text>
          <Text>
            A radio studio inerview with Temima's son, Daniel Gezari about his
            of his mother and father.
          </Text>
          <Link
            color="blue"
            href="https://www.longislandhistoryproject.org/rocky-point-einstein-and-me/"
            target="_blank"
            m={0}
          >
            https://www.longislandhistoryproject.org/rocky-point-einstein-and-me/
          </Link>
        </Stack>

        <Stack spacing={0}>
          <Text fontSize="1.17em" fontWeight="bold" m={0}>
            On Purple Cows and Pink Skies: An Interview with Temima Gezari
          </Text>
          <Link
            color="blue"
            href="https://www.tandfonline.com/doi/abs/10.1080/15244118609412143?journalCode=ujje19"
            target="_blank"
            m={0}
          >
            https://www.tandfonline.com/doi/abs/10.1080/15244118609412143?journalCode=ujje19
          </Link>
        </Stack>
      </Stack>
    </Flex>
  );
};

export default ArchivesLinks;
