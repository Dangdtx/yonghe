export default ({
    path:"/detail",
    name:"detail",
    component:()=>import("views/detail"),
    meta:{
        flag:false,
        auth:false
    }
})