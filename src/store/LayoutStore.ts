import { makeAutoObservable } from "mobx";
import { Label } from "../types/label";

/*
  ================================================
    LAYOUT RELATED STUFF. 
  ================================================
*/
class LayoutStore {
  labelDescriptionModalData: Label | null = null;
  uploadDataModalCallback: any = null;
  get uploadDataModalisOpen() {
    return !(this.uploadDataModalCallback == null);
  }
  get labelDescriptionModalisOpen() {
    return !(this.labelDescriptionModalData == null);
  }
  constructor() {
    makeAutoObservable(this);
  }
  uploadDataModalOpen(callback) {
    this.uploadDataModalCallback = callback;
  }
  uploadDataModalClose() {
    this.uploadDataModalCallback = null;
  }
  labelDescriptionModalClose() {
    this.labelDescriptionModalData = null;
  }
  labelDescriptionModalOpen(label: Label) {
    this.labelDescriptionModalData = label;
  }
}

export default new LayoutStore();
