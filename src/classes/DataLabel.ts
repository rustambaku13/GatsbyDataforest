import { makeAutoObservable, observable } from "mobx";
import { TaskLabel } from "../types/label";
import { LabelingStore } from "../store/LabelingStore";
export class DataLabel {
  name: string;
  description: string;
  is_annotation: boolean;
  taskLabelName: string;
  taskLabel:TaskLabel
  parent: DataLabel;
  element: paper.Item;
  raster?: paper.Item
  label_type: string;
  children: DataLabel[] = [];
  store: LabelingStore;
  static dataLabelsCounter: any = {};
  constructor(taskLabel: TaskLabel) {
    this.name = taskLabel.name;

    if (!DataLabel.dataLabelsCounter[taskLabel.name]) {
      DataLabel.dataLabelsCounter[taskLabel.name] = 1;
    }
    this.name += ` - ${DataLabel.dataLabelsCounter[taskLabel.name]}`;
    DataLabel.dataLabelsCounter[taskLabel.name]++;
    this.description = taskLabel.description;
    this.is_annotation = taskLabel.is_annotation;
    this.taskLabelName = taskLabel.name;
    this.taskLabel = taskLabel
    this.label_type = taskLabel.label_type;

    makeAutoObservable(this, {
      parent: observable.ref,
      store: observable.ref,
    });
  }
  select() {
    if (this.element instanceof paper.Item) this.element.selected = true;
  }
  deselect() {
    if (this.element instanceof paper.Item) this.element.selected = false;
  }
  delete() {
    if (this.element instanceof paper.Item) this.element.remove(); // Remove the canvas element
    if (this.parent) {
      this.parent.children = this.parent.children.filter(
        (label: DataLabel) => label != this
      );
    } else {
      this.store.dataLabels[this.store.selectedData] = this.store.dataLabels[
        this.store.selectedData
      ].filter((label: DataLabel) => label != this);
    }
    this.store.selectDataLabel = null;
  }
  getBounds(){
    // Function that returns the bounds relative to the Raster that is being worked on
    const rect = this.element.children[1] // Get the main rectange and ignore the label name component
    const topLeft = rect.bounds.topLeft.subtract(this.raster.bounds.topLeft)
    const relativeTopLeft = topLeft.clone()
    relativeTopLeft.x = relativeTopLeft.x/this.raster.bounds.width
    relativeTopLeft.y = relativeTopLeft.y/this.raster.bounds.height
    const width = rect.bounds.width
    const height = rect.bounds.height

    // Return the absolute pixel coordinates as well as the relative to the Raster being worked on. Easy!
    return {
      topLeft:{x:topLeft.x,y:topLeft.y},
      width,
      height,
      relativeUnits:{
        width: width / this.raster.bounds.width,
        height: height / this.raster.bounds.height,
        topLeft:{x:relativeTopLeft.x,y:relativeTopLeft.y},
      }
    }
  }
  toJSON(){
    // JSONify data for backend serialization 
    const children = this.children.map(item=>item.toJSON()) // Recursive Match
    let data = {
      name:this.name, // Name that includes the numbering 
      description:this.description,
      is_annotation:this.is_annotation,
      taskLabelName:this.taskLabelName, // Task label name that matches with this label
      label_type:this.label_type,
      children,
      value:null
    }
    if( this.element instanceof paper.Item){
      // Populate value as the coordinates relative to image Raster
      data.value = this.getBounds()
    }
    else{
      // Populate Value as the real value 
      data.value = this.element
    }
    return data
  
  }
}
