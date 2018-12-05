# Checkbox 多选框
-----
### 基础用法

独立使用时，可使用 ```v-model```，实现双向绑定

<div class="demo-box">
  <div class="demo-block">
    <div class="m-10">
      <e-checkbox :checked="true" >选中</e-checkbox>
      <e-checkbox v-model="nowValue"  >{{nowValue?'选中':'未选中'}}</e-checkbox>
      <p>{{nowValue}}</p>
    </div>
  </div>

  ::: demo
  ```html
    <e-checkbox checked="true">选中</e-checkbox>
    <e-checkbox v-model="nowValue">未选中</e-checkbox>  
    <p>{{nowValue}}</p>
  ```
  :::
</div>

### 不可用状态

添加 ```disabled``` 属性禁用多选框

<div class="demo-box">
  <div class="demo-block">
    <div class="m-10">
      <e-checkbox :checked="true" :disabled="true" >禁用</e-checkbox>
      <e-checkbox :checked="false" :disabled="false" >未禁用</e-checkbox>
    </div>
  </div>

  ::: demo
  ```html
    <e-checkbox :checked="true" :disabled="true" >禁用</e-checkbox>
    <e-checkbox :checked="false" :disabled="false" >未禁用</e-checkbox>
  ```
  :::
</div>

### 多选框组

适用于多个多选框绑定同一个 ```model``` 的情景,请确保label有值，label的值在选中后会放入model数组 。

<div class="demo-box">
  <div class="demo-block">
    <div class="m-10">
      <e-checkbox-group v-model="model">
        <e-checkbox  label="香蕉">香蕉</e-checkbox>
        <e-checkbox  label="苹果" >苹果</e-checkbox>
        <e-checkbox  label="栗子" >栗子</e-checkbox>
        <e-checkbox  label="西瓜" :disabled="true" :checked="true">西瓜</e-checkbox>
      </e-checkbox-group>
      <p>[<span v-for="item in model">"{{item}}",</span>]</p>
    </div>
  </div>

  ::: demo
  ```html
      <e-checkbox-group v-model="model">
        <e-checkbox  label="香蕉">香蕉</e-checkbox>
        <e-checkbox  label="苹果" >苹果</e-checkbox>
        <e-checkbox  label="栗子" >栗子</e-checkbox>
        <e-checkbox  label="西瓜" :disabled="true" :checked="true">西瓜</e-checkbox>
      </e-checkbox-group>
      <p>[<span v-for="item in model">"{{item}}",</span>]</p>
      //model:["香蕉","栗子","西瓜"]
  ```
  :::
</div>


## Checkbox 参数

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| label | 选中状态的值 | String | - | - |
| disabled | 是否禁用按钮 | Boolean | - | false |
| checked | 是否已勾选 | Boolean | - | false |

<script>
  export default {
    data() {
      return {
        nowValue:false,
        model:["香蕉","栗子","西瓜"],
      }
    },
  }
</script>