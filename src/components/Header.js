import { Flex, Link, Image } from "@chakra-ui/react";
import "../styles/Header.scss";

const Header = () => {
  return (
    <Flex
      flexDirection="column"
      justifyContent="space-between"
      className="header"
    >
      <Flex>
        <Flex>
          <Image
            h="174px"
            w="165px"
            objectFit="cover"
            src={require("../assets/header/header1.jpg").default}
          />
        </Flex>
        <Flex>
          <Image
            h="174px"
            w="165px"
            objectFit="cover"
            src={require("../assets/header/header2.jpg").default}
          />
        </Flex>
        <Flex>
          <Image
            h="174px"
            w="150px"
            objectFit="cover"
            src={require("../assets/header/header3.jpeg").default}
          />
        </Flex>
        <Flex>
          <Image
            h="174px"
            w="500px"
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
        py={4}
      >
        <Link textAlign="center" color="white" exact href="/instructions">
          INSTRUCTIONS
        </Link>
        <Link textAlign="center" color="white" exact href="/artist ">
          WHO WAS TEMIMA?
        </Link>
        <Link textAlign="center" color="white" exact href="/books">
          BOOKS
        </Link>
        <Link textAlign="center" color="white" exact href="/foundation">
          FOUNDATION
        </Link>
        <Link textAlign="center" color="white" exact href="/volunteer">
          VOLUNTEER
        </Link>
        <Link textAlign="center" color="white" exact href="/mailing-list">
          MAILING LIST
        </Link>
        <Link textAlign="center" color="white" exact href="/contact">
          CONTACT
        </Link>
      </Flex>
    </Flex>
  );
};

export default Header;
