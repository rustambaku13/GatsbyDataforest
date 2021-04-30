import { Flex } from "@chakra-ui/react";
import React from "react";
import LabelingStore from "../../store/LabelingStore";

import { DataDisplayer } from "../../dynamic/LabelingTool/DataDisplayer/DataDisplayer";
import { LabelsDisplayer } from "../../dynamic/LabelingTool/LabelsDisplayer/LabelsDisplayer";
import { Canvas } from "../../dynamic/LabelingTool/DrawingCanvas/Canvas";

const LabelingToolPage = () => {
  if (!LabelingStore.labelingToolReady) return null;
  return (
    <>
      <Flex pos="relative" overflow="hidden" h="100vh" w="100vw">
        <DataDisplayer />
        <LabelsDisplayer />
        <Canvas />
      </Flex>
    </>
  );
};
export default LabelingToolPage;
