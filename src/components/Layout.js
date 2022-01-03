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
        <main>{children}</main>
      </Flex>
    </div>
  );
};

export default Layout;
