import "../styles/Slideshow.scss";
import { Flex, Heading, Text, Stack, Link, Image } from "@chakra-ui/react";

const Slideshow = () => {
  const images = [
    "Abstraction.jpg",
    "ATimeToDance.jpg",
    "Carousel.jpg",
    "GossipOnTheSubway.jpg",
    "Lighthouse.jpg",
    "VerticalAndHorizontal2.jpg",
  ];

  return (
    <div className="section">
      <Heading
        className="slideshow-header"
        m={0}
        fontSize="3rem"
        w="100%"
        display="flex"
        justifyContent="center"
        mt="12vh"
        color="grey"
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

      <div className="slideshow-container">
        <ul className="slideshow-list">
          {images.map((item, i) => (
            <li className="slideshow-image-container">
              <img src={require(`../artwork/${item}`).default} alt="test" />
            </li>
          ))}
          {images.map((item, i) => (
            <li className="slideshow-image-container">
              <img src={require(`../artwork/${item}`).default} alt="test" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Slideshow;
