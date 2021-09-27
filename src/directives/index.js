export function setupDirective(app) {
  const directives = import.meta.globEager('./*/index.js')
  for (let com in directives) {
    const comKey = com.match(/\.\/(.*?)\/index\.js/)[1]
    const comValue = directives[com].default
    app.directive(comKey, comValue)
  }
}
