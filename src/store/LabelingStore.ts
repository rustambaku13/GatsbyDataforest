import {
  autorun,
  isObservableProp,
  makeAutoObservable,
  observable,
  reaction,
} from "mobx";
import paper from "paper/dist/paper-core";
import { DataLabel } from "../classes/DataLabel";
import { Task } from "../classes/Task";
import { TaskLabel } from "../classes/TaskLabel";
import { normalinteractionTool } from "../dynamic/LabelingTool/Tools/normalInteractionTool";
import { rectangeAnnotationTool } from "../dynamic/LabelingTool/Tools/rectangleAnnotationTool";

const isBrowser = typeof window !== "undefined";
type ANNOTATION_STATE = "SELECT_DATA" | "SELECT_LABEL" | "SELECT_DATA_LABEL";
type ANNOTATION_TOOLS = "rect" | "norm" | "number";
export class LabelingStore {
  data: File[] = []; // Date that we are working on
  task: Task = null; // Task that is to be submitted
  dataLabels: DataLabel[][] = []; // Labels of the Data

  selectedData: number = 0; // Index of the selected Data. Index because we are switching project.layers acordingly
  selectedTaskLabel: TaskLabel = null; // Task Label that is selected
  selectedDataLabel: DataLabel = null; // Data Label that is selected

  activeTool: ANNOTATION_TOOLS = "norm"; // Active Tool that is cuurently active
  state: ANNOTATION_STATE = "SELECT_DATA";
  constructor() {
    makeAutoObservable(this, {
      selectedTaskLabel: observable.shallow,
      selectedDataLabel: observable.shallow,
    });
  }
  get labelingToolReady() {
    return this.task != null;
  }

  addDataLabel(label: any) {
    const dataLabel = new DataLabel(this.selectedTaskLabel);
    dataLabel.parent = this.selectedDataLabel;
    dataLabel.store = this;
    dataLabel.element = label;
    if (label instanceof paper.Item) label.data.element = dataLabel;
    if (this.selectedDataLabel) this.selectedDataLabel.children.push(dataLabel);
    else {
      this.dataLabels[this.selectedData].push(dataLabel);
    }
    // Move the reference
    this.dataLabels[this.selectedData] = [
      ...this.dataLabels[this.selectedData],
    ];
  }

  uploadData(data) {
    data.forEach((file) => {
      this.dataLabels.push(observable.array([]));
      const tmp = Object.assign(file, {
        preview: URL.createObjectURL(file),
      });
      this.data.push(tmp);
    });
  }
  set selectTaskLabel(label: TaskLabel) {
    this.selectedTaskLabel = label;
  }
  set selectDataLabel(label: DataLabel) {
    if (this.selectedDataLabel) this.selectedDataLabel.deselect();
    this.selectedDataLabel = label;
    if (this.selectedDataLabel) this.selectedDataLabel.select();
  }

  set selectData(index: number) {
    // Select a data in left panel to work on
    this.selectedData = index;
    paper.project.activeLayer.visible = false;
    paper.project.layers[this.selectedData].activate();
    paper.project.layers[this.selectedData].visible = true;
  }
  set selectTask(task: Task) {
    this.task = task;
  }
}

const store = new LabelingStore();

let LABELING_TOOLS = {};
if (isBrowser) {
  window.label = store;
  LABELING_TOOLS = {
    rect: rectangeAnnotationTool(),
    norm: normalinteractionTool(),
  };
}
/**
 * React to the new Data Label that is selected
 */
const toolPicker = (): ANNOTATION_TOOLS => {
  const taskLabel = store.selectedTaskLabel;
  if (taskLabel.is_annotation) return "rect";
  switch (taskLabel.label_type) {
    case "number":
      return "number";
    default:
      return "norm";
  }
};
autorun(() => {
  if (store.selectedTaskLabel && !store.selectedDataLabel) {
    if (store.selectedTaskLabel.parent) store.activeTool = "norm";
    else store.activeTool = toolPicker();
  } else if (store.selectedTaskLabel && store.selectedDataLabel) {
    if (
      store.selectedTaskLabel.parent?.name ==
      store.selectedDataLabel.taskLabelName
    ) {
      store.activeTool = toolPicker();
    } else {
      store.activeTool = "norm";
    }
  } else if (!store.selectedTaskLabel && store.selectedDataLabel) {
    store.activeTool = "norm";
  } else {
    store.activeTool = "norm";
  }
});
/**
 * Selected active Tool
 */
autorun(() => {
  LABELING_TOOLS[store.activeTool]?.activate();
});
export default store;
