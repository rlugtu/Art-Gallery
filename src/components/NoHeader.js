import Navbar from "./Navbar";
import { Flex, Button } from "@chakra-ui/react";
import { Route, Switch } from "react-router-dom";
import { useHistory } from "react-router-dom";

const NoHeader = ({ children, ...rest }) => {
  const history = useHistory();

  return (
    <>
      <div className="content">
        <Navbar />

        <Flex flexDirection="column" className="site-content-with-header" minH="100vh" bg="white" >
          {/* <Flex borderLeft="1px solid black" bg="white"
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
          </Flex> */}
          <main>{children}</main>
        </Flex>
      </div>
    </>
  );
};

export default NoHeader;
