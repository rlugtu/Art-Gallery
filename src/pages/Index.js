import { useState } from "react";
import { Flex, Heading, Image, Text, Link } from "@chakra-ui/react";
import "../styles/Index.scss";
import Slideshow from "../components/Slideshow";
import FadingCoverPage from "../components/FadingCoverPage"
import Carousel from 'fade-carousel';
import Slider from "react-slick";

// Leaping Lena,
// NEWSBOY,

const Home = ({ setHasVisited, hasVisited }) => {
  const [showCover, setShowCover] = useState(true);

  const enterSite = () => {
    setShowCover(false);
    setHasVisited(true);
  };

  const slideshow = [
    {
      sculpture: "LeapingLena-5.jpg",
      painting: "Lighthouse-6.jpg",
      drawing: "Head-7.jpg",
      lithograph: "ShabbosShpatzir-1.jpg",
    },
    {
      sculpture: "WomansHead-0.jpg",
      painting: "DanielAge7-9.jpg",
      drawing: "SeatedNude-4.jpg",
      lithograph: "TheLittlePresser-3.jpg",
    },
    {
      sculpture: "Juggler-18.jpg",
      painting: "RosietheLobsterman-8.jpg",
      drawing: "StandingNude-10.jpg",
      lithograph: "FourSisters-0.jpg",
    },
    {
      sculpture: "AmericanEagle-Crucifixion-67.jpg",
      painting: "ATimeToDance-11.jpg",
      drawing: "Figure-3.jpg",
      lithograph: "TheWorldSituation-4.jpg",
    },
    {
      sculpture: "Conversation-36.jpg",
      painting: "Fisherman-4.jpg",
      drawing: "TreeofLife(CircleonaSquare)-13.jpg",
      lithograph: "WashDay-Kibbutz-5.jpg",
    },
    {
      sculpture: "WalterAge5-13.jpg",
      painting: "PuebloIndianWoman-2.jpg",
      drawing: "MyStudio-19.jpg",
      lithograph: "WashDay-Kibbutz-5.jpg",
    }
    

  
  ]
  

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
          <Carousel
         delay={3000} mode={"fade"} 
        >
          {slideshow.map((slide) => (
              <FadingCoverPage 
              sculpture={slide.sculpture}
              painting={slide.painting}
              drawing={slide.drawing}
              lithograph={slide.lithograph}       
              />
          ))}
          </Carousel>
          {/* <Flex className="row">
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
                        require(`../assets/thumbnails/illustrations/-2.jpg`)
                          .default
                      }
                    />
                  </Flex>
                 
                </Flex>
              </Link>
            </Flex>
          </Flex> */}
          <Flex w="100%" h="150px" flexDirection="row" mt={20}>
            <Flex w="33%" className="homeButton">
              <Link href="/philosophy" w="100%" textAlign="center">
                <Text
                  bg="#b7ac44"
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
                      fontSize="2rem"
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
                  bg="#b7ac44"
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
                    <Text as="span" fontSize="2rem" color="white">
                      BOOKS
                    </Text>
                    <Text m={0} fontSize="1.5rem" color="black">
                      BY AND ABOUT
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
                  bg="#b7ac44"
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
                    READ EXERPTS FROM
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
                    CHAPTERS 1 & 4
                  </Text>
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
