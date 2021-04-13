import {
  Button,
  IconButton,
  Box,
  Flex,
  Text,
  VStack,
  Divider,
} from "@chakra-ui/react";

import React from "react";
import { CrossIcon } from "../../../icons/jsx/cross";
import { HamburgerMenu } from "../../../icons/jsx/hamburger";
import LabelingStore from "../../../store/LabelingStore";
import { DataCard } from "./DataCard";

/*
===============================
Left Side Data Display and Selector
===============================
*/
export const DataDisplayer = () => {
  return (
    <Box borderRightWidth="1px" py={6} zIndex={1} bg="white" w="300px">
      <Flex mb={6} px={4}>
        <IconButton
          border="none"
          color="white"
          fontSize="200"
          aria-label="Close"
          bg="danger.base"
          borderRadius="50%"
          w="6"
          h="6"
          minW="unset"
          icon={<CrossIcon />}
        />
        <Text
          color="black"
          fontWeight="500"
          fontSize="500"
          textAlign="center"
          flex={1}
        >
          All Data
        </Text>
        <IconButton
          border="none"
          color="romanSilver.base"
          aria-label="Collapse"
          w="6"
          fontSize="700"
          h="6"
          minW="unset"
          icon={<HamburgerMenu />}
        />
      </Flex>
      <VStack w="100%" spacing={2}>
        {LabelingStore.data.map((file, index) => (
          <>
            <DataCard index={index} file={file} />
            {index < LabelingStore.data.length - 1 ? <Divider my={2} /> : null}
          </>
        ))}
      </VStack>
    </Box>
  );
};
