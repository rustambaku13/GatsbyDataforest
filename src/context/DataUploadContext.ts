import React from "react";

interface DataUploadType {
  files: File[];
  addFiles: any;
  removeFile: any;
}

export const DataUploadContext = React.createContext<DataUploadType>({
  files: [],
  addFiles: function (items: File[]) {
    this.files.push(...items);
  },
  removeFile: function (file: File) {
    this.files = this.files.filter((item) => item != file);
  },
});
