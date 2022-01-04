import { Flex, Image, Link } from "@chakra-ui/react";
import "../styles/Slideshow.scss";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const SlideshowImage = ({ image }) => {
  const[pulse, setPulse] = useState(false)
  const[startPulse, setStartPulse] = useState(false)
  const [secondPulse, setSecondPulse] = useState(false)
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0,
  });


  useEffect(() => {
    if (inView) {
      setPulse(true)
    } 
    if(!inView) {
      setPulse(false)
    }
  }, [image, inView])

  useEffect(() => {
    if(image === "ATimeToDance.jpg") {
      setStartPulse(true)
    }
    if(image === "Carousel.jpg") {
      setSecondPulse(true)
    }
    if(!inView) {
      setStartPulse(false)
      setSecondPulse(false)

    }
  },[image, inView])
  return (
    <>
      <Flex ref={ref}>
        <Link href={`/full/artwork/${image.link}`}>
        <Image
          objectFit="contain"
          mx={40}
          className={`slideshow-image-container ${pulse ? 'pulse' : ''} ${startPulse ?'startPulse' : ''} ${secondPulse ?'secondPulse' : ''}` }
          src={require(`../artwork/${image.image}`).default}
          alt="test"
        />
        </Link>
      </Flex>
    </>
  );
};

export default SlideshowImage;
