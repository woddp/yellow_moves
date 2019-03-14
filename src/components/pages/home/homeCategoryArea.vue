<template>
    <div class="home-category">
        <div flex="dir:left" class="home-category-corss">
            <div flex="cross:center main:center" class="home-category-item" @click="href()">
                <div class="home-category-item-label" flex="dir:top cross:center ">
                    <i class="iconfont">&#xe621;</i>
                    <label>无码</label>
                </div>
            </div>
            <div flex="cross:center main:center" class="home-category-item" @click="href()">
                <div class="home-category-item-label" flex="dir:top cross:center ">
                    <i class="iconfont">&#xe61d;</i>
                    <label>各行各业</label>
                </div>
            </div>
            <div flex="cross:center main:center" class="home-category-item" @click="href()">
                <div class="home-category-item-label" flex="dir:top cross:center ">
                    <i class="iconfont">&#xe70b;</i>
                    <label>辣妹大奶</label>
                </div>
            </div>
            <div flex="cross:center main:center" class="home-category-item" @click="href()">
                <div class="home-category-item-label" flex="dir:top cross:center ">
                    <i class="iconfont">&#xe63a;</i>
                    <label>角色扮演</label>
                </div>
            </div>
            <div flex="cross:center main:center" class="home-category-item" @click="href()">
                <div class="home-category-item-label" flex="dir:top cross:center ">
                    <i class="iconfont">&#xe60a;</i>
                    <label>制服诱惑</label>
                </div>
            </div>
            <div flex="cross:center main:center" class="home-category-item" @click="href()">
                <div class="home-category-item-label" flex="dir:top cross:center ">
                    <i class="iconfont">&#xe623;</i>
                    <label>人妻熟女</label>
                </div>
            </div>
            <div flex="cross:center main:center" class="home-category-item" @click="href()">
                <div class="home-category-item-label" flex="dir:top cross:center ">
                    <i class="iconfont">&#xe602;</i>
                    <label>美少女</label>
                </div>
            </div>
            <div flex="cross:center main:center" class="home-category-item" @click="href()">
                <div class="home-category-item-label" flex="dir:top cross:center ">
                    <i class="iconfont">&#xe61b;</i>
                    <label>全部</label>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return {

            }
        },
        methods:{
            href(){
                console.log(1);
                this.$router.push('/category');
            }
        }
    }
</script>
<style>
    .home-category {
        margin-top: 50px;
    }

    .home-category-corss {
        flex-wrap: wrap;
    }

    .home-category-item {
        width: 25%;
        height: 180px;
    }

    .home-category-item-label {
        display: block;
        font-size: 35px;
    }

    .home-category-item-label i {
        font-size: 46px;
        color: #fcd964;
    }

    .home-category-item-label label {
        font-size: 13px;
        margin-top: 11px;
        color: #908e8e;
        font-weight: bold;
    }

</style>