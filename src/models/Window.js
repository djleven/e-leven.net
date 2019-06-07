export class WindowProps {
  constructor ({
    loading = true,
    width = 0,
    height = 0,
    offsetTop = 0,
    scroll = {
      items: [],
      active: null,
      down: true,
      scrollStarted: false,
      lastScrollTop: 0
    }
  } = {}) {
    this.loading = loading
    this.width = width
    this.height = height
    this.offsetTop = offsetTop
    this.scroll = Object.assign({}, {
      items: scroll.items,
      active: scroll.active,
      down: scroll.down,
      scrollStarted: scroll.scrollStarted,
      lastScrollTop: scroll.lastScrollTop
    })
  }
}
