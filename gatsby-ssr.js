import "./src/styles/index.scss";
import React from "react";
import { Modals } from "./src/components/Layout/Modals";
export const wrapPageElement = ({ element }) => {
  return (
    <>
      <Modals />
      {element}
    </>
  );
};
