export default class DCIns {
  constructor(viewer) {
    this.viewer = viewer
  }
  addMarker(point) {
    let layer = new window.DC.VectorLayer('layer')
    this.viewer.addLayer(layer)
    // let position =
    let _this = layer.addOverlay(new window.DC.Point(window.DC.Position.fromObject({ ...point })))
    this.viewer.flyTo(layer)
    return _this
  }
  viewOnePlace(point) {
    let terrain = window.DC.TerrainFactory.createUrlTerrain({
      url: 'http://data.marsgis.cn/terrain',
    })
    this.viewer.addTerrain(terrain)
    this.viewer.flyToPosition(window.DC.Position.fromObject({ ...point }))
  }
}
