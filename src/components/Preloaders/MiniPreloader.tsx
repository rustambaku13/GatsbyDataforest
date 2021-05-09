import { Box } from "@chakra-ui/layout";
import React from "react";

export const MiniPreloader = () => {
  return (
    <Box my="6" w="10" mx="auto" h="10" className="infinityChrome">
      <div></div>
      <div></div>
      <div></div>
    </Box>
  );
};
