import paper from "paper/dist/paper-core";
function handler() {
  const e: paper.Raster = this;
  e.fitBounds(paper.view.bounds, false);
}
export const makeRaster = (file) => {
  const url = file.preview;
  const raster = new paper.Raster(url);
  raster.onLoad = handler;
  return raster;
};
