export interface Label {
  name: string;
  description?: string;
  is_annotation: boolean;
  label_type?: "number" | "boolean" | "text" | "date" | "image" | "file";
  attendancy: "R" | "O";
  cardinality: "S" | "M";
  render?: any;
  choices?: any[];
  children?: Label[];
}

export interface Task {
  title: string;
  id: string;
  deadline: Date;
  labels: Label[];
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
  render?: any;
}

export interface Tasks {
  results: Task[];
}
