import paper from "paper";

function handler() {
  const e: paper.Raster = this;
  e.fitBounds(paper.view.bounds, false);
}
export const makeRaster = (file) => {
  const url = URL.createObjectURL(file);
  const raster = new paper.Raster(url);
  raster.onLoad = handler;
  return raster;
};
