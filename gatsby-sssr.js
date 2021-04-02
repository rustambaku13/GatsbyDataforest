import "./src/styles/index.scss";
import React from "react";
import { Router } from "@reach/router";
import SpecificTaskPage from "./src/dynamic/Task/SpecificTask";
import { Box } from "@chakra-ui/react";
export const wrapRootElement = ({ element }) => {
  return (
    <Router>
      {/* <SpecificTaskPage path="/tasks/:taskId" /> */}
      <div default>{element}</div>
    </Router>
  );
};
