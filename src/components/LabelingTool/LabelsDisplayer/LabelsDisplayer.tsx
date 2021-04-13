import { Box, Flex, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { TaskIcon } from "../../../icons/jsx/task";
import LabelingStore from "../../../store/LabelingStore";
import { LabelsDropDown } from "../../Labels/Dropdown/LabelsDropDown";

export const LabelsDisplayer = () => {
  return (
    <Box borderRightWidth="1px" px={4} py={6} zIndex={1} bg="white" w="300px">
      <Text color="black" fontWeight="500" fontSize="500">
        Task Labels
      </Text>

      <LabelsDropDown task={LabelingStore.task} />
    </Box>
  );
};
