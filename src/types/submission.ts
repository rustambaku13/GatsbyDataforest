export interface MetaData {
  name: string;
}

export interface Submission {
  data: { value: string };
  state: "accepted" | "rejected" | "pending";
  labels: any;
  metaData: MetaData;
}
