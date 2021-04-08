import React from "react";
import { UploadDataModal } from "../Data/Modals/UploadDataModal";
import { LabelDescriptionModal } from "../Labels/Modals/LabelDescriptionModal";

export const Modals = () => {
  return (
    <>
      <LabelDescriptionModal />
      <UploadDataModal />
    </>
  );
};
