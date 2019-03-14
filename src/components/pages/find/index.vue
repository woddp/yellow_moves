<template>
    <div class="find find-video-list" flex="dir:top">
        <w-find-header></w-find-header>
        <div class="main" flex-box="1">
            <md-scroll-view
                    ref="scrollView"
                    :scrolling-x="false"
                    @endReached="$_onEndReached"
            >
                <div v-for="(n, index) of 10" :key="n"  @click="play('/480P_600K_186216841.mp4', index)" class="find-video-list-item" flex="dir:top"  >
                    <div class="find-video-list-item-cover" ref="video" flex="cross:center main:center" :style="{background: 'url('+img+') no-repeat center',backgroundSize:'cover'}">
                        <p>震惊门门主合集 时间</p>
                        <i class="iconfont" >&#xe600;</i>
                    </div>
                    <div class="find-video-list-item-tab" flex="dir:left cross:center">
                        <label class="find-video-list-item-tab-time" flex-box="1">
                            1.0万次播放
                        </label>
                        <label class="find-video-list-item-tab-ico" flex="dir:left main:right " flex-box="1">
                            <i class="iconfont" >&#xe60f;</i>
                            <i class="iconfont" >&#xe610;</i>
                        </label>
                    </div>

                </div>
                <md-scroll-view-more
                        slot="more"
                        :is-finished="isFinished"
                >
                </md-scroll-view-more>
            </md-scroll-view>
        </div>

    </div>
</template>

<script>
    import {ScrollView, ScrollViewMore} from 'mand-mobile'
    import 'video.js/dist/video-js.css'

    import wFindHeader from '@/components/pages/find/findHeader.vue'
    import { videoPlayer } from 'vue-video-player'
    import WinPlay from "../../../plugin/winplay/video";
    export default{
        components: {
            WinPlay,
            wFindHeader,
            [ScrollView.name]: ScrollView,
            [ScrollViewMore.name]: ScrollViewMore,
        },
        data(){
            return {
                list: 10,
                isFinished: false,
                img: require('@/assets/img/moves/1.jpg'),
                img2: require('@/assets/img/moves/2.jpg'),
            }
        },
        mounted(){
//           this.play(1,2)
        },
        methods:{
            $_onEndReached() {
                if (this.isFinished) {
                    return
                }
                // async data
                setTimeout(() => {
                    this.list += 5
                    if (this.list >= 20) {
                        this.isFinished = true
                    }
                    this.$refs.scrollView.finishLoadMore()
                }, 1000)
            },
            play(url, index){
                this.$showVideo(this.$refs.video[index], url, 'm3u8');
            }
        }
    }
</script>
<style>
.find{
    background:#f4f4f4;
    height: 100%;
}
.find .main{
    background: #ecf2f9;
}
.find-video-list{
    height: 100%;
}
.find-video-list-item{
    margin-bottom: 20px;
}
    .find-video-list-item-cover{
        position: relative;
        height: 350px;
    }
    .find-video-list-item-cover p{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        margin: 0;
        padding: 30px 20px;
        font-size: 30px;
        background: linear-gradient(rgba(0, 0, 0, 0.76),rgba(0, 0, 0, 0.0));
    }
    .find-video-list-item-cover i{
        font-size: 80px;
    }

    .find-video-list-item-tab{
        color: rgba(48, 48, 48, 0.79);
        height: 90px;
        background: #fff;
        font-size: 24px;
        padding: 0 20px;
    }
    .find-video-list-item-tab-ico i{
        color: #000;
        margin-right: 20px;
    }
    .find-video-list-item-tab-ico i:nth-of-type(1){
        font-size:55px;
    }
    .find-video-list-item-tab-ico i:nth-of-type(2){
        font-size:50px;
    }

</style>