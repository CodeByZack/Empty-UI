<template>
    <div class="e-radio-group">
        <slot></slot>
    </div>    
</template>


<script>
export default {
    name:"ERadioGroup",
    props:{
        value:[String,Number]
    },
    data(){
        return{
        }
    },
    watch:{
        value(){
            this.updateData();
        }
    },
    methods:{
        findChilds(){
            let tmp =[];
            this.$children.forEach(child=>{
                if(child.$options.name == "ERadio"){
                    tmp.push(child);
                }
            });
            console.log(tmp);
            return tmp;
        },
        updateData(){
            let children = this.findChilds();
            children.forEach(item=>{
                item.currentValue = this.value;
            })
        },
        change(value,child){
            this.$emit("input",value);
        }
    },
    mounted(){
        this.updateData();
    }
}
</script>

