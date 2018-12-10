<template>
    <label class="e__radio" 
        :class="{
        'e__radio--focus': focus,
        'e__radio--checked': currentValue === label,
        'e__radio--disabled': disabled}"
        >
        <span class="e__radio--input">
            <span class="e__radio--inner"></span>
            <input 
                type="radio" 
                class="e__radio--original"
                :disabled="disabled"
                :value="label"
                v-model="currentValue"
                @focus="focus = true"
                @blur="focus = false"
                >
        </span>
        <span class="e__radio--label">
            <slot></slot>
        </span>
    </label>
</template>


<script>
export default {
    name:"ERadio",
    props:{
        disabled:{
            type:Boolean,
            default:false
        },
        label:{
            type:[String,Number],
            required:"true"
        },
        value:[String, Number]
        
    },
    data(){
        return{
            currentValue:this.value,
            focus:false,
            inGroup:false,
            parent:null
        }
    },
    watch:{
        value(){
            this.currentValue = this.value;
        },
        currentValue(){
            if(this.inGroup){
                this.parent.change(this.currentValue,this);
                return;
            }
            this.$emit("input",this.currentValue);
        }
    },
    mounted(){
        if(this.$parent.$options.name == "ERadioGroup"){
            this.parent = this.$parent;
            this.inGroup = true;
        }
        // console.log(this.label === this.currentValue);
    },
    methods:{

    }
}
</script>
