import paper from "paper";
import { groupUnderLabel } from "../Components/TopLabel";

export const rectangeAnnotationTool = () => {
  const tool = new paper.Tool();
  let rect: paper.Path.Rectangle;
  let x = 1;
  let y = 1;
  tool.onMouseDown = function (event) {
    if (rect) {
      rect.remove();
      rect.selected = false;
      const group = groupUnderLabel("color", rect);
      paper.project.activeLayer.addChild(group);
      rect = null;
      x = 1;
      y = 1;
    } else {
      rect = new paper.Path.Rectangle({
        point: event.point,
        size: [1, 1],
        strokeWidth: 2,
        fillColor: "rgba(255,0,0,0.1)",
        strokeColor: "#FF0000",
      });
      paper.project.activeLayer.addChild(rect);
      rect.selected = true;
      rect.pivot = event.point;
      rect.data.first_bounds = rect.bounds.topLeft;
    }
  };

  tool.onMouseMove = function (event) {
    if (rect) {
      const a = event.point.subtract(rect.data.first_bounds);
      if (a.x == 0 || a.y == 0) return;
      rect.scale(a.x / x, a.y / y);
      x = a.x;
      y = a.y;
    }
  };
  return tool;
};
