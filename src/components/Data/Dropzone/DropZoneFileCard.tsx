import { Box, Circle, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import { DataUploadContext } from "../../../context/DataUploadContext";
import { DeleteIcon } from "../../../icons/jsx/delete";

export const DropZoneFileCard = ({
  file,

  progress,
}: {
  file: File;

  progress: any;
}) => {
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
