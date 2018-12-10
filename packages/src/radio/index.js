import radio from './radio.vue'


/**
 * @param {*} Vue
 * 以下为了单独引用时，注册为vue组件
 */
radio.install = function(Vue) {
  Vue.component(radio.name, radio
)
}

export default radio