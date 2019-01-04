
import textarea from './textarea.vue'
/**
 * @param {*} Vue
 * 以下为了单独引用时，注册为vue组件
 */
textarea.install = function(Vue) {
  Vue.component(textarea.name, textarea)
}
export default textarea
