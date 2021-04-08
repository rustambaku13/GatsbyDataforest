import React from "react";
import { observer } from "mobx-react-lite";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import LayoutStore from "../../../store/LayoutStore";
export const LabelDescriptionModal = observer(() => {
  return (
    <Modal
      isOpen={LayoutStore.labelDescriptionModalisOpen}
      onClose={() => {
        LayoutStore.labelDescriptionModalClose();
      }}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          Label <ModalCloseButton />
        </ModalHeader>

        <ModalBody></ModalBody>
      </ModalContent>
    </Modal>
  );
});
