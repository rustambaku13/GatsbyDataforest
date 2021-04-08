import React, { useState } from "react";
import { DataUploadContext } from "../context/DataUploadContext";

export const DataUploadProvider = ({ children }) => {
  const [files, setFiles] = useState([]);
  return (
    <DataUploadContext.Provider
      value={{
        files: files,
        addFiles: function (items) {
          setFiles((files) => [...files, ...items]);
        },
        removeFile: function (file: File) {
          setFiles((files) => files.filter((item) => item != file));
        },
      }}
    >
      {children}
    </DataUploadContext.Provider>
  );
};
