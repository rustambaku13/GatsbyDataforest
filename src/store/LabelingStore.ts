import { Task } from "./../types/task";
import { makeAutoObservable } from "mobx";
import { Label } from "../types/task";
import paper from "paper";
/*
  ================================================
    LABELING TOOL RELATED STUFF 
  ================================================
*/
class LabelingStore {
  data: File[] = [];
  task: Task = null;
  selectedData: number = 0;
  selectedTaskLabel = null;
  selectedDataLabel = null;
  constructor() {
    makeAutoObservable(this);
  }
  uploadData(data) {
    // Add Some data to the labeling tool
    this.data = data.map((file) =>
      Object.assign(file, {
        preview: URL.createObjectURL(file),
      })
    );
  }
  setSelectedData(data) {
    // Select a data in left panel to work on
    this.selectedData = data;
  }
  setTask(task) {
    this.task = task;
  }
}

export default new LabelingStore();
