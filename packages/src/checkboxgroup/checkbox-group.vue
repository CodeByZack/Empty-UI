<template>
  <div class="e-checkbox-group">
    <slot></slot>
  </div>    
</template>

<script>
export default {
    name:"ECheckboxGroup",
    props: {
        value: {
        type: Array,
        default () {
            return []
        }
        }
    },
    data () {
        return {
        currentValue: this.value,
        childrens: []
        }
    },
    watch:{
        value(){
            this.updateValues();
        }
    },
    methods:{
        findChilds(){
            let tmp =[];
            this.$children.forEach(child=>{
                if(child.$options.name == "ECheckbox"){
                    tmp.push(child);
                }
            });
            return tmp;
        },
        updateValues(){
            this.childrens = this.findChilds();
            this.childrens.forEach(child=>{
                child.currentValue = this.value.indexOf(child.label) >= 0;
                child.inGroup = true;
            });
            this.currentValue = this.value;
        },
        change(child){
            //检查当前model中是否包含该选项
            let index = this.value.indexOf(child.label);
            if(child.currentValue &&  index == -1){
                //当前为选中状态 且model中不含该项
                this.currentValue.push(child.label);
            }else if(!child.currentValue && index != -1){
                //当前为未选中状态 且model中含该项
                this.currentValue.splice(index,1);
            }
            this.$emit("input",this.currentValue);
        }
    },
    mounted(){
        this.updateValues();
    }
}
</script>



