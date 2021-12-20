import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import artJson from "../assets/artworks/full.json";

import { Flex, Heading, Text, Image } from "@chakra-ui/react";
import '../styles/SingleArt.scss'

const SingleArt = ({ type }) => {
  const [art, setArt] = useState("");
  const [artData, setArtData] = useState({});
  const { id, style } = useParams();
  const history = useHistory();

  useEffect(() => {
    setArtData(artJson[style].filter((artPiece) => artPiece.src.includes(id)));
    // for(let art in artJson) {
    //   if(artJson[art].filter(artPiece => artPiece.src.includes(id))) {
    //     return setArtData(artJson[art].filter(artPiece => artPiece.src.includes(id)))
    //   }
    // }
  }, []);
  return (
    <Flex bg="white" justifyContent="center" w="100%" className="single-art-container">
      <Flex
        flexDir="column"
        alignItems="center"
        w="100%"
        onClick={() => history.goBack()}
        py={80}
        // maxWidth="1250px"
        px={120}
        maxH="100vh"
      >
        {artData[0] && (
          <Flex flexDir="column" w="100%">
            <Flex flexDir="column">
              <Image
                objectFit="contain"
                w="100%"
                h="100%"
                maxH="80vh"
                src={
                  require(`../assets/artworks/${style}/${artData[0].src}.jpg`)
                    .default
                }
              />
              <Flex justifyContent="flex-end">
                <Text mx={10} fontWeight="bold" fontStyle="italic">{artData[0].title}</Text>
                <Text mx={10}>{artData[0].year}</Text>
                <Text mx={10}>{artData[0].material}</Text>
                <Text mx={10}>{artData[0].size}</Text>
                <Text mx={10}>{artData[0].location}</Text>
                <Text></Text>
              </Flex>
            </Flex>
          </Flex>
        )}
      </Flex>
    </Flex>
  );
};

export default SingleArt;
