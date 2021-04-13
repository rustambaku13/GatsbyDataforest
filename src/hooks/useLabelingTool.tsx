import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import LabelingStore from "../store/LabelingStore";
import paper from "paper";
/* ==========================================================================
   Main Controller for the labeling tool. Manages the state updates and etc. 
   ========================================================================== */
export const useLabelingTool = () => {
  useEffect(() => {
    //Activate Different Project when we select different images
    if (paper.projects.length && LabelingStore.selectedData != null) {
      paper.projects[LabelingStore.selectedData].activate();
    }
  }, [LabelingStore.selectedData]);
  return null;
};
