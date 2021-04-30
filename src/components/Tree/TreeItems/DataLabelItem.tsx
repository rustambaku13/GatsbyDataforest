import { Button, IconButton } from "@chakra-ui/button";
import { Box } from "@chakra-ui/layout";
import { chakra } from "@chakra-ui/system";
import { observer } from "mobx-react-lite";
import React, { useEffect, useState } from "react";
import { DataLabel } from "../../../classes/DataLabel";
import { ChevronDownIcon } from "../../../icons/jsx/chevrondown";
import LabelingStore from "../../../store/LabelingStore";
import { MiniLabelsType } from "../../Misc/MiniLabelsType";

/**
 * Deafult Labeling item which is storing the selected label to the mobx labeling store
 */
export const DataLabelsItem = observer(
  ({
    label,
    children,
  }: {
    label: DataLabel;
    className: any;
    children?: any;
  }) => {
    const [expanded, setExpanded] = useState(true);
    return (
      <Box aria-expanded={expanded} h="36px" as="li">
        <Button
          onClick={(e) => {
            LabelingStore.selectedDataLabel == label
              ? (LabelingStore.selectDataLabel = null)
              : (LabelingStore.selectDataLabel = label);
          }}
          _hover={{ bg: "gold.light" }}
          aria-haspopup="menu"
          w="100%"
          variant="unstyled"
          justifyContent="start"
          _selected={{
            bg: "gold.light",
          }}
          aria-selected={LabelingStore.selectedDataLabel == label}
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
