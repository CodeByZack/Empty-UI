import checkboxGroup from './checkbox-group.vue'


/**
 * @param {*} Vue
 * 以下为了单独引用时，注册为vue组件
 */
checkboxGroup.install = function(Vue) {
  Vue.component(checkboxGroup.name, checkboxGroup)
}

export default checkboxGroup