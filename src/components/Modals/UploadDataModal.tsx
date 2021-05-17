import {
  Box,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { DataUploadContext } from "../../context/DataUploadContext";
import { DataUploadProvider } from "../../providers/DataUploadProvider";
import LabelingStore from "../../store/LabelingStore";
import LayoutStore from "../../store/LayoutStore";
import { DropZone } from "../Dropzone/DropZone";
import { ListImageFileCards } from "../Cards/Data/ListFileCards";

// Upload Data Modal and continue with labeling
const ButtonSubmit = () => {
  const context = useContext(DataUploadContext);
  const onSubmit = () => {
    LabelingStore.uploadData(context.files);
    LayoutStore.uploadDataModalCallback();
    LayoutStore.uploadDataModalClose();
  };
  return (
    <Button onClick={onSubmit} mt={6} variant="babyBlue" w="100%">
      Start Labeling
    </Button>
  );
};
const HelperText = ()=>{
  const context = useContext(DataUploadContext)
                  return(
                    <Text mb={5} fontSize="300" variant="secondary">
                    {context.files.length?`${context.files.length} images are ready to be labeled`:"Please upload some files"}
                  </Text>
                  )
}
export const UploadDataModal = observer(() => {
  return (
    <Modal
      size="xl"
      isOpen={LayoutStore.uploadDataModalisOpen}
      onClose={() => {
        LayoutStore.uploadDataModalClose();
      }}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          Upload data{" "}
          <ModalCloseButton
            bg="outline.light"
            fontSize="200"
            h="6"
            w="6"
            borderRadius="50%"
          />
        </ModalHeader>

        <ModalBody>
          <DataUploadProvider>
            <DropZone />
            <Box borderRadius="base" borderWidth="1px" px={4} py={6}>
              <Text fontWeight="500">Submitted data</Text>
              <HelperText/>
              <ListImageFileCards overflow="visible" maxH="400px" />
            </Box>

            <ButtonSubmit />
          </DataUploadProvider>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
});
