import { makeAutoObservable, observable } from "mobx";
import { TaskLabel } from "../types/label";
import { LabelingStore } from "../store/LabelingStore";
export class DataLabel {
  name: string;
  description: string;
  is_annotation: boolean;
  taskLabelName: string;
  parent: DataLabel;
  element: paper.Item;
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
}
