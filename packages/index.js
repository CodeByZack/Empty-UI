import EButton from './src/button/index'
// import JCol from './col/index'
// import JRow from './row/index'
// import JTag from './tag/index'
// import Message from './message/index'
// import JBreadcrumb from './breadcrumb/index'
// import JBreadcrumbItem from './breadcrumb-item/index'
// import JCard from './card/index'
// import towTable from './two-dimensional-table/index';
// import Hour from './hour/index';


const components = [
  EButton
]


const install = function(Vue) {
  if(install.installed) return
  components.map(component => Vue.component(component.name, component))
//   Vue.prototype.$message = Message
}


export default {
  install,
  EButton
}