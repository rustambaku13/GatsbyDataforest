import paper from "paper/dist/paper-core";
import LabelingStore from "../../../store/LabelingStore";
/**
 *
 * @description The tools for normal view.
 * @summary Zoom In-Out, Move Objects around, Select Item, Delete Selected Items, Resize Selected Items
 * @returns {paper.Tool}
 */
export const normalinteractionTool = () => {
  const tool = new paper.Tool();
  tool.onKeyDown = function (event) {
    if (event.key == "delete") {
      LabelingStore.selectedDataLabel?.delete();
    }
  };
  // tool.onMouseDrag = function (event) {
  //   if (paper.project.selectedItems.length)
  //     paper.project.selectedItems[
  //       paper.project.selectedItems.length - 1
  //     ].translate(event.delta);
  // };

  tool.onMouseDown = function (event) {
    // paper.project.deselectAll();
    const res = paper.project.activeLayer.getItem({
      recursive: true,
      class: paper.Layer,
      match: (item: paper.Item) => item.contains(event.point),
    });
    if (res) {
      // res.selected = true;
      LabelingStore.selectDataLabel = res.data.element;
    } else {
      LabelingStore.selectDataLabel = null;
    }
  };
  return tool;
};
