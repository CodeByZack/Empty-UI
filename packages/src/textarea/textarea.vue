<template>
  <div
    class="e__textarea"
    :class="{
      'e__textarea--disabled': disabled
    }">
    <textarea
      class="e__textarea--original"
      :class="`e__textarea--${resize}`"
      v-model="store"
      :name="name"
      :placeholder="placeholder"
      :disabled="disabled"
      :readonly="readonly"
      :rows="rows"
      :autofocus="autofocus"
      :maxlength="maxlength"
      :minlength="minlength"
      @input="handleInput"
      @focus="handleFocus"
      @blur="handleBlur"
      ref="textarea"
    ></textarea>
  </div>

</template>
<script>
export default {
    name:"ETextarea",
    props: {
        value: String,
        name: String,
        placeholder: String,
        readonly: Boolean,
        disabled: Boolean,
        rows: {
            type: Number,
            default: 2
        },
        minlength: Number,
        maxlength: Number,
        autofocus: Boolean,
        autosize: {
            type: Boolean,
            default: false
        },
        minRows: [Number, String],
        maxRows: [Number, String],
        resize: {
            type: String,
            default: 'vertical' // none, both, horizontal, vertical
        }
    },
    data(){
        return{
            store: this.value,
        }
    },
    watch: {
        value (value) {
            this.store = value
        },
        store (value) {
            this.$emit('input', value)
            this.$emit('change', value)
        }
    },
    methods:{
        handleFocus (evt) {
            this.$emit('focus', evt)
        },
        handleBlur (evt) {
            this.$emit('blur', evt)
        },
        handleInput (evt) {
            this.store = evt.target.value
        },
    }
}
</script>
