import { Box, Flex, Heading, Center, Image } from "@chakra-ui/react";
import background from "../assets/background.jpg";
import { useState } from "react";
import "../App.scss";

const CustomImage = ({ url, width }) => {
  const [hover, setHover] = useState(false);
  return (
    <Center
      flexDirection="column"
      onMouseOver={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      cursor="pointer"
      w="100%"
    >
      <Image
        h="100%"
        w="100%"
        objectFit="contain"
        src={require(`../artwork/${url}`).default}
      ></Image>

      <Flex
        w="80%"
        justifyContent="space-evenly"
        mt={6}
        cursor="pointer"
        visibility={hover ? "visible" : "hidden"}
        zIndex={100}
      ></Flex>
    </Center>
  );
};
const CoverPage = ({ setShowCover }) => {
  const [selected, setSelected] = useState(null);
  const images = [
    "Abstraction.jpg",
    "ATimeToDance.jpg",
    "Carousel.jpg",
    "GossipOnTheSubway.jpg",
    "Lighthouse.jpg",
    "VerticalAndHorizontal2.jpg",
  ];
  return (
    <Box>
      {/* <TransformWrapper
        centerOnInit={true}
        wheel={wheelProps}
        panning={panningProps}
        initialScale={1}
        maxScale={3}
        velocity={velocity}
        animation={animationProps}
        doubleClick={{
          animationType: "linear",
          step: 0.5,
          animationTime: 2000,
        }}
      >
        {({ resetTransform, zoomIn, centerView, ...rest }) => (
          <TransformComponent> */}
      <Flex
        w="100vw"
        h="100vh"
        t="5%"
        justifyContent="center"
        backgroundImage={background}
        backgroundPosition="center"
        backgroundSize="cover"
        backgroundRepeat="no-repeat"
        p={0}
        m={0}
        position="relative"
      >
        {/* <Button
                onClick={() => resetTransform()}
                position="fixed"
                top="20%"
              >
                reset
              </Button> */}
        <Heading
          position="absolute"
          top="5%"
          fontSize="3xl"
          className="header"
          textAlign="center"
        >
          TEMIMA GEZARI
        </Heading>
        <Heading
          position="absolute"
          top="12%"
          fontSize="2xl"
          className="subHeader"
        >
          Mid 20th Century American Artist
        </Heading>
        <Center
          flexDirection="column"
          m={12}
          position="absolute"
          left="1%"
          top="12%"
          w="12%"
        >
          <CustomImage url="Abstraction.jpg" width="15" />
        </Center>
        <Center m={12} position="absolute" top="20%" left="15%" w="22%">
          <CustomImage url="Carousel.jpg" width={0} />
        </Center>
        <Center m={12} position="absolute" top="22%" left="39%" w="27%">
          <CustomImage url="Lighthouse.jpg" width={0} />
        </Center>
        <Center m={12} position="absolute" top="55%" left="42%" w="26%">
          <CustomImage url="GossipOnTheSubway.jpg" width={0} />
        </Center>
        <Center m={12} position="absolute" top="62%" left="17%" w="22%">
          <CustomImage url="VerticalAndHorizontal2.jpg" width={0} />
        </Center>
        <Center m={12} position="absolute" left="69%" top="22%" w="15%">
          <CustomImage url="ATimeToDance.jpg" width={0} />
        </Center>
        <Center m={12} position="absolute" right="0%" top="14%" w="12%">
          <CustomImage url="TravelingToRockyPoint.jpg" width={0} />
        </Center>

        <Center m={12} position="absolute" left="-11%" bottom="0%" w="32%">
          <CustomImage url="LeapingLena.png" width={0} />
        </Center>
        <Center m={12} position="absolute" right="-10%" bottom="0%" w="32%">
          <CustomImage url="Conversation.png" width={0} />
        </Center>
      </Flex>
      {/* </TransformComponent> */}
      {/* )} */}
      {/* </TransformWrapper> */}
    </Box>
  );
};

export default CoverPage;
