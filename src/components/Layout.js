import Navbar from "./Navbar";
import Header from "./Header";
import { Flex, Button } from "@chakra-ui/react";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const Layout = ({ children }) => {
  const [showHeader, setShowHeader] = useState(true);

  const history = useHistory();

  return (
    <div className="content">
      <Navbar />
      <Flex flexDirection="column" className="site-content-with-header">
        {showHeader && <Header></Header>}
        <Flex borderLeft="1px solid black" bg="white"
        >
          <Button
            onClick={() => history.goBack()}
            mg="white"
            mt={20}
            ml={20}
            w="100px"
            cursor="pointer"
            border="1px solid black"
            fontSize="1rem"
          >
            Back
          </Button>
        </Flex>
        <main>{children}</main>
      </Flex>
    </div>
  );
};

export default Layout;
