import { Box, Text } from "@chakra-ui/react";
import { observer } from "mobx-react-lite";
import React from "react";
import LabelingStore from "../../../store/LabelingStore";
import { LabelTree } from "../../../components/Tree/LabelTree";
import { DataLabelsItem } from "../../../components/Tree/TreeItems/DataLabelItem";

/**
 * Label Displaer Part of the Canvas View
 *
 */
export const LabelsDisplayer = observer(() => {
  return (
    <Box
      borderRightWidth="1px"
      px={4}
      py={6}
      zIndex={1}
      bg="white"
      minW="300px"
      w="300px"
    >
      <Text mb={2} color="black" fontWeight="500" fontSize="500">
        Task Labels
      </Text>
      <LabelTree labels={LabelingStore.task.labels} />
      <Text mt={7} mb={2} color="black" fontWeight="500" fontSize="500">
        Data Labels
      </Text>
      <LabelTree
        element={DataLabelsItem}
        labels={LabelingStore.dataLabels[LabelingStore.selectedData] || []}
      />
    </Box>
  );
});
