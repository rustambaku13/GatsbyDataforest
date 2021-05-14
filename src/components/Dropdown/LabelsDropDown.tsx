import { Button, IconButton } from "@chakra-ui/button";
import { Box } from "@chakra-ui/layout";
import { chakra } from "@chakra-ui/system";
import React, { useState } from "react";
import { ChevronDownIcon } from "../../icons/jsx/chevrondown";
import LayoutStore from "../../store/LayoutStore";
import { Label } from "../../types/label";
import { Task } from "../../types/task";
import { MiniLabelsType } from "../Misc/MiniLabelsType";
import { LabelTreeCore } from "../Tree/LabelTree";
import { LabelTreeItem } from "../Tree/TreeItems/LabelTreeItem";

/**
 * Labeling DropDown that is used in BigPublicTask Component
 */
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
          <LabelTreeCore labels={task.labels || []} Element={LabelTreeItem} />
        </Box>
      </Box>
    );
  }
);
