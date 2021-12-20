import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import artJson from "../assets/artworks/full.json";

import { Flex, Heading, Text, Image } from "@chakra-ui/react";

const FullArtSingle = ({ type }) => {
  const [artData, setArtData] = useState({});
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
      console.log(id)
    // setArtData(artJson[style].filter((artPiece) => artPiece.src === id ));
    // console.log(artJson)
    // for(let art in artJson) {
    //   if(artJson[art].filter(artPiece => artPiece.src.includes(id))) {
    //     return setArtData(artJson[art].filter(artPiece => artPiece.src.includes(id)))
    //   }
    // }
    for(let art in artJson) {
        // console.log(artJson[art])
        for(let i = 0; i < artJson[art].length; i++) {
            if(artJson[art][i].src === id) {
                setArtData(artJson[art][i])
            }
        }
    }
    console.log(artData)
  }, []);
  return (
    <Flex bg="white" justifyContent="center" w="100%">
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
        {artData && (
          <Flex flexDir="column" w="100%">
            <Flex flexDir="column">
                {artData.src && (
                    <Image
                      objectFit="contain"
                      w="100%"
                      h="100%"
                      maxH="80vh"
                      src={
                        require(`../assets/artworks/allArt/${artData.src}.jpg`)
                          .default
                      }
                    />

                )}
              <Flex justifyContent="flex-end">
                <Text mx={10}>{artData.title}</Text>
                <Text mx={10}>{artData.year}</Text>
                <Text mx={10}>{artData.material}</Text>
                <Text mx={10}>{artData.size}</Text>
                <Text mx={10}>{artData.location}</Text>
                <Text></Text>
              </Flex>
            </Flex>
          </Flex>
        )}
      </Flex>
    </Flex>
  );
};

export default FullArtSingle;
