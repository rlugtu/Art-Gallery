import React, { useEffect, useState } from "react";
import { Flex, Heading, Image, Text, Link } from "@chakra-ui/react";
import artJson from "../assets/artworks/full.json";
import "../styles/SingleArt.scss";
const ArtGrid = ({ artStyle }) => {
  const [artType, setArtType] = useState("");

  useEffect(() => {
    // console.log(artStyle)
    setArtType(artStyle);
    // console.log(artJson[`${artStyle}`])
  }, [artStyle]);

  const formatHeader = (word) => {
    if (word === "TemimaLife") {
      return "Temima";
    }

    if (word === "Rockypointstudio") {
      return "Rockypoint Studio";
    }
    return word;
  };

  const formatChron = (artType) => {
    if (artType === "temimaLife") {
      return "";
    }
    if (artType === "rockypointstudio") {
      return "";
    }
    return " in chronological order";
  };

  return (
    <Flex flexDir="column" p="20px">
      <Heading mt={0} mb="20px" fontWeight="600">
        {formatHeader(artStyle[0].toUpperCase() + artStyle.slice(1))}
        <Text fontWeight="normal" as="span">
          {formatChron(artType)}
        </Text>
      </Heading>
      <Flex w="100%" flexWrap="wrap">
        {artType &&
          artJson[`${artType}`].map((art, i) => (
            <Link href={`/artwork/${artType}/${art.src}`} className="art-grid">
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
