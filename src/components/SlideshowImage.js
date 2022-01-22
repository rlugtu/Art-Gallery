import {
  Flex,
  Image,
  Link,
  Modal,
  ModalOverlay,
  Button,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import "../styles/Slideshow.scss";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const SlideshowImage = ({ image }) => {
  const [pulse, setPulse] = useState(false);
  const [startPulse, setStartPulse] = useState(false);
  const [secondPulse, setSecondPulse] = useState(false);
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0,
  });
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    if (inView) {
      setPulse(true);
    }
    if (!inView) {
      setPulse(false);
    }
  }, [image, inView]);

  // useEffect(() => {
  //   if (image === "ATimeToDance.jpg") {
  //     setStartPulse(true);
  //   }
  //   if (image === "Carousel.jpg") {
  //     setSecondPulse(true);
  //   }
  //   if (!inView) {
  //     setStartPulse(false);
  //     setSecondPulse(false);
  //   }
  // }, [image, inView]);
  return (
    <>
      <Flex ref={ref} onClick={onOpen}>
        {/* <Link href={`/full/artwork/${image.link}`}> */}
        <Image
          objectFit="contain"
          mx={20}
          className={`slideshow-image-container ${pulse ? "pulse" : ""} ${
            startPulse ? "startPulse" : ""
          } ${secondPulse ? "secondPulse" : ""}`}
          src={require(`../artwork/${image.image}`).default}
          alt="test"
        />
        {/* </Link> */}
      </Flex>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <h1>hi</h1>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default SlideshowImage;
