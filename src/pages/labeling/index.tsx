import { Flex } from "@chakra-ui/react";
import Loadable from "@loadable/component";
import React from "react";
import { DataDisplayer } from "../../components/LabelingTool/DataDisplayer/DataDisplayer";
// const DrawingCanvas = Loadable(
//   () => import("../../components/LabelingTool/DrawingCanvas/Canvas")
// );
const LabelingToolPage = () => {
  return (
    <>
      <Flex pos="relative" overflow="hidden" h="100vh" w="100vw">
        <DataDisplayer />
        {/* <LabelsDisplayer /> */}
        {/* <DrawingCanvas /> */}
      </Flex>
    </>
  );
};
export default LabelingToolPage;
