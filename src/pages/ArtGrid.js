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
    <Flex flexDir="column">
      <Heading>{artStyle[0].toUpperCase() + artStyle.slice(1)}<Text fontWeight="normal" as="span"> in Chronlogical Order</Text></Heading>
      <Flex w="100%" flexWrap="wrap">
        {artType &&
          artJson[`${artType}`].map((art, i) => (
            <Flex w="181px" h="181px" m="3px">
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
          ))}
      </Flex>
    </Flex>
  );
};

export default ArtGrid;
