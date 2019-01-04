# textarea 文本域
-----
### 基础用法

 文本域默认为100%宽度，```disabled```禁用输入框，```rows```为行数，```resize```为控制拖动

<div class="demo-box">
  <div class="demo-block">
    <div class="m-10">
      <e-textarea v-model="model" placeholder="提示语句" ></e-textarea>
      <e-textarea v-model="model" placeholder="禁用状态" :disabled="true"  class="m-10"></e-textarea>
      <e-textarea v-model="model" placeholder="通过resize控制拖动" resize="none" class="m-10"></e-textarea>
      <e-textarea v-model="model" placeholder="通过rows控制行数" resize="none" rows="10" class="m-10"></e-textarea>
    </div>
  </div>

  ::: demo
  ```html
      <e-textarea v-model="model" placeholder="提示语句" ></e-textarea>
      <e-textarea v-model="model" placeholder="禁用状态" :disabled="true"  class="m-10"></e-textarea>
      <e-textarea v-model="model" placeholder="通过resize控制拖动" resize="none" class="m-10"></e-textarea>
      <e-textarea v-model="model" placeholder="通过rows控制行数" resize="none" rows="10" class="m-10"></e-textarea>
  ```
  :::
</div>



## TextArea 参数

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| name | 原生属性	 | String | - | - |
| value | 文本域的值，可通过 v-model 绑定	String | String | - | - |
| placeholder | 占位文本（原生属性） | String | - | - |
| disabled | 是否禁用（原生属性） | Boolean | - | false |
| rows | 行数（原生属性） | number | - | 2 |
| resize | 是否能被用户缩放 | String | none, both, horizontal, vertical | vertical |


<script>
  export default {
    data() {
      return {
        model:"",
      }
    },
  }
</script>