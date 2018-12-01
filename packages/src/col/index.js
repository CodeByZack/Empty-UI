import Col from './col.js'


/**
 * @param {*} Vue
 * 以下为了单独引用时，注册为vue组件
 */
Col.install = function(Vue) {
  Vue.component(Col.name, Col)
}

export default Col