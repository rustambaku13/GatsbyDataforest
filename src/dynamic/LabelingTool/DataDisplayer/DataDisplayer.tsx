import {
  Button,
  IconButton,
  Box,
  Flex,
  Text,
  VStack,
  Divider,
} from "@chakra-ui/react";
import { navigate } from "gatsby-link";
import { observer } from "mobx-react-lite";

import React, { useState } from "react";
import { CrossIcon } from "../../../icons/jsx/cross";
import { HamburgerMenu } from "../../../icons/jsx/hamburger";
import LabelingStore from "../../../store/LabelingStore";
import LayoutStore from "../../../store/LayoutStore";
import { DataCard } from "./DataCard";

/**
 * Data displayer part of the canvas. The very left side
 * @returns React.Element
 */
export const DataDisplayer = observer(() => {
  const [expanded,setExpanded] = useState(true)
  const closeLabelingStore = async ()=>{
    navigate(`/tasks/${LabelingStore.task.id}`)
    LabelingStore.resetAll()
  }
  return (
    <Box
      borderRightWidth="1px"
      py={6}
      zIndex={1}
      bg="white"
      overflow='hidden'
      aria-expanded={expanded}
      _expanded={{
        maxW:"300px",
          ".hide-on-expand":{
            d:"unset"
          }        
      }}
      w="100%"
      transition=".3s ease"
      sx={{
        ".hide-on-expand":{
          d:"none"
        }
      }}
      maxW='50px'

    >
      <Flex mb={6} px={4}>
        <IconButton
          className='hide-on-expand'
          border="none"
          color="white"
          fontSize="200"
          aria-label="Close"
          bg="danger.base"
          borderRadius="50%"
          w="6"
          h="6"
          minW="unset"
          onClick={()=>{
            LayoutStore.alertModalOpen({
              yes:"Yes",
              no:"No",
              callback:closeLabelingStore,
              description:"All unsubmitted data will be lost",
              title:"Are you sure to exit data upload",
              type:"error"
            })
          }}

          icon={<CrossIcon mx='auto'/>}
        />
        <Text
          className='hide-on-expand'
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
          onClick={()=>{setExpanded(!expanded)}}
          fontSize="700"
          h="6"
          minW="unset"
          icon={<HamburgerMenu />}
        />
      </Flex>
      <VStack className='hide-on-expand' w="100%" spacing={2}>
        {LabelingStore.data.map((file, index) => (
          <>
            <DataCard index={index} file={file} />
            {index < LabelingStore.data.length - 1 ? <Divider my={2} /> : null}
          </>
        ))}
      </VStack>
    </Box>
  );
});
