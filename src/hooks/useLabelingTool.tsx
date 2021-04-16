import paper from "paper";
import { useEffect, useState } from "react";
import { makeRaster } from "../components/LabelingTool/Components/Raster";
import { normalinteractionTool } from "../components/LabelingTool/Tools/normalInteractionTool";
import { rectangeAnnotationTool } from "../components/LabelingTool/Tools/rectangleAnnotationTool";
import LabelingStore from "../store/LabelingStore";

/* ==========================================================================
   Main Controller for the labeling tool. Manages the state updates and etc. 
   ========================================================================== */

export const LABELING_TOOLS = {
  rect: rectangeAnnotationTool,
  norm: normalinteractionTool,
};

const labeling_tools = {};

export const useLabelingTool = (canvas) => {
  const [activeTool, setActiveTool] = useState(null);

  const initialInstall = () => {
    paper.install(window); // Add all classes to global scope
    paper.settings.insertItems = false;
    new paper.Project(canvas.current); // Create an active porject
    LabelingStore.data.forEach((file: File) => {
      const a = new paper.Layer();
      paper.project.addLayer(a);
      a.visible = false;
      const raster = makeRaster(file);
      a.addChild(raster);
    }); // Make Raster and Layer per data
    if (LabelingStore.data.length) {
      for (const [key, value] of Object.entries(LABELING_TOOLS)) {
        labeling_tools[key] = value();
      }
      setActiveTool("rect");
    } // Create Labeling Tools
  };
  const switchData = () => {
    // change the selectedData
    if (paper.project.layers.length && LabelingStore.selectedData != null) {
      paper.project.activeLayer.visible = false;
      paper.project.layers[LabelingStore.selectedData].activate();
      paper.project.layers[LabelingStore.selectedData].visible = true;
    }
  };

  useEffect(initialInstall, []);
  useEffect(() => {
    if (activeTool) {
      labeling_tools[activeTool].activate();
    }
  }, [activeTool]);
  useEffect(switchData, [LabelingStore.selectedData]);

  return null;
};
