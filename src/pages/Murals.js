import { useState } from "react";

import { Flex, Heading, Image } from "@chakra-ui/react";
import MuralSingle from "../components/MuralSingle";
import MuralPdf from "./MuralPdf";

const Murals = () => {
  const [art, setArt] = useState(null);
  const [showSingle, setShowSingle] = useState(false);

  const setter = (str) => {
    setArt(str);
    setShowSingle(true);
  };
  return (
    <>
      {showSingle ? (
        <MuralSingle art={art} setShowSingle={setShowSingle} />
      ) : (
        <Flex p={20} flexDirection="column">
          <Heading m={0} mb={40}>
            Murals
          </Heading>
          <Flex h="190px" className="art-grid">
            <Flex
              w="460px"
              h="100%"
              border="2px solid white"
              onClick={() => setter("harvestMural")}
            >
              <Image
                objectFit="cover"
                w="100%"
                h="100%"
                src={
                  require("../assets/artworks/murals/HarvestMural.jpg").default
                }
              />
            </Flex>
            <Flex
              w="190px"
              h="100%"
              border="2px solid white"
              onClick={() => setter("sedjwinPainting")}
            >
              <Image
                objectFit="cover"
                w="100%"
                h="100%"
                src={
                  require("../assets/artworks/murals/SejwinPainting.jpg")
                    .default
                }
              />
            </Flex>
          </Flex>
          <Flex h="260px" w="100%" mt={80} className="art-grid">
            <Flex
              w="100%"
              h="auto"
              border="2px solid white"
              onClick={() => setter("landOfIsraelFull")}
            >
              <Image
                // objectFit="cover"
                w="100%"
                h="100%"
                src={
                  require("../assets/artworks/murals/landOfIsraelWholeMural.jpg")
                    .default
                }
              />
            </Flex>
          </Flex>
          <Flex mt={10} className="art-grid">
            <Flex
              w="150px"
              h="256px"
              // border="2px solid white"
              onClick={() => setter("landOfIsraelBottomLeft")}
            >
              <Image
                // objectFit="cover"
                w="100%"
                h="100%"
                src={
                  require("../assets/artworks/murals/LandOfIsraelBottomLeft.jpg")
                    .default
                }
              />
            </Flex>

            <Flex
              w="auto"
              h="155px"
              // border="2px solid white"
              onClick={() => setter("landOfIsraelMiddleLeft")}
            >
              <Image
                // objectFit="cover"
                w="100%"
                h="100%"
                src={
                  require("../assets/artworks/murals/LandOfIsraelMiddleLeft.jpg")
                    .default
                }
              />
            </Flex>
            <Flex
              w="auto"
              h="155px"
              // border="2px solid white"
              onClick={() => setter("landOfIsraelMiddleRight")}
            >
              <Image
                // objectFit="cover"
                w="100%"
                h="100%"
                src={
                  require("../assets/artworks/murals/LandOfIsraelMidRight.jpg")
                    .default
                }
              />
            </Flex>
            <Flex
              w="150px"
              h="256px"
              // border="2px solid white"
              onClick={() => setter("landOfIsraelBottomRight")}
            >
              <Image
                // objectFit="contain"
                w="100%"
                h="100%"
                src={
                  require("../assets/artworks/murals/LandOfIsraelBottomRight.jpg")
                    .default
                }
              />
            </Flex>
          </Flex>
          <Flex
            mt={80}
            className="art-grid"
            onClick={() => setter("rockyPoint")}
          >
            <Flex w="350px">
              <Image
                objectFit="cover"
                w="100%"
                h="100%"
                src={
                  require("../assets/artworks/murals/RockyPoint.jpg").default
                }
              />
            </Flex>
          </Flex>
          <MuralPdf />
        </Flex>
      )}
    </>
  );
};

export default Murals;
