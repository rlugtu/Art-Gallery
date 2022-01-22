import { useState } from "react";
import { Flex, Heading, Image, Text, Link } from "@chakra-ui/react";
import "../styles/Index.scss";
import Slideshow from "../components/Slideshow";

// Leaping Lena,
// NEWSBOY,

const Home = ({ setHasVisited, hasVisited }) => {
  const [showCover, setShowCover] = useState(true);

  const enterSite = () => {
    setShowCover(false);
    setHasVisited(true);
  };

  return (
    <>
      {!hasVisited && (
        <Flex
          pos="absolute"
          w="100vw"
          h="100vh"
          top={0}
          left={0}
          // onClick={() => { setShowCover(false); setHasVisited(true) }}
        >
          <Slideshow enterSite={enterSite} />
        </Flex>
      )}
      {hasVisited && (
        <Flex
          className="container"
          p={0}
          pb={80}
          flexDir="column"
          px={20}
          pt={20}
        >
          <Flex className="row">
            <Flex
              w="50%"
              className="row-button"
              alignItems="center"
              flexDir="column"
              mr="8px"
            >
              <Link href="/sculptures">
                <Heading mt={20} mb={5} textAlign="center">
                  SCULPTURE
                </Heading>
                <Flex
                  cursor="pointer"
                  // _hover={{
                  //   border: "3px solid black",
                  // }}
                  w="100%"
                  flexWrap="wrap"
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
                  <Flex w="33%" h="145px" border="2px solid white">
                    <Image
                      objectFit="cover"
                      w="100%"
                      h="100%"
                      src={
                        require(`../assets/thumbnails/sculptures/FatherAndFirstBornMotherAndSecondBorn-2.jpg`)
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
                        require(`../assets/thumbnails/sculptures/AmericanEagle-Crucifixion-67.jpg`)
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
                        require(`../assets/thumbnails/sculptures/Conversation-36.jpg`)
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
                        require(`../assets/thumbnails/sculptures/Gossip-37.jpg`)
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
                        require(`../assets/thumbnails/sculptures/WalterAge5-13.jpg`)
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
                        require(`../assets/thumbnails/sculptures/TheStoneCutter-11.jpg`)
                          .default
                      }
                    />
                  </Flex>
                </Flex>
              </Link>
            </Flex>

            <Flex
              w="50%"
              className="row-button"
              alignItems="center"
              flexDir="column"
              ml="8px"
            >
              <Link href="/paintings">
                <Heading mt={20} mb={5} textAlign="center">
                  PAINTINGS
                </Heading>
                <Flex
                  cursor="pointer"
                  // _hover={{
                  //   border: "3px solid black",
                  // }}
                  flexWrap="wrap"
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
                  <Flex w="33%" h="145px" border="2px solid white">
                    <Image
                      objectFit="cover"
                      w="100%"
                      h="100%"
                      src={
                        require(`../assets/thumbnails/paintings/DanielAge7-9.jpg`)
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
                        require(`../assets/thumbnails/paintings/RosietheLobsterman-8.jpg`)
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
                        require(`../assets/thumbnails/paintings/ATimeToEmbrace-10.jpg`)
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
                        require(`../assets/thumbnails/paintings/ATimeToDance-11.jpg`)
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
                        require(`../assets/thumbnails/paintings/Fisherman-4.jpg`)
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
                        require(`../assets/thumbnails/paintings/PuebloIndianWoman-2.jpg`)
                          .default
                      }
                    />
                  </Flex>
                </Flex>
              </Link>
            </Flex>
          </Flex>

          <Flex className="row" mt={20}>
            <Flex
              w="50%"
              className="row-button"
              alignItems="center"
              flexDir="column"
              mr="8px"
            >
              <Link href="/drawings" w="100%">
                <Heading mt={0} mb={5} textAlign="center">
                  DRAWINGS
                </Heading>
                <Flex
                  cursor="pointer"
                  // _hover={{
                  //   border: "3px solid black",
                  // }}
                  w="100%"
                  flexWrap="wrap"
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
                  <Flex w="33%" h="145px" border="2px solid white">
                    <Image
                      objectFit="cover"
                      w="100%"
                      h="100%"
                      src={
                        require(`../assets/thumbnails/drawings/Figure-3.jpg`)
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
                        require(`../assets/thumbnails/drawings/HeadDiagonals-6.jpg`)
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
                        require(`../assets/thumbnails/drawings/StudyofaHead-11.jpg`)
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
                        require(`../assets/thumbnails/drawings/TreeofLife(CircleonaSquare)-13.jpg`)
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
                        require(`../assets/thumbnails/drawings/MyStudio-19.jpg`)
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
                        require(`../assets/thumbnails/drawings/MyGrandfather-24.jpg`)
                          .default
                      }
                    />
                  </Flex>
                </Flex>
              </Link>
            </Flex>
            <Flex
              w="50%"
              className="row-button"
              alignItems="center"
              flexDir="column"
              ml="8px"
            >
              <Link href="/lithographs" w="100%">
                <Heading mt={0} mb={5} textAlign="center">
                  LITHOGRAPHS
                </Heading>
                <Flex
                  cursor="pointer"
                  // _hover={{
                  //   border: "3px solid black",
                  // }}
                  width="100%"
                  flexWrap="wrap"
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
                  <Flex w="33%" h="145px" border="2px solid white">
                    <Image
                      objectFit="cover"
                      w="100%"
                      h="100%"
                      src={
                        require(`../assets/thumbnails/lithographs/FishforShabbat-2.jpg`)
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
                        require(`../assets/thumbnails/lithographs/TheWorldSituation-4.jpg`)
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
                        require(`../assets/thumbnails/lithographs/WashDay-Kibbutz-5.jpg`)
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
                        require(`../assets/thumbnails/illustrations/-2.jpg`)
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
                        require(`../assets/thumbnails/illustrations/-1.jpg`)
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
                        require(`../assets/thumbnails/illustrations/-0.jpg`)
                          .default
                      }
                    />
                  </Flex>
                </Flex>
              </Link>
            </Flex>
          </Flex>
          <Flex w="100%" h="150px" flexDirection="row" mt={20}>
            <Flex w="33%" className="homeButton">
              <Link href="/philosophy" w="100%" textAlign="center">
                <Text
                  bg="rgba(246,13,9,0.7)"
                  className="home-page-button"
                  mb={5}
                  textAlign="center"
                  m="0"
                  p="10px"
                  // w="145px"
                  // borderStyle="outset"
                  cursor="pointer"
                  color="white"
                  fontWeight="normal"
                  h="100%"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Text
                    as="span"
                    color="black"
                    fontWeight="700"
                    fontSize="1.5rem"
                  >
                    TEMIMA'S{" "}
                    <Text
                      // as="span"
                      // color="black"
                      color="white"
                      fontSize="2.5rem"
                      m={0}
                    >
                      PHILOSOPHY
                    </Text>{" "}
                    OF ART EDUCATION
                  </Text>
                  {/* View Temima's philosophy of art */}
                </Text>
              </Link>
            </Flex>
            <Flex w="33%" className="homeButton">
              <Link href="/books" w="100%" textAlign="center">
                <Text
                  bg="rgba(246,13,9,0.7)"
                  className="home-page-button"
                  mb={5}
                  textAlign="center"
                  m="0"
                  p="10px"
                  // w="145px"
                  // borderStyle="outset"
                  cursor="pointer"
                  color="white"
                  fontWeight="normal"
                  h="100%"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Text as="span" color="white" fontWeight="700">
                    <Text as="span" fontSize="2.5rem" color="white">
                      BOOKS
                    </Text>
                    <Text m={0} fontSize="1.5rem" color="black">
                      BY OR ABOUT
                    </Text>
                    <Text m={0} fontSize="1.5rem" color="black">
                      TEMIMA GEZARI
                    </Text>
                    {/* <br /> BY OR ABOUT <br /> TEMIMA GEZARI */}
                  </Text>
                  {/* View books written by or about temima gezari */}
                </Text>
              </Link>
            </Flex>
            <Flex w="33%" className="homeButton">
              <Link href="/footprints-preview" w="100%" textAlign="center">
                <Text
                  bg="rgba(246,13,9,0.7)"
                  className="home-page-button"
                  mb={5}
                  textAlign="center"
                  m="0"
                  p="10px"
                  // w="145px"
                  // borderStyle="outset"
                  cursor="pointer"
                  // color="white"
                  color="black"
                  // fontWeight="700"
                  fontWeight="bold"
                  h="100%"
                  display="flex"
                  alignItems="center"
                  fontStyle="normal"
                  flexDirection="column"
                  justifyContent="center"
                  fontSize="1.2rem"
                  // lineHeight="1.2rem"
                >
                  <Text
                    as="span"
                    fontSize="1.2rem"
                    fontWeight="800"
                    // lineHeight="1.2rem"
                    pb={5}
                  >
                    PREVIEW
                  </Text>
                  <Text
                    as="span"
                    fontSize="1.8rem"
                    fontStyle="italic"
                    fontWeight="800"
                    // color="black"
                    color="white"
                  >
                    "FOOTPRINTS AND <br></br> NEW WORLDS"
                  </Text>
                  <Text
                    as="span"
                    fontSize="1.2rem"
                    fontWeight="800"
                    lineHeight="1.2rem"
                    pt={5}
                  >
                    CHAPTERS 1 AND 4
                  </Text>
                </Text>
              </Link>
            </Flex>
          </Flex>
          {/* <Flex wrap="wrap" mt={20}>
            <Flex w="100%" alignItems="center" h="100%" objectFit="contain">
              <Link href="/footprints-preview">
                <Text
                          bg="rgba(246,13,9,0.7)"
                          className="home-page-button"

                  mb={5} textAlign="center"
                  m="10px"
                  p="25px"
                  borderStyle="outset"
                  cursor="pointer"
                  color="white"
                  fontWeight="normal"
                  h="40px"
                  display="flex"
                  alignItems="center"
                >
                  Preview chapters 1 & 4 of Footprints and New Worlds
                </Text>
              </Link>
            </Flex>
            <Flex w="50%" className="row-button" alignItems="center" h="100%" objectFit="contain">
              <Link href="/artist">
                <Text
                          bg="rgba(246,13,9,0.7)"
                          className="home-page-button"

                  mb={5} textAlign="center"
                  m="10px"
                  p="25px"
                  borderStyle="outset"
                  cursor="pointer"
                  color="white"
                  fontWeight="normal"
                  h="40px"
                  display="flex"
                  alignItems="center"
                >
                  View Temima's CV containing some of her accomplishments
                </Text>
              </Link>
            </Flex>
            <Flex w="50%" className="row-button" alignItems="center" objectFit="contain">
              <Link href="/books" w="100%">
                <Text
                          bg="rgba(246,13,9,0.7)"
                          className="home-page-button"

                  mb={5} textAlign="center"
                  m="10px"
                  p="25px"
                  borderStyle="outset"
                  cursor="pointer"
                  color="white"
                  fontWeight="normal"
                  h="40px"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  View books written by or about temima gezari
                </Text>
              </Link>
            </Flex>
            <Flex w="50%" className="row-button" alignItems="center" objectFit="contain">
              <Link href="/philosophy">
                <Text
                          bg="rgba(246,13,9,0.7)"
                          className="home-page-button"

                  m="10px"
                  w="435px"
                  p="25px"
                  // border="1px solid black"
                  cursor="pointer"
                  color="white"
                  borderStyle="outset"
                  fontWeight="normal"
                  h="40px"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  View Temima's philosophy of art
                </Text>
              </Link>
            </Flex>
          </Flex> */}
        </Flex>
      )}
    </>
  );
};

export default Home;
