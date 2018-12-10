import input from './input.vue'


/**
 * @param {*} Vue
 * 以下为了单独引用时，注册为vue组件
 */
input.install = function(Vue) {
  Vue.component(input.name, input)
}

export default input