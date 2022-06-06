import React from "react";
import { Flex, Heading, Text, Stack } from "@chakra-ui/react";
import ReactPlayer from "react-player";
import ReactAudioPlayer from "react-audio-player";
import video from "../assets/media/longislandInterview.m4a";

const VideoMedia = () => {
  return (
    <Flex flexDir="column" px={150} py={40} pt="60px" pb={60}>
      <Stack mt={0} pos="relative" pb={400}>
        <Heading m={0} bg="gray" color="white" p={10} borderRadius="5px">
          VIDEOS OF TEMIMA GEZARI
        </Heading>
        <Flex pos="absolute" left="-80" top="100">
          <ReactPlayer
            url={"https://streamable.com/69ot0m"}
            width="800px"
            height="480px"
            config={{
              youtube: {
                playerVars: { showinfo: 1 },
              },
              facebook: {
                appId: "12345",
              },
            }}
          />
        </Flex>

        <Heading pt={6}>Camp Sedjwin Mural Rededication 1985</Heading>
      </Stack>
      <Stack mt={180} spacing={20}>
        <Heading m={0} bg="gray" color="white" p={10} borderRadius="5px">
          RADIO BROADCASTS
        </Heading>
        <Heading>Long Island History Interview</Heading>
        <Text>November 23, 2016</Text>
        <Text>
          Click the player below to listen to a radio interview with Temima's
          son, Daniel Gezari about his of his mother and father.
        </Text>
        <Text>
          Interview with Dan Gezari - Long Island History Project - Radio Show
        </Text>
        <ReactAudioPlayer src={video} controls />
      </Stack>
      <Stack mt={60} spacing={20}>
        <Heading m={0} bg="gray" color="white" p={10} borderRadius="5px">
          Filmstrips by Temima Gezari
        </Heading>
        <Text fontWeight="bold">
          Growing Through Art <Text as="span">(1955)</Text>
        </Text>
        <Text fontWeight="bold">Art and Growing Child</Text>
        <Text>
          1956 Winner of the Silver Reel Award of the Film Council of America
          (1957 Scholastic Award)
        </Text>
        <Text fontWeight="bold">
          Minature Stone Sculpture <Text as="span">(1963)</Text>
        </Text>
        <Text fontWeight="bold">
          The Art of Israeli Children <Text as="span">(1963)</Text>
        </Text>
        <Text fontWeight="bold">
          The Patriarchs <Text as="span">(1977)</Text>
        </Text>
      </Stack>
    </Flex>
  );
};

export default VideoMedia;
