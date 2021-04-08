import { makeAutoObservable } from "mobx";
import { Label } from "../types/task";

// Labeling Tool Store.
class LayoutStore {
  constructor() {
    makeAutoObservable(this);
  }
}

export default new LayoutStore();
