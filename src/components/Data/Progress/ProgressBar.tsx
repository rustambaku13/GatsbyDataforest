import { Box } from "@chakra-ui/react";
import React from "react";

export const ProgressBar = ({ progress }: { progress: string }) => {
  return (
    <Box
      overflow="hidden"
      h="6px"
      w="100%"
      bg="outline.light"
      borderRadius="base"
    >
      <Box bg="success.base" h="inherit" w={progress + "%"}></Box>
    </Box>
  );
};
