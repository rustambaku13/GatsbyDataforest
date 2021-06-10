import {
  Box,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  Text,
  ModalOverlay,
  SimpleGrid,
} from "@chakra-ui/react";
import { observer } from "mobx-react-lite";
import React from "react";
import { CARDINALITY_MAPPER,ATTENDANCY_MAPPER } from "../../helpers/mappers";
import LayoutStore from "../../store/LayoutStore";
import { Label, TaskLabel } from "../../types/label";



const LabelInformation = ({label}:{label:TaskLabel}) => {
  if(label.is_annotation){
    return(
      <SimpleGrid spacingX={6} spacingY={4} columns={2}>
            <Box>
              <Text fontSize='500' variant='secondary' as='label'>
                Name
              </Text>
              <Text>
                {label.name}
              </Text>
            </Box>
            <Box>
              <Text fontSize='500' variant='secondary' as='label'>
                Cardinality
              </Text>
              <Text>
                {CARDINALITY_MAPPER[label.cardinality]}
              </Text>
            </Box>
            <Box>
              <Text fontSize='500' variant='secondary' as='label'>
                Description
              </Text>
              <Text>
                {label.description}
              </Text>
            </Box>
            <Box>
              <Text fontSize='500' variant='secondary' as='label'>
                Attendancy
              </Text>
              <Text>
                {ATTENDANCY_MAPPER[label.attendancy]}
              </Text>
            </Box>
        </SimpleGrid>
    )
  }
  return(
    <SimpleGrid spacingX={6} spacingY={4} columns={2}>
          <Box>
            <Text fontSize='500' variant='secondary' as='label'>
              Name
            </Text>
            <Text>
              {label.name}
            </Text>
          </Box>
          <Box>
            <Text fontSize='500' variant='secondary' as='label'>
              Cardinality
            </Text>
            <Text>
              {CARDINALITY_MAPPER[label.cardinality]}
            </Text>
          </Box>
          <Box>
            <Text fontSize='500' variant='secondary' as='label'>
              Description
            </Text>
            <Text>
              {label.description}
            </Text>
          </Box>
          <Box>
            <Text fontSize='500' variant='secondary' as='label'>
              Attendancy
            </Text>
            <Text>
              {ATTENDANCY_MAPPER[label.attendancy]}
            </Text>
          </Box>
          <Box>
            <Text fontSize='500' variant='secondary' as='label'>
              Label Type
            </Text>
            <Text textTransform='capitalize'>
              {label.label_type}
            </Text>
          </Box>
      </SimpleGrid>
  )
}

export const LabelDescriptionModal = observer(() => {
  return (
    <Modal

      isOpen={LayoutStore.labelDescriptionModalisOpen}
      onClose={() => {
        LayoutStore.labelDescriptionModalClose();
      }}
    >
      <ModalOverlay />
      <ModalContent  minW='600px' >
        <ModalHeader>
          {LayoutStore.labelDescriptionModalData?.is_annotation?"Annotation":"Label"} <ModalCloseButton />
        </ModalHeader>
        <ModalBody  >
        {LayoutStore.labelDescriptionModalData?<LabelInformation label={LayoutStore.labelDescriptionModalData}/>:null}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
});
