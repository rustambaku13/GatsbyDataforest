import paper from "paper/dist/paper-core";
export interface Label {
  name: string;
  description?: string;
  is_annotation: boolean;
  parent?: Label;
  label_type: "number" | "boolean" | "text" | "date" | "image" | "file";
  children: Label[];
  [x: string]: any;
}

export interface TaskLabel extends Label {
  cardinality?: "S" | "M";
  attendancy?: "M" | "O";
  render?: any;
  choices?: any[];
}
export interface DataLabel extends Label {
  element?: paper.Item;
  data?: any; // Store arbitary data
}
