<template>
    <div id="recommended">
        <div class="recommended-detailInf">
            <div class="one">
                <img src="../../public/img/1564471039745_f4h0-0.jpg" alt="">
                <p>2019中国平安中国足球协会超级联赛 第23轮 北京中赫国安VS广州恒大淘宝</p>
                <div class="time">2019.08.11</div>
                <div class="price"><span>￥120</span>起</div>
            </div>
           
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style>
.recommended-detailInf {
    display:flex;
    flex-direction: row;
    flex-wrap:wrap;
    justify-content: space-between;
    margin:0.2rem;
    flex:1;
}
.recommended-detailInf .one img {
    width:1.05rem;
    height:1.4rem;
}
.recommended-detailInf .one p {
    font-size: .13rem;
    height: .34rem;
    line-height: .18rem;
    width:1.05rem;  
    overflow:hidden;
    text-overflow: ellipsis;
    font-family: "PingFangSC-Regular", "Helvetica", "Hiragino Sans GB", "Microsoft YaHei","WenQuanYi Micro Hei", "sans-serif";
}
.recommended-detailInf .one .time {
    font-size:0.11rem;
    color:#999;
}
div.price {
    font-size:0.13rem;
}
.recommended-detailInf .one .price span {
    font-size:0.13rem;
    color: #ff3a56;
    margin-right:0.05rem;
}
</style>