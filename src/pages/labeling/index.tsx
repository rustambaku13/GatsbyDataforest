import { Box, Flex } from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import Helmet from "react-helmet";
import Loadable from "@loadable/component";
import { DataDisplayer } from "../../components/LabelingTool/DataDisplayer/DataDisplayer";
import { LabelsDisplayer } from "../../components/LabelingTool/LabelsDisplayer/LabelsDisplayer";
const DrawingCanvas = Loadable(
  () => import("../../components/LabelingTool/DrawingCanvas/Canvas")
);
const LabelingToolPage = () => {
  return (
    <>
      <Flex pos="relative" overflow="hidden" h="100vh" w="100vw">
        <DataDisplayer />
        <LabelsDisplayer />
        <DrawingCanvas />
      </Flex>
    </>
  );
};
export default LabelingToolPage;
