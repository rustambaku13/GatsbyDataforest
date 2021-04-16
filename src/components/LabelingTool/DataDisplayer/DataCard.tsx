import {
  Box,
  Center,
  chakra,
  Flex,
  Text,
  Image,
  Badge,
  AspectRatio,
} from "@chakra-ui/react";
import React from "react";
import LabelingStore from "../../../store/LabelingStore";
import { Submission } from "../../../types/submission";
/*
===============================
Data Card that is used in Data Displayer Labeling Tool
===============================
*/

export const DataCard = chakra(
  ({
    file,
    className,
    index,
  }: {
    file: File;
    className?: any;
    index: number;
  }) => {
    return (
      <Flex
        as="button"
        onClick={() => {
          LabelingStore.setSelectedData(index);
        }}
        w="100%"
        className={className}
        px={4}
        py={2}
        bg="white"
      >
        <AspectRatio
          borderRadius="base"
          mr={3}
          overflow="hidden"
          flex="0 0 72px"
          ratio={3 / 2}
        >
          <Image src={file.preview} />
        </AspectRatio>
        <Text fontWeight="500" color="black" fontSize="400">
          {file.name}
        </Text>
      </Flex>
    );
  }
);
