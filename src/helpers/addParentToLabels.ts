import { Label } from "../types/label";
const helper = (label: Label) => {
  if (!label.children) return;
  label.children.forEach((child: Label) => {
    child.parent = label;
    helper(child);
  });
};

export const addParentToLabels = (labels: Label[]) => {
  labels.forEach((item) => {
    helper(item);
  });
};
