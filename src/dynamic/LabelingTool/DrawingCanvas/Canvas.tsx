import { Box, Center, Text } from "@chakra-ui/react";
import { observer } from "mobx-react-lite";
import React, { useEffect, useRef } from "react";
import { useLabelingTool } from "../../../hooks/useLabelingTool";
import LabelingStore from "../../../store/LabelingStore";
import { NumberInputToolModal } from "../Tools/NumberInputTool";
import { TextInputToolModal } from "../Tools/TextInputTool";
import { BooleanInputToolModal } from "../Tools/BooleanInputTool";


const LABELING_TOOL_NAMES = {
  "norm":"Selection Mode",
  "rect":"Box Annotation",
  "text":"Text Label",
  "number":"Number Label",
}

const CanvasHints = observer(()=>{

switch(LabelingStore.state){
  case "SELECT_LABEL":
    return <Center zIndex={3}
    pos="absolute"
    top="0"
    left="0"
    right="0"
    bottom="0"  w="100%"
    h="100%" bg='rgba(0,0,0,0.7)'>
      <Text fontSize='700' color='white'>
        Click on a task label to start
      </Text>
    </Center>
  case "SELECT_DATA_LABEL":
    return <Center zIndex={3}
    pos="absolute"
    top="0"
    left="0"
    right="0"
    bottom="0"  w="100%"
    h="100%" bg='rgba(0,0,0,0.7)'>
      <Text fontSize='700' color='white'>
        Click on a data label to start
      </Text>
    </Center>
  default:
    return null
}



})

/**
 * Canvas is defining the view for canvas element and uses the useLabelingTool hook that contorls everything
 */
export const Canvas = observer(() => {
  const canvas = useRef(null);

  useLabelingTool(canvas);

  return (
    <>
      <NumberInputToolModal />
      <TextInputToolModal/>
      <BooleanInputToolModal/>
      <Box w="calc(100% - 600px )" pos="relative" zIndex={0} h="100%">
        <Box  pos="absolute" w='100%'   zIndex={2}  >
          <Box color='romanSilver.base' textAlign='center' h='32px' lineHeight='32px' m='0 auto' borderBottomRightRadius='base' borderBottomLeftRadius='base' w='200px' bg='white'>
            {LABELING_TOOL_NAMES[LabelingStore.activeTool]}
          </Box>
        </Box>
        <CanvasHints/>
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
          bg="#C4C4C4"
          as="canvas"
        ></Box>
      </Box>
    </>
  );
});
