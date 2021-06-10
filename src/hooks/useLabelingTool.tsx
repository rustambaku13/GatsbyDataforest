// import paper from "paper/dist/paper-core";

// import { DataLabel } from "../types/labelingTool";
/* ==========================================================================
   Main Controller for the labeling tool. Manages the state updates and etc. 
   ========================================================================== */
import paper from "paper/dist/paper-core";
import { makeRaster } from "../dynamic/LabelingTool/Components/Raster";
import LabelingStore from "../store/LabelingStore";
import { useEffect } from "react";

/**
 *
 * @description Given the state of the current selections return the label to be toggled
 * @returns {string} name of the Tool
 */
const getToolFromLabel = () => {
  const label = LabelingStore.selectedTaskLabel;
  const dataLabel = LabelingStore.selectedDataLabel;

  if (!label) return "norm";
  if (label.parent) {
    if (label.parent != dataLabel?.data?.name) return "norm";
  }
  return "rect";
};

/**
 * Populates the window, creates Layer for each data, generates instances
 * @param canvas
 */
const initialInstall = (canvas) => {
  paper.install(window);
  paper.settings.insertItems = false;
  
  const project = new paper.Project(canvas.current);
  LabelingStore.data.forEach((file: File) => {
    const a = new paper.Layer();
    paper.project.addLayer(a);
    a.visible = false;
    const raster = makeRaster(file);
    a.addChild(raster);
  });

  // Create Resize observer
  const ro = new ResizeObserver(entries =>{
    
    try{
      
      const {contentRect:{height,width}} = entries[0]
      project.view.viewSize = new paper.Size({height,width})
      project.layers.forEach((layer)=>{
        if(layer.firstChild.loaded){ // If Raster is loaded scale the layer as well
          layer.fitBounds(project.view.bounds,false)
        }
      })
      
    }catch{

    }
    



  })
  ro.observe(canvas.current)
  // Create Window Observer
  // window.onresize = (data)=>{
  //   console.log(data);
    
  // }
};
/**
 * Change the Active Layer according to selectedData and make it visible
 * @var {LabelingStore.selectedData} - Index of the data in LabelingStore.data array that has been selected
 */
const switchData = () => {
  if (paper.project.layers.length && LabelingStore.selectedData != null) {
    paper.project.activeLayer.visible = false;
    paper.project.layers[LabelingStore.selectedData].activate();
    paper.project.layers[LabelingStore.selectedData].visible = true;
  }
};
/**
 * @description - A Callback function to be passed for each creative tool.
 * @summary - Handles the addition logic of the labe to the mobx store. Also provide the binding relationship
 * @param label - Label object coming from the tools
 *
 */
const addLabelCallback = (label: paper.Item) => {
  if (label.className == "Layer") {
    // This is a Layer object that is being added
    const taskLabel = LabelingStore.selectedTaskLabel;
    const labelObj: DataLabel = {
      name: taskLabel.name,
      description: taskLabel.description,
      is_annotation: taskLabel.is_annotation,
      label_type: taskLabel.label_type,
      element: label,
      children: [],
      data: {
        name: taskLabel.name,
      },
    };

    label.data.element = LabelingStore.addDataLabel(labelObj);
  }
};

export const useLabelingTool = (canvas) => {
  useEffect(() => {
    initialInstall(canvas);
  }, []);
  // useEffect(switchData, [LabelingStore.selectedData]);
  // useEffect(() => {
  //   const toolName = getToolFromLabel();
  //   setActiveTool(toolName);
  // }, [LabelingStore.selectedTaskLabel, LabelingStore.selectedDataLabel]);
  return null;
};
