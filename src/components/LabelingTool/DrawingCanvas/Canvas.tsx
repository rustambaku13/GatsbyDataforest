import { Box } from "@chakra-ui/layout";
import { observer } from "mobx-react-lite";
import React, { useRef } from "react";
import { useLabelingTool } from "../../../hooks/useLabelingTool";

/* ==========================================================================
   Need to be wrapped into @loadable since paper does not work on server side 
   ========================================================================== */
const Canvas = observer(() => {
  const canvas = useRef(null);
  useLabelingTool(canvas);
  return (
    <Box
      as="canvas"
      w="calc(100% - 300px )"
      zIndex={0}
      h="100%"
      pos="absolute"
      right="0px"
      ref={canvas}
      bg="romanSilver.base"
    ></Box>
  );
});
export default Canvas;
