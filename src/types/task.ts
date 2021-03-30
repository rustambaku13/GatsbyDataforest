export interface Task {
  title: string;
  deadline: Date;

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
  labels: number;
  extension: "jpg" | "png" | "tiff";
  image_type: "rgb" | "grayscale" | "B&W";
  complexity: "easy" | "medium" | "hard";
}

export interface Tasks {
  results: Task[];
}
