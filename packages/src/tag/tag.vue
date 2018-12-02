<template>
    <transition name="zoom-in-center">
        <div class="e__tag" :class="'e__tag--'+color">
            <span class="e__tag--desc"><slot></slot></span>
            <i class="e__tag--close iconfont icon-close" v-if="closeable" @click="hiddenTag"></i>
        </div>
    </transition>
</template>

<script>
export default {
    name:"ETag",
    props:{
        color:{
            type:String,
            default:'primary'
        },
        closeable:{
            type:Boolean,
            default:false
        }
    },
    data(){
        return{
            isClosed:false
        }
    },
    methods:{
        hiddenTag(){
            this.isClosed = true;
            this.$emit('close');
        }
    }
}
</script>

