import { useState } from "react";
import { Flex, Heading, Image, Text, Link } from "@chakra-ui/react";
import CoverPage from "../components/CoverPage";
import "../styles/Index.scss";
import Slideshow from "../components/Slideshow";

// Leaping Lena,
// NEWSBOY,

const Home = () => {
  const [showCover, setShowCover] = useState(true);

  return (
    <>
      {showCover && (
        <Flex
          pos="absolute"
          w="100vw"
          h="100vh"
          top={0}
          left={0}
          onClick={() => setShowCover(false)}
        >
          <Slideshow />
        </Flex>
      )}
      {!showCover && (
        <Flex className="container" p={0} flexDir="column" px={20}>
          <Flex className="row">
            <Flex w="50%" alignItems="center" flexDir="column" mr="8px">
              <Link href="/sculptures">
                <Heading textAlign="center">SCULPTURE</Heading>
                <Flex
                  cursor="pointer"
                  // _hover={{
                  //   border: "3px solid black",
                  // }}
                  w="100%"
                >
                  <Flex w="33%" h="145px" border="2px solid white">
                    <Image
                      objectFit="cover"
                      w="100%"
                      h="100%"
                      src={
                        require(`../assets/thumbnails/sculptures/LeapingLena-5.jpg`)
                          .default
                      }
                    />
                  </Flex>
                  <Flex w="33%" h="145px" border="2px solid white">
                    <Image
                      objectFit="cover"
                      w="100%"
                      h="100%"
                      src={
                        require(`../assets/thumbnails/sculptures/WomansHead-0.jpg`)
                          .default
                      }
                    />
                  </Flex>
                  <Flex w="33%" h="145px" border="2px solid white">
                    <Image
                      objectFit="cover"
                      w="100%"
                      h="100%"
                      src={
                        require(`../assets/thumbnails/sculptures/Juggler-18.jpg`)
                          .default
                      }
                    />
                  </Flex>
                </Flex>
              </Link>
            </Flex>

            <Flex w="50%" alignItems="center" flexDir="column" ml="8px">
              <Link href="/paintings">
                <Heading textAlign="center">PAINTINGS</Heading>
                <Flex
                  cursor="pointer"
                  // _hover={{
                  //   border: "3px solid black",
                  // }}
                >
                  <Flex w="33%" h="145px" border="2px solid white">
                    <Image
                      objectFit="cover"
                      w="100%"
                      h="100%"
                      src={
                        require(`../assets/thumbnails/paintings/Lighthouse-6.jpg`)
                          .default
                      }
                    />
                  </Flex>
                  <Flex w="33%" h="145px" border="2px solid white">
                    <Image
                      objectFit="cover"
                      w="100%"
                      h="100%"
                      src={
                        require(`../assets/thumbnails/paintings/IndianWomaninDoorway-3.jpg`)
                          .default
                      }
                    />
                  </Flex>
                  <Flex w="33%" h="145px" border="2px solid white">
                    <Image
                      objectFit="cover"
                      w="100%"
                      h="100%"
                      src={
                        require(`../assets/thumbnails/paintings/GossipontheSubway-1.jpg`)
                          .default
                      }
                    />
                  </Flex>
                </Flex>
              </Link>
            </Flex>
          </Flex>

          <Flex className="row">
            <Flex w="50%" alignItems="center" flexDir="column" mr="8px">
              <Link href="/drawings" w="100%">
                <Heading textAlign="center">DRAWINGS</Heading>
                <Flex
                  cursor="pointer"
                  // _hover={{
                  //   border: "3px solid black",
                  // }}
                  w="100%"
                >
                  <Flex w="33%" h="145px" border="2px solid white">
                    <Image
                      objectFit="cover"
                      w="100%"
                      h="100%"
                      src={
                        require(`../assets/thumbnails/drawings/Head-7.jpg`)
                          .default
                      }
                    />
                  </Flex>
                  <Flex w="33%" h="145px" border="2px solid white">
                    <Image
                      objectFit="cover"
                      w="100%"
                      h="100%"
                      src={
                        require(`../assets/thumbnails/drawings/SeatedNude-4.jpg`)
                          .default
                      }
                    />
                  </Flex>
                  <Flex w="33%" h="145px" border="2px solid white">
                    <Image
                      objectFit="cover"
                      w="100%"
                      h="100%"
                      src={
                        require(`../assets/thumbnails/drawings/StandingNude-10.jpg`)
                          .default
                      }
                    />
                  </Flex>
                </Flex>
              </Link>
            </Flex>
            <Flex w="50%" alignItems="center" flexDir="column" ml="8px">
              <Link href="/lithographs" w="100%">
                <Heading textAlign="center">LITHOGRAPHS</Heading>
                <Flex
                  cursor="pointer"
                  // _hover={{
                  //   border: "3px solid black",
                  // }}
                  width="100%"
                >
                  <Flex w="33%" h="145px" border="2px solid white">
                    <Image
                      objectFit="cover"
                      w="100%"
                      h="100%"
                      src={
                        require(`../assets/thumbnails/lithographs/ShabbosShpatzir-1.jpg`)
                          .default
                      }
                    />
                  </Flex>
                  <Flex w="33%" h="145px" border="2px solid white">
                    <Image
                      objectFit="cover"
                      w="100%"
                      h="100%"
                      src={
                        require(`../assets/thumbnails/lithographs/TheLittlePresser-3.jpg`)
                          .default
                      }
                    />
                  </Flex>
                  <Flex w="33%" h="145px" border="2px solid white">
                    <Image
                      objectFit="cover"
                      w="100%"
                      h="100%"
                      src={
                        require(`../assets/thumbnails/lithographs/FourSisters-0.jpg`)
                          .default
                      }
                    />
                  </Flex>
                </Flex>
              </Link>
            </Flex>
          </Flex>

          <Flex wrap="wrap" mt={20}>
            <Flex w="50%" alignItems="center" h="100%" objectFit="contain">
              <Link href="/footprints-preview">
                <Text
                  bg="grey"
                  textAlign="center"
                  m="10px"
                  p="25px"
                  borderStyle="outset"
                  cursor="pointer"
                  color="white"
                  fontWeight="normal"
                  h="90px"
                  display="flex"
                  alignItems="center"
                >
                  Preview chapters 1 & 4 of Footprints and New Worlds
                </Text>
              </Link>
            </Flex>
            <Flex w="50%" alignItems="center" h="100%" objectFit="contain">
              <Link href="/artist">
                <Text
                  bg="grey"
                  textAlign="center"
                  m="10px"
                  p="25px"
                  borderStyle="outset"
                  cursor="pointer"
                  color="white"
                  fontWeight="normal"
                  h="90px"
                  display="flex"
                  alignItems="center"
                >
                  View Temima's CV containing some of her accomplishments
                </Text>
              </Link>
            </Flex>
            <Flex w="50%" alignItems="center" objectFit="contain">
              <Link href="/books" w="100%">
                <Text
                  bg="grey"
                  textAlign="center"
                  m="10px"
                  p="25px"
                  borderStyle="outset"
                  cursor="pointer"
                  color="white"
                  fontWeight="normal"
                  h="90px"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  View books written by or about temima gezari
                </Text>
              </Link>
            </Flex>
            <Flex w="50%" alignItems="center" objectFit="contain">
              <Link href="/philosophy">
                <Text
                  bg="grey"
                  m="10px"
                  w="435px"
                  p="25px"
                  // border="1px solid black"
                  cursor="pointer"
                  color="white"
                  borderStyle="outset"
                  fontWeight="normal"
                  h="90px"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  View Temima's philosophy of art
                </Text>
              </Link>
            </Flex>
          </Flex>
        </Flex>
      )}
    </>
  );
};

export default Home;
