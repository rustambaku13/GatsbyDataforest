import React from "react";
import { Label, TaskLabel } from "./../types/label";
export type LabelMode = "norm" | "ann" | "label";
export const LabelInputContext = React.createContext<{
  mode: LabelMode;
  setMode: any;
  labels: TaskLabel[];
  addLabel: any;
  selectedLabel: TaskLabel;
  setSelectedLabel: any;
}>({
  mode: "norm",
  setMode: null,
  labels: [],
  addLabel: null,
  selectedLabel: null,
  setSelectedLabel: null,
});
