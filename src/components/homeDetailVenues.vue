<template>
    <div id="vennus">
        <div class="vennus-detailInf">
            <div class="one">
                <img src="../../public/img/2.jpg" alt="">
                <p>工人体育馆</p>
                <div>朝阳区三里屯工体北路</div>
            </div>
            <div class="one">
                <img src="../../public/img/2.jpg" alt="">
                <p>工人体育馆</p>
                <div>朝阳区三里屯工体北路</div>
            </div>
            <div class="one">
                <img src="../../public/img/2.jpg" alt="">
                <p>工人体育馆</p>
                <div>朝阳区三里屯工体北路</div>
            </div>
            <div class="one">
                <img src="../../public/img/2.jpg" alt="">
                <p>工人体育馆</p>
                <div>朝阳区三里屯工体北路</div>
            </div>
        </div>
        
    </div>
</template>
<script>
export default {
    
}
</script>
<style>
.vennus-detailInf {
    display:flex;
    flex-direction: row;
    flex-wrap:wrap;
    justify-content: space-between;
    margin:0.2rem;
    flex:1;
}
.vennus-detailInf .one img {
    width:1.61rem;
    height:1.4rem;
}
.vennus-detailInf .one p {
    font-size: .13rem;
    color:#000;
    overflow: hidden;
    text-overflow: ellipsis;
    font-family: "PingFangSC-Regular", "Helvetica", "Hiragino Sans GB", "Microsoft YaHei","WenQuanYi Micro Hei", "sans-serif";
}
.vennus-detailInf .one div {
    font-size: .13rem;
    color:#999;
    overflow: hidden;
    text-overflow: ellipsis;
    font-family: "PingFangSC-Regular", "Helvetica", "Hiragino Sans GB", "Microsoft YaHei","WenQuanYi Micro Hei", "sans-serif";
}
</style>


