export default {
    name: 'ECol',
  
    props: {
      span: {
        type: Number,
        default: 24
      },
      tag: {
        type: String,
        default: 'div'
      },
      offset: Number,
      pull: Number,
      push: Number,
      xs: [Number, Object],
      sm: [Number, Object],
      md: [Number, Object],
      lg: [Number, Object]
    },
    computed: {
      gutter() {
        let parent = this.$parent
        while(parent && parent.$options.componentName !== 'ERow') {
          parent = parent.$parent
        }
        return parent ? parent.gutter : 0
      }
    },
    render(h) {
      let classList = []
      let style = {}
  
      if(this.gutter) {
        style.paddingLeft = this.gutter / 2 +'px'
        style.paddingRight = style.paddingLeft
      }
      let attrList = ['span', 'offset', 'pull', 'push']
      let siezList = ['xs', 'sm', 'md', 'lg']
      attrList.forEach(prop => {
        if (this[prop]) {
          classList.push(
            prop !== 'span' ? `e-col-${prop}-${this[prop]}`
            : `e-col-${this[prop]}`
          )
        }
      })
  
      siezList.forEach(size => {
        if(typeof this[size] === 'number' ) {
          classList.push(`e-col-${size}-${this[size]}`)
        } else if(typeof this[size] === 'object') {
          let props = this[size]
          Object.keys(props).forEach(prop => {
            classList.push(
              prop !== 'span'
              ? `e-col-${size}-${prop}-${props[prop]}`
              : `e-col-${size}-${props[prop]}`
            )
          })
        }
      })
  
      return h(this.tag, {
        class: ['e-col', classList],
        style
      }, this.$slots.default)
    }
  }