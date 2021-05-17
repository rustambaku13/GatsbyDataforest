import { Button } from "@chakra-ui/button";
import { FormControl } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { Box, Center, Flex, Text, VStack } from "@chakra-ui/layout";
import { Select } from "@chakra-ui/select";
import { chakra } from "@chakra-ui/system";
import React, { useContext, useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import { PlusIcon } from "../../../icons/jsx/plus";
import { LabelTree } from "../../Tree/LabelTree";
import { LabelTreeItem } from "../../Tree/TreeItems/LabelTreeItem";
import {
  LabelInputContext,
  LabelMode,
} from "../../../context/LabelInputContext";
import { AddTaskLabelItem } from "../../Tree/TreeItems/AddTaskLabelItem";
import { TaskLabel } from "../../../types/label";

const LABEL_FIELDS = [
  "label.name",
  "label.description",
  "label.annotation_type",
  "label.attendancy",
  "label.cardinality",
];

export const LabelInput = (props) => {
  const [mode, setMode]: [LabelMode, any] = useState("norm");
  const [labels, setLabels]: [TaskLabel[], any] = useState([]);
  const [selectedLabel, setSelectedLabel]: [TaskLabel, any] = useState(null);
  const { register, setValue } = useFormContext();
  const addLabel = (label) => {
    if (selectedLabel) {
      selectedLabel.children.push(label);
    } else {
      labels.push(label);
    }
    setLabels([...labels]);

    setMode("norm");
  };
  useEffect(() => {
    setValue("labels", labels);
  }, [labels]);
  return (
    <LabelInputContext.Provider
      value={{
        mode,
        setMode,
        labels,
        addLabel,
        selectedLabel,
        setSelectedLabel,
      }}
    >
      {props.children}
      <input
        type="hidden"
        {...register("labels", {
          required: "Labels are required",
          minLength: 1,
        })}
      />
    </LabelInputContext.Provider>
  );
};
LabelInput.Displayer = chakra(({ className }) => {
  const context = useContext(LabelInputContext);
  if (context.labels.length == 0) {
    return (
      <Center flexDir="column" className={className}>
        <Text fontSize="hb4" opacity="0.5">
          &#128532;
        </Text>
        <Text variant="secondary">Please add annotation</Text>
      </Center>
    );
  }

  return (
    <Box className={className}>
      <LabelTree element={AddTaskLabelItem} labels={context.labels} />
    </Box>
  );
});

LabelInput.Input = (props) => {
  const { register } = useFormContext();
  const context = useContext(LabelInputContext);
  return (
    <>
      <Flex>
        <Button
          onClick={(e) => {
            e.preventDefault();
            context.setMode("ann");
          }}
          variant="outline"
          borderColor="persianGreen.base"
          color="persianGreen.base"
          size="sm"
          mr={2}
          leftIcon={<PlusIcon fontSize="300" />}
        >
          Add Annotation
        </Button>
        <Button
          leftIcon={<PlusIcon fontSize="300" />}
          onClick={(e) => {
            e.preventDefault();
            context.setMode("label");
          }}
          variant="persianGreen"
          size="sm"
        >
          Add Label
        </Button>
      </Flex>
    </>
  );
};

LabelInput.AddNewLabel = (props) => {
  const { register, formState, trigger, getValues } = useFormContext();
  const context = useContext(LabelInputContext);
  if (context.mode == "label") {
    return (
      <VStack alignItems="flex-start" spacing={4} w="100%" mt={8}>
        <Flex w="100%">
          <Text fontWeight="500" mr="auto" color="black" d="inline-block">
            New Label
          </Text>

          <Button
            onClick={(e) => {
              e.preventDefault();
              context.setMode("norm");
            }}
            mr={2}
            size="xs"
            variant="error"
          >
            Delete
          </Button>
          <Button
            onClick={async (e) => {
              e.preventDefault();
              const succ = await trigger(LABEL_FIELDS);
              if (succ) {
                const label = getValues("label");
                label.is_annotation = false;
                label.children = [];
                context.addLabel(label);
              }
            }}
            size="xs"
            variant="success"
          >
            Save
          </Button>
        </Flex>

        <FormControl>
          <Input
            {...register("label.name", {
              required: "Enter annotation name",
              shouldUnregister: true,
            })}
            size="lg"
            placeholder="Short name"
          />
          <Text fontSize="300" color="danger.base">
            {formState.errors.label?.name?.message}
          </Text>
        </FormControl>
        <FormControl>
          <Input
            {...register("label.description", {
              required: "Enter annotation description",
              shouldUnregister: true,
            })}
            size="lg"
            placeholder="Description of the label"
          />
          <Text fontSize="300" color="danger.base">
            {formState.errors.label?.description?.message}
          </Text>
        </FormControl>
        <FormControl>
          <Select
            {...register("label.label_type", {
              required: "Enter label type",
              shouldUnregister: true,
            })}
            size="lg"
            variant="outline"
            placeholder="Label Type"
          >
            <option value="number">Number</option>
            <option value="text">Text</option>
            <option value="date">Date</option>
            <option value="boolean">Boolean</option>
            <option value="image">Image</option>
            <option value="file">File</option>
          </Select>
          <Text fontSize="300" color="danger.base">
            {formState.errors.label?.label_type?.message}
          </Text>
        </FormControl>
        <FormControl>
          <Select
            {...register("label.attendancy", {
              required: "Enter label attendancy",
              shouldUnregister: true,
            })}
            size="lg"
            variant="outline"
            placeholder="Label Attendancy"
          >
            <option value="M">Must Have</option>
            <option value="O">Optional</option>
          </Select>
          <Text fontSize="300" color="danger.base">
            {formState.errors.label?.attendancy?.message}
          </Text>
        </FormControl>
        <FormControl>
          <Select
            {...register("label.cardinality", {
              required: "Enter label cardinality",
              shouldUnregister: true,
            })}
            size="lg"
            variant="outline"
            placeholder="Label Cardinality"
          >
            <option value="S">One per Image</option>
            <option value="M">Many per Image</option>
          </Select>
          <Text fontSize="300" color="danger.base">
            {formState.errors.label?.cardinality?.message}
          </Text>
        </FormControl>
      </VStack>
    );
  }
  return null;
};

LabelInput.AddNewAnnotation = (props) => {
  const {
    register,
    formState,
    setError,
    trigger,
    getValues,
  } = useFormContext();
  const context = useContext(LabelInputContext);

  if (context.mode == "ann") {
    return (
      <VStack alignItems="flex-start" spacing={4} w="100%" mt={8}>
        <Flex w="100%">
          <Text fontWeight="500" mr="auto" color="black" d="inline-block">
            New Annotation
          </Text>

          <Button
            onClick={(e) => {
              e.preventDefault();
              context.setMode("norm");
            }}
            mr={2}
            size="xs"
            variant="error"
          >
            Delete
          </Button>
          <Button
            onClick={async (e) => {
              e.preventDefault();
              const succ = await trigger(LABEL_FIELDS);
              if (
                context.selectedLabel &&
                !context.selectedLabel.is_annotation
              ) {
                setError("label.global", {
                  message: "Annotation cannot be under a label",
                });
                return;
              }

              if (succ) {
                const label = getValues("label");
                label.is_annotation = true;
                label.children = [];
                context.addLabel(label);
              }
            }}
            size="xs"
            variant="success"
          >
            Save
          </Button>
        </Flex>

        <FormControl>
          <Input
            {...register("label.name", {
              required: "Enter annotation name",
              shouldUnregister: true,
            })}
            size="lg"
            placeholder="Short name"
          />
          <Text fontSize="300" color="danger.base">
            {formState.errors.label?.name?.message}
          </Text>
        </FormControl>
        <FormControl>
          <Input
            {...register("label.description", {
              required: "Enter annotation description",
              shouldUnregister: true,
            })}
            size="lg"
            placeholder="Description of the annotation"
          />
          <Text fontSize="300" color="danger.base">
            {formState.errors.label?.description?.message}
          </Text>
        </FormControl>
        <FormControl>
          <Select
            {...register("label.annotation_type", {
              required: "Enter annotation Name",
              shouldUnregister: true,
            })}
            size="lg"
            variant="outline"
            placeholder="Annotation Type"
          >
            <option value="rect">Rectangle Box</option>
          </Select>
          <Text fontSize="300" color="danger.base">
            {formState.errors.label?.annotation_type?.message}
          </Text>
        </FormControl>
        <FormControl>
          <Select
            {...register("label.attendancy", {
              required: "Enter annotation attendancy",
              shouldUnregister: true,
            })}
            size="lg"
            variant="outline"
            placeholder="Annotation Attendancy"
          >
            <option value="M">Must Have</option>
            <option value="O">Optional</option>
          </Select>
          <Text fontSize="300" color="danger.base">
            {formState.errors.label?.attendancy?.message}
          </Text>
        </FormControl>
        <FormControl>
          <Select
            {...register("label.cardinality", {
              required: "Enter annotation cardinality",
              shouldUnregister: true,
            })}
            size="lg"
            variant="outline"
            placeholder="Annotation Cardinality"
          >
            <option value="S">{context.selectedLabel?`One per ${context.selectedLabel.name}`:"One per Image"}</option>
            <option value="M">{context.selectedLabel?`Many per ${context.selectedLabel.name}`:"Many per Image"}</option>
          </Select>
          <Text fontSize="300" color="danger.base">
            {formState.errors.label?.cardinality?.message}
          </Text>
        </FormControl>
        <Text fontSize="300" color="danger.base">
          {formState.errors.label?.global?.message}
        </Text>
      </VStack>
    );
  }
  return null;
};
