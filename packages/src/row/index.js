import Row from './row.js'


/**
 * @param {*} Vue
 * 以下为了单独引用时，注册为vue组件
 */
Row.install = function(Vue) {
  Vue.component(Row.name, Row)
}

export default Row