import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  Text,
  ModalBody,
  ModalCloseButton,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Heading,
  Box,
  Button,
  Input,
} from "@chakra-ui/react";

import LabelingStore from "../../../store/LabelingStore";
import { useForm } from "react-hook-form";
export const NumberInputToolModal = () => {
  const labelname = LabelingStore.selectedTaskLabel?.name;
  const { register, handleSubmit, setError, formState } = useForm();
  const { errors } = formState;
  const onSubmit = ({ value }) => {
    if (isNaN(value)) return setError("value", { message: "Number Input" });
    LabelingStore.addDataLabel(value);
    LabelingStore.activeTool = "norm";
  };

  return (
    <Modal
      isOpen={LabelingStore.activeTool == "number"}
      onClose={() => {
        LabelingStore.activeTool = "norm";
      }}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <ModalCloseButton />
        </ModalHeader>
        <ModalBody>
          <Box as="form" onSubmit={handleSubmit(onSubmit)} py={6}>
            <Heading
              mb={2}
              fontSize="600"
              fontWeight="500"
              color="black"
              textAlign="center"
            >
              {labelname}
            </Heading>
            <Text mb={6} textAlign="center" variant="secondary" fontSize="500">
              {LabelingStore.selectedTaskLabel?.description}
            </Text>
            <Box mx="auto" maxW="200px" w="100%">
              <Input
                {...register("value", {
                  required: "Value is required",
                  valueAsNumber: true,
                })}
                name="value"
                size="lg"
                placeholder={`Please enter ${labelname}`}
                max={30}
                clampValueOnBlur={false}
              ></Input>
              <Text as="small" color="danger.base">
                {errors.value?.message}
              </Text>
              <Button
                mt={6}
                w="100%"
                variant="babyBlue"
                float="right"
                type="submit"
              >
                Add Label
              </Button>
            </Box>
          </Box>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
