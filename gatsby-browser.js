import "./src/styles/index.scss";
import React from "react";
import { Modals } from "./src/components/Layout/Modals";
import "./src/store/LabelingStore";
import "./src/store/LayoutStore";
import "./src/store/UserStore";
export const wrapPageElement = ({ element }) => {
  return (
    <>
      {element}
      <Modals />
    </>
  );
};
