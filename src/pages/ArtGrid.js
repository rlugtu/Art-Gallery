import React, { useEffect, useState } from "react";
import { Flex, Heading, Image, Text, Link } from "@chakra-ui/react";
import artJson from "../assets/artworks/full.json";

const ArtGrid = ({ artStyle }) => {
  const [artType, setArtType] = useState("");

  useEffect(() => {
    // console.log(artStyle)
    setArtType(artStyle);
    // console.log(artJson[`${artStyle}`])
  }, []);
  return (
    <Flex flexDir="column" p="20px">
      <Heading mt={0} mb="20px" fontWeight="600">
        {artStyle[0].toUpperCase() + artStyle.slice(1)}
        <Text fontWeight="normal" as="span">
          {" "}
          in chronlogical order
        </Text>
      </Heading>
      <Flex w="100%" flexWrap="wrap">
        {artType &&
          artJson[`${artType}`].map((art, i) => (
            <Link href={`/artwork/${artType}/${art.src}`} cursor="pointer">
              <Flex w="175px" h="175px" m="2px">
                <Image
                  objectFit="cover"
                  w="100%"
                  h="100%"
                  src={
                    require(`../assets/thumbnails/${artType}/${art.src}.jpg`)
                      .default
                  }
                />
              </Flex>
            </Link>
          ))}
      </Flex>
    </Flex>
  );
};

export default ArtGrid;
