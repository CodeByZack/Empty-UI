import radiogroup from './radiogroup.vue'


/**
 * @param {*} Vue
 * 以下为了单独引用时，注册为vue组件
 */
radiogroup.install = function(Vue) {
  Vue.component(radiogroup.name, radiogroup)
}

export default radiogroup