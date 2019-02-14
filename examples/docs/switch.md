# Switch 开关
-----
### 基础用法

 ```v-model```绑定值，```disabled```禁用

<div class="demo-box">
  <div class="demo-block">
    <div class="m-10">
      <e-switch v-model="model"></e-switch>
      <e-switch  v-model="model" disabled></e-switch>
    </div>
  </div>

  ::: demo
  ```html
      <e-switch v-model="model"></e-switch>
      <e-switch  v-model="model" disabled></e-switch>
  ```
  :::
</div>



## Switch 参数

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| disabled | 是否禁用	 | Boolean | - | false |

<script>
  export default {
    data() {
      return {
        model:false,
      }
    },
  }
</script>