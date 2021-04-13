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
import { DeleteIcon } from "../../../icons/jsx/delete";

export const DropZoneImageFileCard = chakra(
  ({ file, className }: { file: File; className?: any }) => {
    const context = React.useContext(DataUploadContext);
    const onDelete = () => {
      context.removeFile(file);
    };
    return (
      <Box className={className} pos="relative">
        <AspectRatio borderRadius="base" overflow="hidden" ratio={3 / 2}>
          <Image src={file.preview} />
        </AspectRatio>
        <IconButton
          onClick={onDelete}
          bg="danger.dark"
          borderRadius="50%"
          m={0}
          p={0}
          minW="unset"
          fontSize="300"
          h={6}
          w={6}
          color="white"
          pos="absolute"
          right="-0.75rem"
          top="-0.75rem"
          aria-label="delete"
          borderWidth="0px"
          icon={<DeleteIcon />}
        />
      </Box>
    );
  }
);

export const DropZoneFileCardOld = ({
  file,

  progress,
}: {
  file: File;

  progress: any;
}) => {
  // To be used in Dataset Upload.
  const context = React.useContext(DataUploadContext);
  const onDelete = () => {
    context.removeFile(file);
  };
  return (
    <Box px={5} py={4} w="100%">
      <Flex mb={4} w="100%">
        <Box>
          <Text fontWeight="500">{file.name}</Text>
          <Text fontSize="300" variant="secondary">
            100%
          </Text>
        </Box>
        <Box ml="auto">
          <Circle
            onClick={onDelete}
            as="button"
            _hover={{ color: "outline.base" }}
            h={6}
            w={6}
            bg="danger.light"
            borderRadius="50%"
            color="danger.base"
          >
            <DeleteIcon fontSize="300" />
          </Circle>
        </Box>
      </Flex>
      {progress}
    </Box>
  );
};
