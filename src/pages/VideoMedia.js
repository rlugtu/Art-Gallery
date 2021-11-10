import React from "react";
import { Flex, Heading, Text, Stack } from "@chakra-ui/react";
import ReactPlayer from "react-player";
import ReactAudioPlayer from "react-audio-player";
import video from "../assets/media/longislandInterview.m4a";
const VideoMedia = () => {
  return (
    <Flex flexDir="column" px={40} py={40} pb={60}>
      <Stack mt={0} pos="relative" pb={400}>
        <Heading m={0} bg="gray" color="white" p={10}>
          VIDEOS OF TEMIMA GEZARI
        </Heading>
        <Flex pos="absolute" left="-80" top="100">
          <ReactPlayer
            url={"https://streamable.com/69ot0m"}
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

        <Heading>Camp Sedjwin Mural Rededication 1985</Heading>
      </Stack>
      <Stack mt={60} spacing={20}>
        <Heading m={0} bg="gray" color="white" p={10}>
          RADIO BROADCASTS OF TEMIMA GEZARI
        </Heading>
        <Heading>Long Island History Interview</Heading>
        <Text>November 23, 2016</Text>
        <Text>
          Click the player below to listen to a radio studio inerview with
          Temima's son, Daniel Gezari about his of his mother and father.
        </Text>
        <Text>
          Interview with Dan Gezari - Long Island History Project - Radio Show
        </Text>
        <ReactAudioPlayer src={video} controls />
      </Stack>
      <Stack mt={60} spacing={20}>
        <Heading m={0} bg="gray" color="white" p={10}>
          Filmstrips by Temima Gezari
        </Heading>
        <Text>Growing Through Art (1955)

</Text>
        <Text>Art and Growing Child (1956) (1956 Winner of the Silver Reel Award of the Film Council of America and the 1957 Scholastic Award)

</Text>
        <Text>Minature Stone Sculpture (1963)

</Text>
        <Text>The Art of Israeli Children (1963)

</Text>
        <Text>The Patriarchs (1977)</Text>
      </Stack>
    </Flex>
  );
};

export default VideoMedia;
