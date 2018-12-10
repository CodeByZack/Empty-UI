# input 输入框
-----
### 基础用法

 输入框默认为100%宽度，```disabled```禁用输入框，```type```为原生属性

<div class="demo-box">
  <div class="demo-block">
    <div class="m-10" style="width:200px;">
      <e-input v-model="model" placeholder="提示语句"></e-input>
      <e-input v-model="model" placeholder="禁用状态" :disabled="true"  class="m-10"></e-input>
      <e-input v-model="model" placeholder="输入密码" type="password" class="m-10"></e-input>
    </div>
  </div>

  ::: demo
  ```html
      <e-input v-model="model" placeholder="提示语句"></e-input>
      <e-input v-model="model" placeholder="禁用状态" :disabled="true"></e-input>
      <e-input v-model="model" placeholder="输入密码" type="password"></e-input>
  ```
  :::
</div>

### 不同尺寸

 ```size```控制输入框的大小

<div class="demo-box">
  <div class="demo-block">
    <div class="m-10" style="width:200px;">
      <e-input v-model="model" placeholder="大" size="large"></e-input>
      <e-input v-model="model" placeholder="中" size="normal" class="m-10"></e-input>
      <e-input v-model="model" placeholder="小" size="small" class="m-10"></e-input>
    </div>
  </div>

  ::: demo
  ```html
      <e-input v-model="model" placeholder="大" size="large"></e-input>
      <e-input v-model="model" placeholder="中" size="normal"></e-input>
      <e-input v-model="model" placeholder="小" size="small"></e-input>
  ```
  :::
</div>


## Input 参数

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| placeholder | 占位文本（原生属性）	 | String | - | - |
| size | 输入框大小 | String | large,normal,small | normal |
| disabled | 是否禁用按钮（原生属性） | Boolean | - | false |
| type | 输入框类型（原生属性） | String | - | text |

<script>
  export default {
    data() {
      return {
        model:"",
      }
    },
  }
</script>
