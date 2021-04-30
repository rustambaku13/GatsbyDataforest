import { makeTopLabel } from "../Components/TopLabel";
import paper from "paper/dist/paper-core";
import LabelingStore from "../../../store/LabelingStore";

interface ToolContext {
  x: number; // Reference to the last scale of x
  y: number; // Reference to the last scale of y
  rect: paper.Item; // Reference to the item of creation
  boundary: paper.Item; // Reference to the parent container to not overflow
}
/**
 *
 * @param  - Function to which shall we pass the newly created label so that it is added to the subtree
 * @returns
 */
export const rectangeAnnotationTool = () => {
  const tool = new paper.Tool();
  const context: ToolContext = {
    x: 1,
    y: 1,
    rect: null,
    boundary: null,
  };
  const clear = () => {
    if (context.rect) {
      context.rect.selected = false;
    }
    context.rect = null;
    context.x = 1;
    context.y = 1;
  };
  const getBoundary = () => {
    if (
      LabelingStore.selectedDataLabel &&
      LabelingStore.selectedDataLabel?.taskLabelName ===
        LabelingStore.selectedTaskLabel?.parent?.name
    ) {
      // This is inside some of some other container
      return LabelingStore.selectedDataLabel.element.children[1];
    }
    return paper.project.activeLayer.firstChild;
  };
  tool.onMouseDown = function (event) {
    if (context.rect) {
      context.rect.remove();
      const topLabel = makeTopLabel(
        LabelingStore.selectedTaskLabel.name,
        context.rect
      );
      const layer = new paper.Layer([topLabel, context.rect]);
      context.boundary.parent.addChild(layer);
      clear();
      LabelingStore.addDataLabel(layer);
    } else {
      context.boundary = getBoundary();
      if (!context.boundary.contains(event.point)) return;
      context.rect = new paper.Path.Rectangle({
        point: event.point,
        size: [1, 1],
        strokeWidth: 2,
        fillColor: "rgba(255,0,0,0.1)",
        strokeColor: "#FF0000",
      });
      paper.project.activeLayer.addChild(context.rect);
      context.rect.selected = true;
      context.rect.pivot = event.point;
      context.rect.data.first_bounds = context.rect.bounds.topLeft;
    }
  };

  /**
   * @summary - Handle the scaling and rotating of the rectangle
   * @param event
   * @returns
   */
  tool.onMouseMove = function (event) {
    if (context.rect) {
      const a = event.point.subtract(context.rect.data.first_bounds);
      if (a.x == 0 || a.y == 0) return;
      context.rect.scale(a.x / context.x, a.y / context.y);
      if (!context.rect.isInside(context.boundary.bounds)) {
        return context.rect.scale(context.x / a.x, context.y / a.y);
      }
      context.x = a.x;
      context.y = a.y;
    }
  };
  return tool;
};
