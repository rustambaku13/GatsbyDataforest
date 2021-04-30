import { makeAutoObservable } from "mobx";
import moment from "moment";
import { addParentToLabels } from "../helpers/addParentToLabels";
import { Task as TaskType } from "../types/task";
import { TaskLabel } from "./TaskLabel";

export class Task {
  title: string;
  id: string;
  deadline: Date;
  labels: TaskLabel[];
  description: string;
  tags: string[];
  quantity: number;
  filled: number;
  rejected: number;
  pending: number;
  price: number;
  price_per_datum: number;
  type: "image" | "video" | "text";
  width: number;
  height: number;
  extension: "jpg" | "png" | "tiff";
  image_type: "rgb" | "grayscale" | "B&W";
  complexity: "easy" | "medium" | "hard";
  constructor(task: TaskType) {
    this.title = task.title;
    this.id = task.id;
    this.deadline = moment(task.deadline);
    this.description = task.description;
    this.tags = task.tags;
    this.quantity = task.quantity;
    this.filled = task.filled;
    this.rejected = task.rejected;
    this.pending = task.pending;
    this.price = task.price;
    this.price_per_datum = task.price_per_datum;
    this.type = task.type;
    this.width = task.width;
    this.height = task.height;
    this.extension = task.extension;
    this.image_type = task.image_type;
    this.complexity = task.complexity;
    this.labels = task.labels.map((label) => new TaskLabel(label));
    addParentToLabels(this.labels);
    makeAutoObservable(this);
  }
}
