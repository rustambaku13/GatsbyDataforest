import {
  AspectRatio,
  Box,
  chakra,
  Circle,
  Flex,
  IconButton,
  Image,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { DataUploadContext } from "../../../context/DataUploadContext";
import { CrossIcon } from "../../../icons/jsx/cross";
import { DeleteIcon } from "../../../icons/jsx/delete";

/**
 * Creates a dropdzone image uploader. Needs to wrapped inside of DataUploadContext provider
 */
export const DropZoneImageFileCard = chakra(
  ({ file, className }: { file: File; className?: any }) => {
    const context = React.useContext(DataUploadContext);
    const onDelete = () => {
      context.removeFile(file);
    };
    return (
      <Box className={className} overflow="visible" pos="relative">
        <AspectRatio borderRadius="base" overflow="hidden" ratio={3 / 2}>
          <Image src={file.preview} />
        </AspectRatio>
        <IconButton
          onClick={onDelete}
          bg="danger.base"
          borderRadius="50%"
          m={0}
          p={0}
          minW="unset"
          fontSize="200"
          h={6}
          w={6}
          color="white"
          pos="absolute"
          right="-0.75rem"
          top="-0.75rem"
          aria-label="delete"
          borderWidth="0px"
          icon={<CrossIcon />}
        />
      </Box>
    );
  }
);
