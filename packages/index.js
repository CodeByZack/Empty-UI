import EButton from './src/button/index'
import ECol from './src/col/index'
import ERow from './src/row/index'
import ETag from './src/tag/index'
import ECheckbox from './src/checkbox/index'
import ECheckboxGroup from './src/checkboxgroup/index'
// import Message from './message/index'
// import JBreadcrumb from './breadcrumb/index'
// import JBreadcrumbItem from './breadcrumb-item/index'
// import JCard from './card/index'
// import towTable from './two-dimensional-table/index';
// import Hour from './hour/index';


const components = [
  EButton,ECol,ERow,ETag,ECheckbox,ECheckboxGroup
]


const install = function(Vue) {
  if(install.installed) return
  components.map(component => Vue.component(component.name, component))
//   Vue.prototype.$message = Message
}


export default {
  install,
  EButton,
  ECol,
  ERow,
  ETag,
  ECheckbox
}