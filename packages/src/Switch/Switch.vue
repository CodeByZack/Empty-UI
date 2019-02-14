
<template>

<span 
    class="e-switch"
    :class="[
        {
            'e-switch-checked' : checked,
            'e-switch-disabled' : disabled
        }
    ]"
    @click="toggoleSwitch">
    <slot v-if="checked" name="checkedText"></slot>
    <slot v-if="!checked" name="uncheckedText"></slot>
</span>

</template>

<script>
export default {
    name:"ESwitch",
    props:{
        disabled:{
            type:Boolean,
            default:false
        },
        value:{
            type:Boolean,
            default:false
        }
    },
    data(){
        return{
            checked:this.value
        }
    },
    methods:{
        toggoleSwitch(){
            if(this.disabled)return;

            this.checked = !this.checked;
            this.$emit("change",this.checked);
        }
    }
}
</script>
