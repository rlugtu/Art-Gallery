import React, { useEffect, useState } from "react";
import { useParams,  useHistory } from "react-router-dom";
import artJson from "../assets/artworks/full.json";

import { Flex, Heading, Text, Image } from "@chakra-ui/react";

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
    <Flex flexDir="column" alignItems="center" w="100%" onClick={() => history.goBack()}>
      {artData[0] && (
        <Flex flexDir="column">
          <Flex h="80vh" w="90vw">
            <Image
            objectFit="contain"
            w="100%"
              src={
                require(`../assets/artworks/${style}/${artData[0].src}.jpg`)
                  .default
              }
            />
          </Flex>
          <Flex justifyContent="center">
            <Text mx={10}>
            {artData[0].title}
            </Text>
            <Text mx={10}>{artData[0].year}</Text>
            <Text mx={10}>{artData[0].material}</Text>
            <Text mx={10}>{artData[0].size}</Text>
            <Text mx={10}>{artData[0].location}</Text>
            <Text></Text>
          </Flex>
        </Flex>
      )}
    </Flex>
  );
};

export default SingleArt;
