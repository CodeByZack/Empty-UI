import checkbox from './checkbox.vue'


/**
 * @param {*} Vue
 * 以下为了单独引用时，注册为vue组件
 */
checkbox.install = function(Vue) {
  Vue.component(checkbox.name, checkbox)
}

export default checkbox