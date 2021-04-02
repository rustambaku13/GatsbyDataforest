import { Button } from "@chakra-ui/button";
import { Box } from "@chakra-ui/layout";
import { chakra } from "@chakra-ui/system";
import React, { useState } from "react";
import { ChevronDownIcon } from "../../icons/jsx/chevrondown";
import { TaskIcon } from "../../icons/jsx/task";
import { Label, Task } from "../../types/task";
import { MiniLabelsType } from "../Labels/MiniLabelsType";

export const generateLabelRenders = ({ task }: { task: Task }) => {
  // Generate all React components for performance reasons
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
      _hover={{ bg: "romanSilver.light" }}
      aria-expanded={expanded}
      h="36px"
      as="li"
    >
      <Button
        aria-haspopup="menu"
        w="100%"
        variant="unstyled"
        justifyContent="start"
        onClick={() => {
          setExpanded((expanded) => !expanded);
        }}
        aria-expanded={expanded}
        display="flex"
        alignItems="center"
        h="36px"
      >
        <MiniLabelsType mr={2} label={label} />
        {label.name}
        {label.children?.length ? (
          <ChevronDownIcon
            transition="0.2s ease-in-out"
            ml={1}
            fontSize="300"
            color="romanSilver.base"
          />
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
