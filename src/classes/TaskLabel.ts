import { makeAutoObservable, observable } from "mobx";
import { TaskLabel as TaskLabelType } from "../types/label";
export class TaskLabel {
  name: string;
  description?: string;
  is_annotation: boolean;
  parent?: TaskLabel;
  label_type: "number" | "boolean" | "text" | "date" | "image" | "file";
  children: TaskLabel[];
  cardinality?: "S" | "M";
  choices?: any[];
  constructor(taskLabel: TaskLabelType) {
    this.name = taskLabel.name;
    this.description = taskLabel.description;
    this.is_annotation = taskLabel.is_annotation;
    this.label_type = taskLabel.label_type;
    this.cardinality = taskLabel.cardinality;
    this.choices = taskLabel.choices;
    this.children = taskLabel.children?.length
      ? taskLabel.children.map((label) => new TaskLabel(label))
      : [];
    makeAutoObservable(this, {
      parent: observable.ref,
    });
  }
}
