<template>
    <label class="e__checkbox" :class="{'e__checkbox--focus': focus,'e__checkbox--checked': currentValue,'e__checkbox--disabled': disabled}">
        <span class="e__checkbox--input">
            <span class="e__checkbox--inner"></span>
            <input 
                type="checkbox" 
                class="e__checkbox--original"
                :disabled="disabled"
                :checked="currentValue"
                @change="change"
                @focus="focus = true"
                @blur="focus = false"
                >
        </span>
        <span class="e__checkbox--label">
            <slot></slot>
        </span>
    </label>
</template>


<script>
export default {
    name:"ECheckbox",
    props:{
        checked:{
            type:Boolean,
            default:false
        },
        disabled:{
            type:Boolean,
            default:false
        },
        
    },
    data(){
        return{
            currentValue:false,
            focus:false,
        }
    },
    mounted(){
        if(this.checked){
            this.currentValue = this.checked;
        }
    },
    methods:{
        change(e){
            if (this.disabled) return false

            const checked = e.target.checked
            this.currentValue = checked

            const value = checked
            this.$emit('change', value)            
        }
    }
}
</script>
