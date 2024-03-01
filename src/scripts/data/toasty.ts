export default () => ({
  toasty: false,
  init() {
    console.log('Loaded')
    this.konami()
  },
  playToasty() {
    this.$refs.ouch.play()
  },
  konami() {
    const required = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
    const current = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

    const on =
      'addEventListener' in document
        ? function (object, event, func) {
            object.addEventListener(event, func, false)
          }
        : function (object, event, func) {
            object.attachEvent('on' + event, func)
          }

    const load = function () {
      if (
        !(function () {
          try {
            return !!document.createEvent('TouchEvent')
          } catch (e) {}
        })()
      ) {
        on(window, 'keyup', function (event) {
          current.push(event.keyCode ? event.keyCode : event.which)
          current.shift()
          console.log(current)

          if (current === required) {
            this.toasty = true
          }
        })
      }
    }

    on(window, 'load', load)
  }
})
