import { Button, Center, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDropzone } from "react-dropzone";
import { DataUploadContext } from "../../context/DataUploadContext";
import { UploadIcon } from "../../icons/jsx/upload";

export const DropZone = () => {
  const context = React.useContext(DataUploadContext);

  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      context.addFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });
  useEffect(
    () => () => {
      // Make sure to revoke the data uris to avoid memory leaks
      context.files.forEach((file) => URL.revokeObjectURL(file.preview));
    },
    []
  );

  return (
    <>
      <Center
        py={6}
        mb={5}
        borderColor="babyBlueEyes.dark"
        bg="babyBlueEyes.light"
        borderStyle="dashed"
        outline="none"
        cursor="pointer"
        flexDir="column"
        backgroundImage="linear-gradient(#C9CED6 33%, rgba(255,255,255,0) 0%),linear-gradient(#C9CED6 33%, rgba(255,255,255,0) 0%),linear-gradient(to right, #C9CED6 33%, rgba(255,255,255,0) 0%), linear-gradient(to right, #C9CED6 33%, rgba(255,255,255,0) 0%)"
        backgroundPosition="left,right,bottom,top"
        backgroundSize="1px 12px,1px 12px,12px 1px,12px 1px"
        backgroundRepeat="repeat-y,repeat-y,repeat-x,repeat-x"
        w="100%"
        {...getRootProps({ className: "dropzone" })}
      >
        <input {...getInputProps()} />
        <Center
          w="48px"
          color="white"
          bg="babyBlueEyes.dark"
          borderRadius="50%"
          fontSize="600"
          h="48px"
        >
          <UploadIcon />
        </Center>
        <Text mt={4} fontWeight="500" textAlign="center">
          Drag and drop here
        </Text>
        <Text mt={1} variant="secondary" textAlign="center">
          or
        </Text>
        <Button
          variant="link"
          color="babyBlueEyes.dark"
          mt={1}
          fontWeight="500"
          textAlign="center"
        >
          Browse images
        </Button>
      </Center>
    </>
  );
};
