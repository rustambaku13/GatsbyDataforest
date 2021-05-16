import React from "react";
import { AreYouSure } from "../Modals/AreYouSureModal";
import { LabelDescriptionModal } from "../Modals/LabelDescriptionModal";
import { UploadDataModal } from "../Modals/UploadDataModal";

export const Modals = () => {
  return (
    <>
      <LabelDescriptionModal />
      <UploadDataModal />
      <AreYouSure/>
    </>
  );
};
