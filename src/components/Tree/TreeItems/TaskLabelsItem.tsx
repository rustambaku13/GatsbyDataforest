import { Button, IconButton } from "@chakra-ui/button";
import { Box } from "@chakra-ui/layout";
import { observer } from "mobx-react-lite";
import React, { useState } from "react";
import { TaskLabel } from "../../../classes/TaskLabel";
import { ChevronDownIcon } from "../../../icons/jsx/chevrondown";
import LabelingStore from "../../../store/LabelingStore";

import { MiniLabelsType } from "../../Misc/MiniLabelsType";

/**
 * Deafult Labeling item which is storing the selected label to the mobx labeling store
 */
export const TaskLabelsItem = observer(
  ({
    label,
    children,
  }: {
    label: TaskLabel;
    className: any;
    children?: any;
  }) => {
    const [expanded, setExpanded] = useState(false);
    return (
      <Box aria-expanded={expanded} h="36px" as="li">
        <Button
          onClick={(e) => {
            LabelingStore.selectedTaskLabel == label
              ? (LabelingStore.selectTaskLabel = null)
              : (LabelingStore.selectTaskLabel = label);
          }}
          _hover={{ bg: "gold.light" }}
          aria-haspopup="menu"
          w="100%"
          variant="unstyled"
          justifyContent="start"
          _selected={{
            bg: "gold.light",
          }}
          aria-selected={LabelingStore.selectedTaskLabel == label}
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
  }
);
