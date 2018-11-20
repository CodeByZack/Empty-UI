import Button from './button.vue'


/**
 * @param {*} Vue
 * 以下为了单独引用时，注册为vue组件
 */
Button.install = function(Vue) {
  Vue.component(Button.name, Button)
}

export default Button