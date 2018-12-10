<template>
    <div class="e__input"
    :class="[
        size ? `e__input--${size}` : '',
        {
            'e__input--disabled': disabled,
        }
    ]">
        <input :type="type"
        :value="currentValue"
        :placeholder="placeholder"
        :minlength="minlength"
        :maxlength="maxlength"
        :disabled="disabled"
        :readonly="readonly"
        @focus="handleFocus"
        @blur="handleBlur"
        @input="handleInput">
    </div>
</template>

<script>
export default {
    name:"EInput",
    props:{
        type: {
            type: String,
            default: 'text'
        },
        size:{
            type:String
        },
        value:[String],
        placeholder:[String],
        maxlength: Number,
        minlength: Number,
        readonly: {
            type: Boolean,
            default: false
        },
        disabled: {
            type: Boolean,
            default: false
        },
    },
    data(){
        return{
            currentValue:this.value
        }
    },
    watch:{
        value(){
            this.currentValue = this.value;
        }
    },
    methods:{
        handleFocus(){

        },
        handleBlur(){

        },
        handleInput(evt){
            const value = evt.target.value;
            this.currentValue  = value;
            this.$emit("input",this.currentValue);
        }
    }


}
</script>

