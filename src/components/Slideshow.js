// import "../styles/Slideshow.scss";
import { Flex, Heading, Button } from "@chakra-ui/react";
import SlideshowImage from "../components/SlideshowImage";
import Marquee from "react-fast-marquee";

const Slideshow = ({ enterSite }) => {
  const images = [
    "Abstraction.jpg",
    "ATimeToDance.jpg",
    "Carousel.jpg",
    "GossipOnTheSubway.jpg",
    "Lighthouse.jpg",
    "VerticalAndHorizontal2.jpg",
    "Abstraction.jpg",
    "ATimeToDance.jpg",
    "Carousel.jpg",
    "GossipOnTheSubway.jpg",
    "Lighthouse.jpg",
    "VerticalAndHorizontal2.jpg",
  ];

  const imageInfo = [
  
    {
      link: "ATimeToDance-11",
      image: "ATimeToDance.jpg",
    },  // {
    //   link: "Abstraction-95",
    //   image: "Abstraction.jpg",
    // },
    {
      link: "Carousel-122",
      image: "Carousel.jpg",
    },
    {
      link: "GossipontheSubway-1",
      image: "GossipOnTheSubway.jpg",
    },
    {
      link: "Lighthouse-6",
      image: "Lighthouse.jpg",
    },
    {
      link: "VerticalHorizontal2",
      image: "VerticalAndHorizontal2.jpg",
    },
  ];

  return (
    <div className="section">
      <Heading
        className="slideshow-header"
        m={0}
        fontSize="4rem"
        w="100%"
        display="flex"
        justifyContent="center"
        mt="12vh"
        color="light gray"
      >
        TEMIMA GEZARI
      </Heading>
      <Heading
        className="slideshow-header"
        m={0}
        fontSize="2rem"
        w="100%"
        display="flex"
        justifyContent="center"
        color="grey"
      >
        MID-TWENTIETH CENTURY AMERICAN ARTIST AND EDUCATOR
      </Heading>
      <Marquee speed={40} gradient={false} pauseOnHover={true}>
        <ul className="slideshow-list">
          {/* <Flex w="90vw"h="500px"></Flex> */}
          {imageInfo.map((item, i) => (
            <SlideshowImage image={item} />
          ))}
        </ul>
      </Marquee>
      {/* <div className="slideshow-container">
        <ul className="slideshow-list">
          {images.map((item, i) => (
            <SlideshowImage image={item}/>
          ))}
        </ul>
      </div> */}

      {/* <div>
        <ul className="slideshow-list">
          {images.map((item, i) => (
            <SlideshowImage image={item}/>
          ))}
        </ul>
      </div> */}
      <Flex justifyContent="center" w="100%" mt={60}>
        <Button
          onClick={() => enterSite()}
          border="none"
          fontSize="1.5rem"
          px="20px"
          py="10px"
          cusror="pointer"
        >
          Enter
        </Button>
      </Flex>
    </div>
  );
};

export default Slideshow;
