import { Center, Image } from "@chakra-ui/react";
const CoverImage = ({ margin = 12, width = 8, url }) => {
  return (
    <Center m={margin}>
      <Image
        w={`${width}vw`}
        objectFit="contain"
        src={require(`../artwork/${url}`).default}
      ></Image>
    </Center>
  );
};
export default CoverImage;
