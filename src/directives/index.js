// console.log('import ', )




const directives = {}

const modules = import.meta.globEager('./modules/*.ts')
// modules.
for (let key in modules) {
  const moduleName = key.replace(/\.\/modules\/(.+)\.ts/, '$1')
  directives[moduleName] = modules[key].default
}
// console.log(directives)
export default directives
