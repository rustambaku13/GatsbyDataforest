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
import React from "react";
import { DataUploadProvider } from "../../../providers/DataUploadProvider";
import LayoutStore from "../../../store/LayoutStore";
import { DropZone } from "../Dropzone/DropZone";
import { DropZoneFileCard } from "../Dropzone/DropZoneFileCard";

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
            <DropZone Card={DropZoneFileCard} />
          </DataUploadProvider>
          <Button mt={6} variant="babyBlue" w="100%">
            Start Labeling
          </Button>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
});
