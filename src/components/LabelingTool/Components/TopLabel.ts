import paper from "paper";

export const groupUnderLabel = (text, element: paper.Item) => {
  const layer = new paper.Layer();
  const label = new paper.PointText({
    point: element.bounds.topLeft,
    content: text,
    fillColor: "black",
    fontWeight: "medium",
    fontSize: "0.75rem",
  });
  const labelRectangeSize = label.bounds.clone().expand(45, 1).size;
  const labelRectangle = new paper.Path.Rectangle({
    size: labelRectangeSize,
    point: element.bounds.topLeft.subtract(
      new paper.Point(0, labelRectangeSize.height)
    ),
    fillColor: "red",
    radius: [2, 2],
  });
  label.bounds.leftCenter = labelRectangle.bounds.leftCenter.add(
    new paper.Point(5, 0)
  );
  const labelContainer = new paper.Group();
  labelContainer.addChildren([labelRectangle, label]);
  layer.addChildren([element, labelContainer]);
  return layer;
};
