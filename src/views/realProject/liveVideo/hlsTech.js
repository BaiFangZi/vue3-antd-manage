import videojs from 'video.js'
const Html5 = videojs.getTech('Html5')
const Hls = window['Hls']

class Hlsjs extends Html5 {
  hls_

  setSrc(src) {
    if (this.hls_) {
      this.hls_.stopLoad()
      this.hls_.detachMedia()
      this.hls_ = null
    }

    this.hls_ = new Hls()
    this.hls_.attachMedia(this.el_)
    this.hls_.loadSource(src)
  }

  /**
   * @override {HTML5.currentSrc}
   */
  currentSrc() {
    if (this.hls_) {
      return this.hls_.url
    }
    return this.el_.currentSrc
  }

  /**
   * @override {Html5.dispose}
   */
  dispose() {
    if (this.hls_) {
      this.hls_.detachMedia()
      this.hls_.destroy()
    }
    super.dispose()
  }
}

Hlsjs.isSupported = function () {
  return Hls && Hls.isSupported()
}

Hlsjs.canPlaySource = function (source, options) {
  if (source.type === 'application/x-mpegURL') {
    return 'maybe'
  }

  return ''
}

videojs.registerTech('Hlsjs', Hlsjs)
export default Hlsjs
