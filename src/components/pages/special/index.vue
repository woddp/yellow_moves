<template>
    <div class="special">
        <!--专题卡片-->
        <w-special-header></w-special-header>
        <div class="mian" flex-box="1">
            <div class="special-card">
                <p class="special-card-title">必看专题</p>
                <w-cross-scroll>
                    <div class="special-card-list" flex="dir:left">
                        <div class="special-card-list-item" flex="dir:top">
                            <div class="special-card-list-item-top" flex="dir:left">
                                <div class="special-card-list-item-top-img"
                                     :style="{background: 'url('+img+') no-repeat center',backgroundSize:'cover'}">
                                </div>
                                <div class="special-card-list-item-top-title" flex-box="1" flex="dir:top main:center">
                                    <p class="title">国外大奶系列</p>
                                    <p class="info-date">更新时间：2019-03-09</p>
                                </div>
                            </div>
                            <div class="special-card-list-item-center" flex="cross:center">
                                <p>牙签搅大缸，不存在的！</p>
                            </div>
                            <div class="special-card-list-item-bottom" flex="dir:right main:bottom">
                                <button @click="href()" class="special-card-list-item-bottom-button">立即观赏</button>
                            </div>
                        </div>
                        <div class="special-card-list-item" flex="dir:top">
                            <div class="special-card-list-item-top" flex="dir:left">
                                <div class="special-card-list-item-top-img"
                                     :style="{background: 'url('+img+') no-repeat center',backgroundSize:'cover'}">
                                </div>
                                <div class="special-card-list-item-top-title" flex-box="1" flex="dir:top main:center">
                                    <p class="title">国外大奶系列</p>
                                    <p class="info-date">更新时间：2019-03-09</p>
                                </div>
                            </div>
                            <div class="special-card-list-item-center" flex="cross:center">
                                <p>牙签搅大缸，不存在的！</p>
                            </div>
                            <div class="special-card-list-item-bottom" flex="dir:right main:bottom">
                                <button class="special-card-list-item-bottom-button">立即观赏</button>
                            </div>
                        </div>
                        <div class="special-card-list-item" flex="dir:top">
                            <div class="special-card-list-item-top" flex="dir:left">
                                <div class="special-card-list-item-top-img"
                                     :style="{background: 'url('+img+') no-repeat center',backgroundSize:'cover'}">
                                </div>
                                <div class="special-card-list-item-top-title" flex-box="1" flex="dir:top main:center">
                                    <p class="title">国外大奶系列</p>
                                    <p class="info-date">更新时间：2019-03-09</p>
                                </div>
                            </div>
                            <div class="special-card-list-item-center" flex="cross:center">
                                <p>牙签搅大缸，不存在的！</p>
                            </div>
                            <div class="special-card-list-item-bottom" flex="dir:right main:bottom">
                                <button class="special-card-list-item-bottom-button">立即观赏</button>
                            </div>
                        </div>
                        <div class="special-card-list-item" flex="dir:top">
                            <div class="special-card-list-item-top" flex="dir:left">
                                <div class="special-card-list-item-top-img"
                                     :style="{background: 'url('+img+') no-repeat center',backgroundSize:'cover'}">
                                </div>
                                <div class="special-card-list-item-top-title" flex-box="1" flex="dir:top main:center">
                                    <p class="title">国外大奶系列</p>
                                    <p class="info-date">更新时间：2019-03-09</p>
                                </div>
                            </div>
                            <div class="special-card-list-item-center" flex="cross:center">
                                <p>牙签搅大缸，不存在的！</p>
                            </div>
                            <div class="special-card-list-item-bottom" flex="dir:right main:bottom">
                                <button class="special-card-list-item-bottom-button">立即观赏</button>
                            </div>
                        </div>
                        <div class="special-card-list-item" flex="dir:top">
                            <div class="special-card-list-item-top" flex="dir:left">
                                <div class="special-card-list-item-top-img"
                                     :style="{background: 'url('+img+') no-repeat center',backgroundSize:'cover'}">
                                </div>
                                <div class="special-card-list-item-top-title" flex-box="1" flex="dir:top main:center">
                                    <p class="title">国外大奶系列</p>
                                    <p class="info-date">更新时间：2019-03-09</p>
                                </div>
                            </div>
                            <div class="special-card-list-item-center" flex="cross:center">
                                <p>牙签搅大缸，不存在的！</p>
                            </div>
                            <div class="special-card-list-item-bottom" flex="dir:right main:bottom">
                                <button class="special-card-list-item-bottom-button">立即观赏</button>
                            </div>
                        </div>
                        <div class="special-card-list-item" flex="dir:top">
                            <div class="special-card-list-item-top" flex="dir:left">
                                <div class="special-card-list-item-top-img"
                                     :style="{background: 'url('+img+') no-repeat center',backgroundSize:'cover'}">
                                </div>
                                <div class="special-card-list-item-top-title" flex-box="1" flex="dir:top main:center">
                                    <p class="title">国外大奶系列</p>
                                    <p class="info-date">更新时间：2019-03-09</p>
                                </div>
                            </div>
                            <div class="special-card-list-item-center" flex="cross:center">
                                <p>牙签搅大缸，不存在的！</p>
                            </div>
                            <div class="special-card-list-item-bottom" flex="dir:right main:bottom">
                                <button class="special-card-list-item-bottom-button">立即观赏</button>
                            </div>
                        </div>
                        <div class="special-card-list-item" flex="dir:top">
                            <div class="special-card-list-item-top" flex="dir:left">
                                <div class="special-card-list-item-top-img"
                                     :style="{background: 'url('+img+') no-repeat center',backgroundSize:'cover'}">
                                </div>
                                <div class="special-card-list-item-top-title" flex-box="1" flex="dir:top main:center">
                                    <p class="title">国外大奶系列</p>
                                    <p class="info-date">更新时间：2019-03-09</p>
                                </div>
                            </div>
                            <div class="special-card-list-item-center" flex="cross:center">
                                <p>牙签搅大缸，不存在的！</p>
                            </div>
                            <div class="special-card-list-item-bottom" flex="dir:right main:bottom">
                                <button class="special-card-list-item-bottom-button">立即观赏</button>
                            </div>
                        </div>
                    </div>
                </w-cross-scroll>
            </div>
            <div class="hr"></div>
            <p class="special-card-title">热门专题</p>
            <div class="special-list" flex="dir:left">
                <div class="special-list-item" flex="dir:top cross:center">
                    <div class="special-list-item-corver"
                         :style="{background: 'url('+img+') no-repeat center',backgroundSize:'cover'}">
                    </div>
                    <p class="special-list-item-title">中出</p>
                </div>
                <div class="special-list-item" flex="dir:top cross:center">
                    <div class="special-list-item-corver"
                         :style="{background: 'url('+img+') no-repeat center',backgroundSize:'cover'}">
                    </div>
                    <p class="special-list-item-title">中出</p>
                </div>
                <div class="special-list-item" flex="dir:top cross:center">
                    <div class="special-list-item-corver"
                         :style="{background: 'url('+img+') no-repeat center',backgroundSize:'cover'}">
                    </div>
                    <p class="special-list-item-title">中出</p>
                </div>
                <div class="special-list-item" flex="dir:top cross:center">
                    <div class="special-list-item-corver"
                         :style="{background: 'url('+img+') no-repeat center',backgroundSize:'cover'}">
                    </div>
                    <p class="special-list-item-title">中出</p>
                </div>
                <div class="special-list-item" flex="dir:top cross:center">
                    <div class="special-list-item-corver"
                         :style="{background: 'url('+img+') no-repeat center',backgroundSize:'cover'}">
                    </div>
                    <p class="special-list-item-title">中出</p>
                </div>
                <div class="special-list-item" flex="dir:top cross:center">
                    <div class="special-list-item-corver"
                         :style="{background: 'url('+img+') no-repeat center',backgroundSize:'cover'}">
                    </div>
                    <p class="special-list-item-title">中出</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import wCrossScroll from '@/components/common/crossScroll.vue'
    import wSpecialHeader from '@/components/pages/special/specialHeader.vue'
    export default{
        components: {
            wCrossScroll,
            wSpecialHeader
        },
        data(){
            return {
                img: require('@/assets/img/moves/5.jpg'),
            }
        },
        mounted(){

        },
        methods: {
            href(){
                this.$router.push('/special/list')
            }
        }
    }
</script>
<style>
    .special {
        height: 100%;
    }

    .special-card {
        margin-bottom: 40px;
    }

    .special-card-title {
        font-size: 30px;
        margin-left: 35px;
    }

    .special-card-list p {
        margin: 0;
    }

    .special-card-list-item {
        width: 600px;
        background: #eeeeee;
        border-radius: 10px;
        margin-left: 20px;
        padding: 30px;
        box-sizing: border-box;
        color: #000;
    }

    .special-card-list-item-top-img {
        height: 100px;
        width: 100px;
        border-radius: 100%;
        border: 4px solid #b68953;
    }

    .special-card-list-item-top-title .title {
        font-size: 30px;
        margin-left: 20px;
    }

    .special-card-list-item-top-title .info-date {
        font-size: 25px;
        color: #9e9e9e;
        margin-top: 10px;
        margin-left: 20px;
    }

    .special-card-list-item-center {
        height: 100px;
        border-bottom: 1px solid #e2e1e1;
    }

    .special-card-list-item-center p {
        margin: 0;
        font-size: 30px;
    }

    .special-card-list-item-bottom {
    }

    .special-card-list-item-bottom-button {
        margin-top: 30px;
        /*background: #d5ad7a;*/

        background: linear-gradient(to right, #d9b07d, #b18451); /* 标准的语法 */

        border: 0;
        font-size: 30px;
        color: #fff;
        height: 80px;
        padding: 16px 40px;
        border-radius: 40px;
    }

    .special-list {
        flex-wrap: wrap;
    }

    .special-list-item {
        width: 25%;
        padding: 20px;
        box-sizing: border-box;
    }

    .special-list-item-corver {
        width: 120px;
        height: 120px;
        border-radius: 100%;
    }

    .special-list-item-title {
        margin: 15px 0;
    }

    .special-list-item-title {
        font-size: 30px;
        color: #908e8e;
    }
</style>