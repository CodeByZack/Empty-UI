# Radio 单选框
-----
### 基础用法

独立使用时，单独绑定 ```v-model```，```label```为选中的值，model和label的值相等时即为选中

<div class="demo-box">
  <div class="demo-block">
    <div class="m-10">
      <e-radio v-model="model" :label="1">选中</e-radio>
      <e-radio v-model="model" :label="2">未选中</e-radio>
    </div>
  </div>

  ::: demo
  ```html
      <e-radio v-model="model" :label="1">选中</e-radio>
      <e-radio v-model="model" :label="2">未选中</e-radio>
  ```
  :::
</div>

### 不可用状态

使用 ```disabled```禁用单选框

<div class="demo-box">
  <div class="demo-block">
    <div class="m-10">
      <e-radio v-model="model" :label="1" :disabled="true">选中</e-radio>
      <e-radio v-model="model" :label="2" :disabled="true">未选中</e-radio>
    </div>
  </div>

  ::: demo
  ```html
      <e-radio v-model="model" :label="1" :disabled="true">选中</e-radio>
      <e-radio v-model="model" :label="2" :disabled="true">未选中</e-radio>
  ```
  :::
</div>

### 单选框组

如果不想每个单选框绑定model，可使用单选框组。

<div class="demo-box">
  <div class="demo-block">
    <div class="m-10">
      <e-radio-group v-model="model">
        <e-radio :label="1" >选择1</e-radio>
        <e-radio :label="2" >选择2</e-radio>
        <e-radio :label="3" >选择3</e-radio>
        <e-radio :label="4" >选择4</e-radio>
      </e-radio-group>
    </div>
  </div>

  ::: demo
  ```html
      <e-radio-group v-model="model">
        <e-radio :label="1" >选择1</e-radio>
        <e-radio :label="2" >选择2</e-radio>
        <e-radio :label="3" >选择3</e-radio>
        <e-radio :label="4" >选择4</e-radio>
      </e-radio-group>
  ```
  :::


## Checkbox 参数

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| label | 选中状态的值 | String,Number | - | - |
| disabled | 是否禁用按钮 | Boolean | - | false |

<script>
  export default {
    data() {
      return {
        model:1,
      }
    },
  }
</script>