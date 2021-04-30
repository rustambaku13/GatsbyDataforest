import { SimpleGrid } from "@chakra-ui/layout";
import { chakra } from "@chakra-ui/system";
import React, { useContext } from "react";
import { DataUploadContext } from "../../../context/DataUploadContext";
import { DropZoneImageFileCard } from "./DropZoneFileCards";

/**
 * Lists the image in DataUploadCOntext provider
 *
 */
export const ListImageFileCards = chakra(({ className }) => {
  const context = useContext(DataUploadContext);
  return (
    <SimpleGrid className={className + " scrollbar"} columns={3} spacing={8}>
      {context.files.map((file) => (
        <DropZoneImageFileCard file={file} />
      ))}
    </SimpleGrid>
  );
});
