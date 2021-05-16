import { makeAutoObservable } from "mobx";
import { Label } from "../types/label";

/*
  ================================================
    LAYOUT RELATED STUFF. 
  ================================================
*/

interface alertModalState {
  yes:string
  no:string
  callback:Promise<any>
  title:string
  description:string
  type:"success" | "error"
}



class LayoutStore {
  labelDescriptionModalData: Label | null = null;
  uploadDataModalCallback: any = null;
  alertModalState:alertModalState = null;
  get uploadDataModalisOpen() {
    return !(this.uploadDataModalCallback == null);
  }
  get labelDescriptionModalisOpen() {
    return !(this.labelDescriptionModalData == null);
  }
  get alertModalisOpen(){
    return !(this.alertModalState==null)
  }

  constructor() {
    makeAutoObservable(this);
  }

  alertModalOpen(state:alertModalState){
    this.alertModalState = state
  }
  alertModalClose(){
    this.alertModalState=null
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
