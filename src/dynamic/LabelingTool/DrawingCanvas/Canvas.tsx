import { Box, Text } from "@chakra-ui/react";
import { observer } from "mobx-react-lite";
import React, { useEffect, useRef } from "react";
import { useLabelingTool } from "../../../hooks/useLabelingTool";
import LabelingStore from "../../../store/LabelingStore";
import { NumberInputToolModal } from "../Tools/NumberInputTool";

/**
 * Canvas is defining the view for canvas element and uses the useLabelingTool hook that contorls everything
 */
export const Canvas = observer(() => {
  const canvas = useRef(null);

  useLabelingTool(canvas);

  return (
    <>
      <NumberInputToolModal />
      <Box w="calc(100% - 600px )" pos="relative" zIndex={0} h="100%">
        <Text pos="absolute" zIndex={2} color="danger.base" textAlign="center">
          {LabelingStore.activeTool}
        </Text>
        <Box
          zIndex={1}
          pos="absolute"
          top="0"
          left="0"
          right="0"
          bottom="0"
          ref={canvas}
          w="100%"
          h="100%"
          bg="romanSilver.base"
          as="canvas"
        ></Box>
      </Box>
    </>
  );
});
