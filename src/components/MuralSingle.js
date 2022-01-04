import { Flex, Heading, Image, Text } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import artData from "../assets/jsonFiles/murals.json";

const MuralSingle = ({ art, setShowSingle }) => {
  const [artInfo, setArtInfo] = useState(null);

  useEffect(() => {
    setArtInfo(artData[art][0]);
  }, [art]);
  return (
    <Flex
      justifyContent="center"
      alignContent="center"
      w="100vw"
      minH="100vh"
      pos="absolute"
      top={0}
      left={0}
      bg="rgb(195, 195, 195)"
      onClick={() => setShowSingle(false)}
    >
      {artInfo && (
        <Flex
          flexDirection="column"
          maxW="1280px"
          p={80}
          className="single-art-container"
          bg="white"
        >
          <Flex maxW="90vw" maxH="80vh">
            <Image
              objectFit="contain"
              w="100%"
              h="100%"
              src={
                require(`../assets/artworks/murals/${artInfo.src}.jpg`).default
              }
            />
          </Flex>
          <Flex alignSelf="center">
            <Text fontWeight="bold" fontStyle="italic">
              {artInfo.title}
            </Text>
            <Text pl="20">{artInfo.year}</Text>
            <Text pl="20">{artInfo.material}</Text>
            <Text pl="20">{artInfo.size}</Text>
            <Text pl="20">{artInfo.location}</Text>
          </Flex>

          {art === "landOfIsraelFull" && (
            <Flex flexDir="column">
              <Flex h="600px" w="100%" overflow="scroll">
                <Image
                  objectFit="contain"
                  w="200%"
                  h="100%"
                  src={
                    require(`../assets/artworks/murals/${artInfo.src}.jpg`)
                      .default
                  }
                />
              </Flex>

              <Flex flexDir="column">
                <Heading>Land of Israel Mural</Heading>
                <Flex h="100px" w="100%">
                  <Image
                    h="100%"
                    src={
                      require(`../assets/artworks/murals/Plaque.jpg`).default
                    }
                  />
                </Flex>
                <Text>
                  In keeping with the philosophy of The Society for the
                  Advancement of Judaism which sees the survival of Judaism only
                  in its creativity and its power to reinterpret and revitalize
                  Jewish tradition, I was called upon to paint a mural for its
                  synagogue in memory of Israel Unterberg, one of the founders
                  of the Society. Having but recently returned from an eight
                  month’s visit to Palestine, I chose as my subject “Old and New
                  Elements in Modern Palestine.” The Approach I used was based
                  on an incident which happened on one of my trips through the
                  Emek. In a field I saw a halutz at work and stopped to speak
                  with him. The sun was mercilessly hot. He rested for a few
                  minutes from his hard work and explained a number of things to
                  me. When I asked him what machinery he used in the field, he
                  held out his hands, palms up. They were rough and caloused;
                  the hands of a worker. “These are my machines,” he said, “with
                  them I helped build our colony.” My eyes swept with pride
                  across the fields, the huts, the sheds, the barns and lingered
                  an instant most lovingly as they lit on the new school
                  building just completed. In it his child was busy at his
                  studies. His gaze continued its tour of the surroundings, and
                  then returned to me. “Yes,” he repeated, “these are my
                  machines—and that is why I am so content.” I looked at the
                  hands. They were the hands of a worker indeed, strong and
                  broad and developed; but the face beaming down upon these
                  hands was fine and sensitive, despite the many layers of skin,
                  hardened and toughened by sun and wind. What a wonderful theme
                  to develop in a painting, I mused: the joy of creating with
                  one’s hands, at once the crudest and most developed of all
                  tools. It conjured up a picture of hands digging into the
                  soil, hands sowing, hands weeding, hands gathering in the
                  harvest. Even though machines of steel and iron break the
                  barren soil of Palestine, scatter seeds into innumerable
                  furrows, and hasten the ingathering season by producing
                  tremendous results in a limited time, the greatest joy comes
                  to the worker when together with his companions he tends the
                  flourishing vegetable plots, picks oranges and packs grapes.
                  His voice rises in song. In modern times, with the expanding
                  of the synagogue from merely a place of worship to a place of
                  assembly for forums, recitals and meetings of all kinds, the
                  attitude toward the decorations on its walls is also
                  undergoing a broadening process. The variety of subject matter
                  at the disposal of the artist is infinite, covering the whole
                  range of human and Jewish aspirations throughout the ages and
                  at the present time. The Jewish artist has a vast field for
                  creative work. Murals should occupy a definite place in the
                  architectural layout of synagogue. At the Society for the
                  Advancement of Judaism, the panels are placed on the south
                  wall, over and flanking the two large entrance doors. Although
                  they have considerable depth, they are painted on a
                  two-dimensional plane and do not in any way violate the
                  primary law of mural place on the wall as such. It is the hope
                  of those interested in the development of Jewish creative
                  activities that more efforts will be made in the future to
                  beautify the walls of Jewish places of worship and assembly.
                  There is a definite place for synagogue decoration in our day,
                  just as there was in the days when our forefathers gathered
                  multicolored stones to form mosaic panels that are found in
                  archeological excavations of the elaborately decorated ancient
                  synagogues of the Land of Israel.”(from an article by Temima
                  Gezari in the May 1935 issue of “The Reconstructionist”)
                </Text>
              </Flex>
            </Flex>
          )}
        </Flex>
      )}
    </Flex>
  );
};

export default MuralSingle;
