import { Box } from "@chakra-ui/layout";
import { chakra } from "@chakra-ui/system";
import React, { useEffect, useState } from "react";
import { Label } from "../../types/label";
import { TaskLabelsItem } from "./TreeItems/TaskLabelsItem";
/**
 * The Core nesting logic.
 *
 * @param labels Labels of the task in a
 * @param Element Element that renders each individual label and its sublabels
 * @returns React Fragment of the <Elements>
 *
 */
export const LabelTreeCore = ({ labels, Element }) => {
  const [renderedStack, setRenderedStack] = useState([]);

  useEffect(() => {
    const renderedStack = [];
    const labelStack = labels.slice().reverse();
    while (labelStack.length) {
      const el = labelStack[labelStack.length - 1];
      if (el.children?.length) {
        // Push to stack
        if (el.visited) {
          el.visited = false;
          labelStack.pop();
          const renderedChildren = renderedStack.splice(
            renderedStack.length - el.children.length,
            el.children.length
          ); // Remove the last N elements from renderStack where N is the number of children of el
          renderedStack.push(<Element label={el}>{renderedChildren}</Element>);
        } else {
          labelStack.push(...el.children.reverse());
          el.visited = true;
        }
        continue;
      }
      labelStack.pop();
      renderedStack.push(<Element label={el} />);
    }
    labelStack.forEach((item) => (item.visited = false));
    setRenderedStack([...renderedStack]);
  }, [labels]);

  return <React.Fragment>{renderedStack}</React.Fragment>;
};
/**
 * Deafult LabelTree for LabelingTool.
 */
export const LabelTree = chakra(
  ({
    className,
    labels,
    element = TaskLabelsItem,
  }: {
    className?: any;
    labels: Label[];
    element?: any;
  }) => {
    return (
      <Box w="100%" className={className + " label-dropdown"}>
        <Box fontSize="400" role="menu" as="ul" w="100%" pos="relative">
          <LabelTreeCore labels={labels} Element={element} />
        </Box>
      </Box>
    );
  }
);
