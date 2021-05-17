import { addSubmission } from './../api/tasks';
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
import {Task as TaskType} from "../types/task"
import { TaskLabel } from "../classes/TaskLabel";
import { normalinteractionTool } from "../dynamic/LabelingTool/Tools/normalInteractionTool";
import { rectangeAnnotationTool } from "../dynamic/LabelingTool/Tools/rectangleAnnotationTool";

const isBrowser = typeof window !== "undefined";
type TOOL_STATE = "SELECT_DATA" | "SELECT_LABEL" | "SELECT_DATA_LABEL" | "LABELING" | "ADDING";
type ANNOTATION_TOOLS = "rect" | "norm" | "number" | "text" | "boolean";
export class LabelingStore {
  data: File[] = []; // data that we are working on
  task: Task = null; // Task that is to be submitted
  dataLabels: DataLabel[][] = []; // Labels of the Data

  selectedData: number = null; // Index of the selected Data. Index because we are switching project.layers acordingly
  selectedTaskLabel: TaskLabel = null; // Task Label that is selected
  selectedDataLabel: DataLabel = null; // Data Label that is selected

  activeTool: ANNOTATION_TOOLS = "norm"; // Active Tool that is cuurently active
  state: TOOL_STATE = "SELECT_DATA";
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
    dataLabel.raster = paper.project.activeLayer.firstChild;
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
    // Remove Selected Data Label
    this.selectDataLabel = null
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
    if(index==null)return
    paper.project.layers[this.selectedData].activate();
    paper.project.layers[this.selectedData].visible = true;
  }
  set selectTask(task: TaskType) {
    this.task = new Task(task);
  }
  // Removes everything about the given index item in the labeling tool
  removeItem(index:number){
    this.data.splice(index,1)
    this.dataLabels[index].forEach(item=>item.delete())
    this.dataLabels.splice(index,1)
    this.selectTaskLabel = null
    this.selectDataLabel = null
    paper.project.activeLayer.remove()
    this.selectData=this.data.length?0:null
    paper.project.layers?.[this.selectedData]?.activate()
  }
  resetAll(){
    while(this.data.length){
      this.removeItem(0)
    }
    this.task = null

  }
  // Submit The Item that we are working on right now
  *submitCurrentlyWorking(){
      const file = this.data[this.selectedData]
      const formData = new FormData()
      const lables =  JSON.stringify(this.dataLabels[this.selectedData].map(item=>item.toJSON()))
      const metadata = JSON.stringify({name:file.name})
      formData.append("file", file, file.name)
      formData.append('metadata',metadata)
      formData.append("labels",lables)
      yield addSubmission(this.task.id,formData)
      this.removeItem(this.selectedData)
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
    case "text":
      return "text";
    case "boolean":
      return "boolean"
    default:
      return "norm";
  }
};
autorun(() => {
  if(store.selectedData==null){
    store.activeTool='norm'
    store.state='SELECT_DATA'
    return
  }
  if (store.selectedTaskLabel && !store.selectedDataLabel) {
    if (store.selectedTaskLabel.parent) {store.activeTool = "norm";store.state='SELECT_DATA_LABEL'}
    else {store.activeTool = toolPicker();store.state="LABELING"}
  } else if (store.selectedTaskLabel && store.selectedDataLabel) {
    if (
      store.selectedTaskLabel.parent?.name ==
      store.selectedDataLabel.taskLabelName
    ) {
      store.activeTool = toolPicker();
      store.state="LABELING"
    } else {
      store.activeTool = "norm";
      store.state="SELECT_DATA_LABEL"
    }
  } else if (!store.selectedTaskLabel && store.selectedDataLabel) {
    store.activeTool = "norm";
    store.state="SELECT_LABEL"
  } else {
    store.activeTool = "norm";
    store.state="SELECT_LABEL"
  }
});
/**
 * Selected active Tool
 */
autorun(() => {
  LABELING_TOOLS[store.activeTool]?.activate();
});
export default store;
