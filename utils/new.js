#! /usr/bin/env node

const path = require('path');
const fs = require('fs');

const srcPath = '../packages/src';
const stylePath = '../packages/style';
const docPath = '../examples/docs';

//获取参数
let args = process.argv.splice(2);
console.log('组件名称：',args[0]);
let componentName = args[0];

const srcIndexTemplate = 
`
import ${componentName} from './${componentName}.js'
/**
 * @param {*} Vue
 * 以下为了单独引用时，注册为vue组件
 */
${componentName}.install = function(Vue) {
  Vue.component(${componentName}.name, ${componentName})
}
export default ${componentName}
`;

const srcVueTemplate = 
`
<template>
</template>
<script>
export default {
}
</script>
`;


//拼接路径

let fullSrcPath = path.resolve(srcPath,componentName);
let fullStylePath = path.resolve(stylePath,args[0]);
let fullDocPath = path.resolve(docPath);


if(!fs.existsSync(fullSrcPath)){
    console.log("组件目录不存在，新建目录！");

    //创建组件文件
    fs.mkdirSync(fullSrcPath);
    fs.writeFileSync(fullSrcPath + path.sep +componentName + '.vue',srcVueTemplate);
    fs.writeFileSync(fullSrcPath + path.sep + 'index.js',srcIndexTemplate);

    //创建样式文件
    fs.mkdirSync(fullStylePath);
    fs.writeFileSync(fullStylePath + path.sep +componentName + '.less');
    
    //创建说明文档
    fs.writeFileSync(fullDocPath + path.sep +componentName + '.md');

}else{
    console.log("组件目录已存在，请仔细检查！");
}
