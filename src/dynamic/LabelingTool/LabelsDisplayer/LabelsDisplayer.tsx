import { Box, Button, Flex, Text, VStack,useToast } from "@chakra-ui/react";
import { observer } from "mobx-react-lite";
import React, { useState } from "react";
import LabelingStore from "../../../store/LabelingStore";
import { LabelTree } from "../../../components/Tree/LabelTree";
import { DataLabelsItem } from "../../../components/Tree/TreeItems/DataLabelItem";
import { flowResult } from "mobx";
import TOASTS from "../../../toasts";
import { navigate } from "gatsby-link";

/**
 * Label Displaer Part of the Canvas View
 *
 */
export const LabelsDisplayer = observer(() => {
  const [loading,setLoading] = useState(false)
  const toast = useToast()
  const handleOneSubmission = ()=>{
    setLoading(true)
    flowResult(LabelingStore.submitCurrentlyWorking()).then(()=>{
        toast(TOASTS("LABEL_ADDED"))
        if(LabelingStore.data.length==0){
          navigate(`/tasks/${LabelingStore.task.id}`)
          LabelingStore.resetAll()
          
        }
    }).catch(()=>{

    }).finally(()=>{
      setLoading(false)
    })
  }
  return (
    <Box><Flex
      py={0}
      flexDir='column'
      h='100%'
      alignItems='flex-start'
      borderRightWidth="1px"
      px={4}
      pt={6}

      zIndex={1}
      bg="white"
      minW="300px"
      w="300px"
    ><Box overflow='auto' w='100%' >
      <Text mb={2} color="black" fontWeight="500" fontSize="500">
        Task Labels
      </Text>
      <LabelTree labels={LabelingStore.task?.labels || []} />
      </Box>
      <Box className='scrollbar' overflow='auto' w='100%' flex='1'>
      <Text mt={7} mb={2} color="black" fontWeight="500" fontSize="500">
        My Labels
      </Text>
      <LabelTree
        element={DataLabelsItem}
        labels={LabelingStore.dataLabels[LabelingStore.selectedData] || []}
      />
      </Box>
      <Flex  alignItems='center' h='80px' mt="auto">
        <Button isLoading={loading} onClick={()=>{handleOneSubmission()}} size='sm' variant='babyBlue'  >
          Upload Data
        </Button>
      </Flex>
    </Flex></Box>
  );
});
