# Tag 标签
-----
### 基础用法
使用```color``` 属性来定义标签的背景色

<div class="demo-box">
  <div class="demo-block">
    <div class="m-10">
      <e-tag color="default" >标签一</e-tag>
      <e-tag color="primary">标签二</e-tag>
      <e-tag color="success">标签三</e-tag>
      <e-tag color="warning">标签四</e-tag>
      <e-tag color="error">标签五</e-tag>
      <e-tag color="info">标签六</e-tag>
    </div>
  </div>

  ::: demo
  ```html
    <div>
      <e-tag color="default" >标签一</e-tag>
      <e-tag color="primary">标签二</e-tag>
      <e-tag color="success">标签三</e-tag>
      <e-tag color="warning">标签四</e-tag>
      <e-tag color="error">标签五</e-tag>
      <e-tag color="info">标签六</e-tag>
    </div>
  ```
  :::
</div>

### 可关闭标签

可以设置 ```closeable``` 属性来关闭标签，关闭时默认带有过渡动画，可通过 来关闭过渡效果

<div class="demo-box">
  <div class="demo-block">
    <div class="m-10">
      <e-tag
      :key="index"
      v-for="(tag, index) in dynamicTags"
      :closeable="true"
      @close="handleClose(tag)" :color="tag.color" style="margin-right:10px;">{{tag.name}}
    </e-tag>
    <script>
      export default {
        data() {
          return {
            dynamicTags: [
              {
                name: '标签一',
                color: 'primary'
              },
              {
                name: '标签二',
                color: 'success'
              },
              {
                name: '标签三',
                color: 'info'
              },
              {
                name: '标签四',
                color: 'danger'
              }
            ]
          }
        },
        methods: {
          handleClose(tag) {
            this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1)
          }
        }
      }
    </script>
    </div>
  </div>

  ::: demo
  ```html
    <div class="m-10">
      <e-tag
      :key="index"
      v-for="(tag, index) in dynamicTags"
      :closeable="true"
      @close="handleClose(tag)" :color="tag.color">{{tag.name}}
      </e-tag>
    <script>
      export default {
        data() {
          return {
            dynamicTags: [
              {
                name: '标签一',
                color: 'primary'
              },
              {
                name: '标签二',
                color: 'success'
              },
              {
                name: '标签三',
                color: 'info'
              },
              {
                name: '标签四',
                color: 'danger'
              }
            ]
          }
        },
        methods: {
          handleClose(tag) {
            this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1)
          }
        }
      }
    </script>
    </div>
  ```
  :::
</div>



### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| color     | 背景色设置   | string  |   primary, success, error, warning, info |primary |
| closeable  | 是否可关闭    | boolean   | —   | false   |

### 事件
| 事件名称      | 说明          | 回调参数  |
|---------- |-------------- |---------- |
| close | 点击关闭按钮时触发 | -- |