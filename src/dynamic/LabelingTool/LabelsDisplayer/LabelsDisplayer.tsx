import { Box, Button, Flex, Text, VStack } from "@chakra-ui/react";
import { observer } from "mobx-react-lite";
import React, { useState } from "react";
import LabelingStore from "../../../store/LabelingStore";
import { LabelTree } from "../../../components/Tree/LabelTree";
import { DataLabelsItem } from "../../../components/Tree/TreeItems/DataLabelItem";
import { flowResult } from "mobx";

/**
 * Label Displaer Part of the Canvas View
 *
 */
export const LabelsDisplayer = observer(() => {
  const [loading,setLoading] = useState(false)

  const handleOneSubmission = ()=>{
    setLoading(true)
    flowResult(LabelingStore.submitCurrentlyWorking()).then(()=>{

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
    >
      <Text mb={2} color="black" fontWeight="500" fontSize="500">
        Task Labels
      </Text>
      <LabelTree labels={LabelingStore.task.labels} />
      <Text mt={7} mb={2} color="black" fontWeight="500" fontSize="500">
        My Labels
      </Text>
      <LabelTree
        element={DataLabelsItem}
        labels={LabelingStore.dataLabels[LabelingStore.selectedData] || []}
      />
      <Flex  alignItems='center' h='80px' mt="auto">
        <Button isLoading={loading} onClick={()=>{handleOneSubmission()}} size='sm' variant='babyBlue'  >
          Upload Data
        </Button>
      </Flex>
    </Flex></Box>
  );
});
