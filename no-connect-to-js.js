module.exports = function (context) {
  return {
    Decorator(node) {
      if (!node.expression) {
        return
      }
      if (!node.expression.callee) {
        return
      }
      if (node.expression.callee.name !== 'connect') {
        return
      }
      if (context.getSourceCode().getText().match(/.toJS/)) {
        context.report(node, 'Do not use Immutable.toJS inside a connect method')
      }
    }
  }
}
