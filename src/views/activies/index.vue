<template>

    <div class="activies">
        <Head_tit> </Head_tit>
        
        <div class="pb50" >
            <div class="activity-area"> 
                <v-touch class="list tc" v-for="(item,index) in list" :key="index" tag="div"
                @tap="handleTo(item)">
                    <div class="photo" style="height: 150.087px;">
                        <img     :src= "item.IMG | ToImg('//static.228.cn')" 
                            onerror="this.src=&quot;//static.228.cn/resources/images/lazy_default.gif&quot;">
                    </div>
                    <div class="text f17 fw">{{item.SHARETITLE}}</div>
                </v-touch> 
                <!-- <div class="list tc" v-for="(item,index) in list2" :key="index">
                    <div class="photo" style="height: 150.087px;">
                        <img     :src= "item.IMG | ToImg('//static.228.cn')" 
                            onerror="this.src=&quot;//static.228.cn/resources/images/lazy_default.gif&quot;">
                    </div>
                    <div class="text f17 fw">{{item.SHARETITLE}}</div>
                </div>  -->
                <v-touch class="load-more" @tap="handlePageNum()"><a href="javascript:;">查看更多</a></v-touch>
            </div>
            <Footer></Footer>
        </div>


    </div>
</template>

<script> 
import {activies_api ,activies2_api,activies3_api} from "api/activies.js"
    export default {
        name: "Activies",
        data() {
            return {
                active: "活动专区",
                list:"",
                list2:"",
                list3:"",
                count:0
            }
        },
        async created(){
            let data = await activies_api()
            this.list =data.data.subjectPage.list
             
        },    
        methods:{
           async handlePageNum(){ 
               if( this.count == 0){
                   this.count++;
                    let data = await activies2_api()
                    this.list2 = data.data.subjectPage.list 
                    Array.prototype.push.apply(this.list,this.list2) 
                    console.log(this.list)
                }else if( this.count == 1){
                     let data = await activies3_api()
                    this.list3 = data.data.subjectPage.list 
                     Array.prototype.push.apply(this.list,this.list3) 
                    console.log(this.list)
                }   
            } ,
            handleTo(item){
                // this.$router.push("/detail")
                console.log(item.URL)
            }  
        } 
       
    }  
</script>

<style scoped>
    html {
        font-size: 100px;
    }

    .activies {
        background: #f5f6f7;
        width: 100%;
        height: 100%;

    }
    .pb50 {
    padding-bottom: 0.5rem;
}
.activity-area {
    margin: .15rem;
}
.activity-area .list {
    margin-bottom: .2rem;
    width: 100%;
    border-radius: .1rem;
    overflow: hidden;
    background: #fff;
}
.tc {
    text-align: center;
}
.activity-area .photo {
    width: 100%;
    /* height: 1.5rem; */
    position: relative;
}
img {
    vertical-align: top;
}
.activity-area .photo img {
    width: 100%;
    height: 100%;
}
.activity-area .text {
    margin: .2rem;
}
.f17 {
    font-size: 0.17rem;
}
.fw {
    font-weight: bold;
}
.load-more {
    height: .3rem;
    width: 100%;
    background: #fff7f7;
    line-height: .3rem;
    text-align: center;
}
.load-more a{
    color: #ff2959;
}
</style>