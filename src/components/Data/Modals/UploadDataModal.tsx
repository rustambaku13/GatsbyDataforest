import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { DataUploadContext } from "../../../context/DataUploadContext";
import { DataUploadProvider } from "../../../providers/DataUploadProvider";
import LabelingStore from "../../../store/LabelingStore";
import LayoutStore from "../../../store/LayoutStore";
import { DropZone } from "../Dropzone/DropZone";
import { navigate } from "gatsby";
import { DropZoneImageFileCard } from "../Dropzone/DropZoneFileCards";
import { ListImageFileCards } from "../Dropzone/ListFileCards";

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
          Upload data <ModalCloseButton />
        </ModalHeader>

        <ModalBody>
          <DataUploadProvider>
            <DropZone />
            <ListImageFileCards p={3} overflowY="auto" maxH="400px" />

            <ButtonSubmit />
          </DataUploadProvider>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
});
