import { Button, IconButton } from "@chakra-ui/button";
import { Box } from "@chakra-ui/layout";
import { chakra } from "@chakra-ui/system";
import React, { useState } from "react";
import { ChevronDownIcon } from "../../../icons/jsx/chevrondown";
import { TaskIcon } from "../../../icons/jsx/task";
import LayoutStore from "../../../store/LayoutStore";
import { Label, Task } from "../../../types/task";
import { MiniLabelsType } from "../../Labels/MiniLabelsType";

export const generateLabelRenders = ({ task }: { task: Task }) => {
  // Generate all React components for performance reasons for a given label
  const labels = task.labels;
  const labelStack = [...labels.reverse()];
  const renderedStack = [];
  while (labelStack.length) {
    const el = labelStack[labelStack.length - 1];
    if (el.children?.length) {
      // Push to stack
      if (el.visited) {
        labelStack.pop();
        const renderedChildren = renderedStack.splice(
          renderedStack.length - el.children.length,
          el.children.length
        ); // Remove the last N elements from renderStack where N is the number of children of el
        renderedStack.push(
          <LabelListItem label={el}>{renderedChildren}</LabelListItem>
        );
      } else {
        labelStack.push(...el.children.reverse());
        el.visited = true;
      }
      continue;
    }
    labelStack.pop();
    renderedStack.push(<LabelListItem label={el} />);
  }
  task.render = <>{renderedStack}</>;
};

const LabelListItem = ({
  label,
  children,
}: {
  label: Label;
  children?: any;
}) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <Box
      aria-expanded={expanded}
      onClick={() => {
        LayoutStore.labelDescriptionModalOpen(label);
      }}
      h="36px"
      as="li"
    >
      <Button
        aria-haspopup="menu"
        w="100%"
        variant="unstyled"
        justifyContent="start"
        aria-expanded={expanded}
        display="flex"
        alignItems="center"
        h="36px"
      >
        <MiniLabelsType mr={2} label={label} />
        {label.name}
        {label.children?.length ? (
          <IconButton
            aria-label="expand"
            onClick={(e) => {
              e.stopPropagation();
              setExpanded((expanded) => !expanded);
            }}
            icon={<ChevronDownIcon m={0} transition="0.2s ease-in-out" />}
            fontSize="200"
            borderWidth="0px"
            _hover={{
              bg: "babyBlueEyes.light",
            }}
            color="romanSilver.base"
            minW="unset"
            minH="unset"
            borderRadius="base"
            textAlign="center"
            h="20px"
            w="20px"
            p={0}
            ml="auto"
          ></IconButton>
        ) : null}
      </Button>
      <Box w="100%" pos="relative" display="none" role="menu" as="ul">
        {children}
      </Box>
    </Box>
  );
};
export const LabelsDropDown = chakra(
  ({ className, task }: { className?: any; task: Task }) => {
    const [expanded, setExpanded] = useState(false);
    return (
      <Box
        borderWidth={1}
        borderColor="outline.light"
        h="40px"
        w="100%"
        maxW="330px"
        aria-expanded={expanded}
        className={className + " label-dropdown"}
      >
        <Button
          aria-haspopup="menu"
          w="100%"
          fontWeight="500"
          aria-expanded={expanded}
          justifyContent="space-between"
          size="sm"
          variant="babyBlue"
          onClick={() => {
            setExpanded((expanded) => !expanded);
          }}
        >
          Labels <ChevronDownIcon transition="0.2s ease-in-out" />
        </Button>
        <Box
          bg="white"
          fontSize="400"
          role="menu"
          as="ul"
          w="100%"
          pos="relative"
          display="none"
        >
          {task.render}
        </Box>
      </Box>
    );
  }
);
