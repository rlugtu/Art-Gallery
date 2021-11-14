import {useState, useEffect} from 'react'
import {
  Box,
  Flex,
  Grid,
  Heading,
  Center,
  Image,
  Button,
  Text,
  Link,
} from "@chakra-ui/react";
import CoverPage from "../components/CoverPage";


// Leaping Lena,
// NEWSBOY,

const Home = () => {
  const [showCover, setShowCover] = useState(true)

  return (
    <>
    { showCover ?
    <Flex pos="absolute" w="100vw" h="100vh" top={0} left={0} onClick={() => setShowCover(false)}> 
      <CoverPage />

    </Flex>
    :
    <Flex p={12} flexDir="column">
    <Flex wrap="wrap">
      <Flex w="50%" alignItems="center" flexDir="column">
        <Link href="/sculptures">
          <Heading textAlign="center">SCULPTURE</Heading>
          <Flex
            cursor="pointer"
            _hover={{
              border: "3px solid black",
            }}
          >
            <Flex w="145px" h="145px">
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
            <Flex w="145px" h="145px">
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
            <Flex w="145px" h="145px">
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
          </Flex>
        </Link>
      </Flex>

      {/* // paintings
// lighthouse
// Indian woman in doorway
// gossip on the subway */}

      <Flex w="50%" alignItems="center" flexDir="column">
        <Link href="/paintings">
          <Heading textAlign="center">PAINTINGS</Heading>
          <Flex
            cursor="pointer"
            _hover={{
              border: "3px solid black",
            }}
          >
            <Flex w="145px" h="145px">
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
            <Flex w="145px" h="145px">
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
            <Flex w="145px" h="145px">
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

      {/* // drawings
//head
// seated nude
// standing nude */}

      <Flex w="50%" alignItems="center" flexDir="column">
        <Link href="/drawings">
          <Heading textAlign="center">DRAWINGS</Heading>
          <Flex
            cursor="pointer"
            _hover={{
              border: "3px solid black",
            }}
          >
            <Flex w="145px" h="145px">
              <Image
                objectFit="cover"
                w="100%"
                h="100%"
                src={
                  require(`../assets/thumbnails/drawings/Head-7.jpg`).default
                }
              />
            </Flex>
            <Flex w="145px" h="145px">
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
            <Flex w="145px" h="145px">
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

      {/* //lithographs
// shabbos spatzir
// the little presser
// four sisters  */}
      <Flex w="50%" alignItems="center" flexDir="column">
        <Link href="/lithographs">
          <Heading textAlign="center">LITHOGRAPHS</Heading>
          <Flex
            cursor="pointer"
            _hover={{
              border: "3px solid black",
            }}
          >
            <Flex w="145px" h="145px">
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
            <Flex w="145px" h="145px">
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
            <Flex w="145px" h="145px">
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
          bg="#b7ac44"
          textAlign="center"
          m="10px"
          p="25px"
          border="1px solid black"
          cursor="pointer"
          _hover={{
            border: "3px solid black",
          }}
        >
          CLICK HERE TO READ PREVIEW - CHAPTER 1 & 4 OF TEMIMA'S BOOK
          "FOOTPRINTS AND NEW WORLDS"
        </Text>
      </Link>

        
      </Flex>
      <Flex w="50%" alignItems="center" h="100%" objectFit="contain">
        <Link href="/artist">
        <Text
          bg="#b7ac44"
          textAlign="center"
          m="10px"
          p="25px"
          border="1px solid black"
          cursor="pointer"
          _hover={{
            border: "3px solid black",
          }}
        >
          CLICK HERE TO VIEW TEMIMA'S CV CONTAINING SOME OF HER
          ACCOMPLISHMENTS
        </Text>
        
        </Link>
      </Flex>
      <Flex w="50%" alignItems="center" h="100%" objectFit="contain">
        <Link href="/books">
        <Text
          bg="#b7ac44"
          textAlign="center"
          m="10px"
          p="25px"
          border="1px solid black"
          cursor="pointer"
          _hover={{
            border: "3px solid black",
          }}
        >
          CLICK HERE TO VIEW BOOKS WRITTEN BY OR FEATURING TEMIMA
        </Text>

        </Link>
      </Flex>
      <Flex w="50%" alignItems="center" objectFit="contain">
        <Link href="/philosophy">
        <Text
          bg="#b7ac44"
          display="flex"
          alignItems="center"
          justifyContent="center"
          m="10px"
          w="435px"
          p="25px"
          border="1px solid black"
          cursor="pointer"
          _hover={{
            border: "3px solid black",
          }}
          h="88px"
        >
          CLICK HERE TO VIEW TEMIMA'S PHILOSOPHY
        </Text>

        </Link>
      </Flex>
    </Flex>
  </Flex>
  }
  </>
    
  );
};

export default Home;
