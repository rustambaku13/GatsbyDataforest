import React, { useEffect, useRef } from "react";

import { Box } from "@chakra-ui/layout";
import paper from "paper";
import LabelingStore from "../../../store/LabelingStore";
import { useLabelingTool } from "../../../hooks/useLabelingTool";
import { observer } from "mobx-react-lite";

/* ==========================================================================
   Need to be wrapped into @loadable since paper does not work on server side 
   ========================================================================== */
const Canvas = observer(() => {
  const canvas = useRef(null);
  useLabelingTool();
  useEffect(() => {
    paper.install(window); // Add all classes to global scope

    LabelingStore.data.forEach((file: File) => {
      new Project(canvas.current);
    });
    var tool = new Tool();
    var path;

    // Define a mousedown and mousedrag handler
    tool.onMouseDown = function (event) {
      path = new Path();
      path.strokeColor = "black";
      path.add(event.point);
    };

    tool.onMouseDrag = function (event) {
      path.add(event.point);
    };
  }, []);
  return (
    <Box
      as="canvas"
      w="100%"
      zIndex={0}
      h="100%"
      pos="absolute"
      ref={canvas}
      bg="romanSilver.base"
    ></Box>
  );
});
export default Canvas;
