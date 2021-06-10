import { Button, IconButton } from "@chakra-ui/button";
import { Box } from "@chakra-ui/layout";
import { chakra } from "@chakra-ui/system";
import React, { useState } from "react";
import { ChevronDownIcon } from "../../../icons/jsx/chevrondown";
import LayoutStore from "../../../store/LayoutStore";
import { Label } from "../../../types/label";
import { MiniLabelsType } from "../../Misc/MiniLabelsType";
/**
 * The item that is used in BIgTask
 */
export const LabelTreeItem = chakra(
  ({
    label,
    children,
    level,
    className,
  }: {
    label: Label;
    className: any;
    level: number;
    children?: any;
  }) => {
    const [expanded, setExpanded] = useState(false);
    return (
      <Box
        aria-expanded={expanded}
        h="36px"
        as="li"
      >
        <Button
          className={className}
          aria-haspopup="menu"
          w="100%"
          onClick={() => {
            LayoutStore.labelDescriptionModalOpen(label);
          }}
          variant="unstyled"
          justifyContent="start"
          aria-expanded={expanded}
          _hover={{ bg: "gold.light" }}
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
