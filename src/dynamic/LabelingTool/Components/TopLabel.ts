import paper from "paper/dist/paper-core";
/**
 * @returns {paper.Group} - Group which hold the text within a rectange which is places at the top left of the element
 */
export const makeTopLabel = (text, element: paper.Item) => {
  const label = new paper.PointText({
    content: text,
    fillColor: "black",
    fontWeight: "medium",
    fontSize: "0.75rem",
  });
  const labelRectangeSize = label.bounds.clone().expand(25, 1).size;
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
  const labelContainer = new paper.Group([labelRectangle, label]);
  // labelContainer.addChildren([labelRectangle, label]);
  return labelContainer;
};
