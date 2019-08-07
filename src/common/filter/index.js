import Vue from "vue";
Vue.filter("ToImg",(path,info)=>{
    return info + path ;
})
// //static.228.cn/upload/2018/07/27/1532681634284_l7u8_m1.jpg
// "/upload/2018/07/27/1532681634284_l7u8_m1.jpg"