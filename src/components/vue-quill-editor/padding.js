import Quill from 'quill'
let Parchment = Quill.import('parchment')
class BoldStyleAttributor extends Parchment.Attributor.Style {
  value (domNode) {
    let value = super.value(domNode)
    return value
  }

  add (node, value) {
    document.querySelector(node).style.cssText = 'font-weight: bold'
    // $(node).css('font-weight', 'bold')
    return true
  }
  remove (node) {
    document.querySelector(node).style.cssText = 'font-weight: normal'
    // $(node).css('font-weight', 'normal')
  }
}
let Padding = new BoldStyleAttributor('bold', 'font-weight', {
  scope: Parchment.Scope.INLINE,
  whitelist: [true, false]
})

export default Padding
