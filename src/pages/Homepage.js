import { Box, Flex } from "@chakra-ui/react";
import { useState } from "react";
import CoverPage from "../components/CoverPage";

const Homepage = () => {
  const [showCover, setShowCover] = useState(true);
  return <Box>{showCover && <CoverPage setShowCover={setShowCover} />}</Box>;
};

export default Homepage;
