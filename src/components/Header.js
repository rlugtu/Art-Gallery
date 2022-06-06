import { Flex, Link, Image, Text } from "@chakra-ui/react";
import "../styles/Header.scss";

const Header = () => {
  return (
    <Flex
      flexDirection="column"
      justifyContent="space-between"
      className="header"
      maxW="950px"
      h="204px"
    >
      <Flex>
        <Flex>
          <Image
            h="175px"
            w="160px"
            objectFit="cover"
            src={require("../assets/header/header1.jpg").default}
          />
        </Flex>
        <Flex>
          <Image
            h="175px"
            w="140px"
            objectFit="cover"
            src={require("../assets/header/header3.jpeg").default}
          />
        </Flex>
        <Flex>
          <Image
            h="175px"
            w="159px"
            objectFit="cover"
            src={require("../assets/header/header2.jpg").default}
          />
        </Flex>
        <Flex>
          <Image
            h="175px"
            w="489px"
            src={require("../assets/header/header4.jpg").default}
          />
        </Flex>
      </Flex>
      <Flex
        className="header-nav"
        justifySelf="flex-end"
        backgroundColor="black"
        color="white"
        justifyContent="space-evenly"
        alignItems="center"
        h="39px"
      >
        {/* <Link textAlign="center" color="white" exact href="/instructions">
          <Text p={0} m={0} color="#bdbdbd">
            INSTRUCTIONS
          </Text>
        </Link> */}
        <Link textAlign="center" color="white" exact href="/artist ">
          <Text p={0} m={0} color="#bdbdbd">
            {" "}
            WHO IS TEMIMA?
          </Text>
        </Link>
        <Link textAlign="center" color="white" exact href="/books2">
          <Text p={0} m={0} color="#bdbdbd">
            {" "}
            BOOKS
          </Text>
        </Link>
        <Link textAlign="center" color="white" exact href="/foundation">
          <Text p={0} m={0} color="#bdbdbd">
            {" "}
            FOUNDATION
          </Text>
        </Link>
        <Link textAlign="center" color="white" exact href="/volunteer">
          <Text p={0} m={0} color="#bdbdbd">
            {" "}
            VOLUNTEER
          </Text>
        </Link>
        <Link textAlign="center" color="white" exact href="/mailing-list">
          <Text p={0} m={0} color="#bdbdbd">
            {" "}
            MAILING LIST
          </Text>
        </Link>
        <Link textAlign="center" color="white" exact href="/contact">
          <Text p={0} m={0} color="#bdbdbd">
            CONTACT
          </Text>
        </Link>
      </Flex>
    </Flex>
  );
};

export default Header;
