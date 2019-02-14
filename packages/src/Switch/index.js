
import Switch from './Switch.vue'
/**
 * @param {*} Vue
 * 以下为了单独引用时，注册为vue组件
 */
Switch.install = function(Vue) {
  Vue.component(Switch.name, Switch)
}
export default Switch
