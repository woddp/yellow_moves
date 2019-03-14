<template>
    <div class="video-play" flex="dir:top">
        <div class="video-play-warp" ref="videoTitle"  >
            <Xgplayer ref="x" :config="config"  @player="Player"/>
            <div v-if="topTitle" class="video-paly-warp-back-title" flex="cross:center">
                <md-icon @click="$router.back(-1)" name="arrow-left" size="lg"  ></md-icon>
                <label>超清晰粉嫩小穴中字无码</label>
            </div>
        </div>
        <div class="video-play-main" flex-box="1">
            <div class="video-play-main-title" flex="dir:top">
                    <div class="video-play-main-title-title" flex-box="1">
                        <p>超清晰粉嫩小穴中字无码</p>
                    </div>
                    <div class="video-play-main-title-date">
                        2019-03-12 <label>10000</label> 次播放
                    </div>
                   <div class="video-play-main-title-intro" flex="dir:top" @click="showPopUp('bottom')">
                        <p  flex="main:left">超清晰粉嫩小穴中字无码</p>
                        <div class="video-play-main-title-intro-more" flex="main:right cross:center">
                            简介  <md-icon name="arrow-right" size="lg"  ></md-icon>
                        </div>
                  </div>
            </div>
        </div>
        <md-popup
                class="video-play-popup-bottom"
                v-model="isPopupShow.bottom"
                position="bottom"
        >
            <md-popup-title-bar
                    title="超清晰粉嫩小穴中字无码"
                    @confirm="hidePopUp('bottom')"
            ></md-popup-title-bar>
            <div class="video-play-warp-popup video-play-warp-bottom">
                    <p>播放: &nbsp;&nbsp;5000次播放</p>
                    <p>标签: &nbsp;&nbsp;<label>大奶</label><label>大奶</label> </p>
                <div class="video-play-warp-popup-intro">
                    <p class="video-play-warp-popup-intro-title">简介</p>
                    <p  class="video-play-warp-popup-intro-content">
                        暂无简介
                    </p>
                </div>
            </div>
        </md-popup>
    </div>
</template>
<script>
    import Xgplayer from 'xgplayer-vue';
    import { Icon } from 'mand-mobile'
    import { Popup, PopupTitleBar ,Button} from 'mand-mobile'
    const getConfig = url => {
        return {
            id: 'vs',
            url,
            whitelist: [
                ""
            ],
            playbackRate: [0.5, 0.75, 1, 1.5, 2],
            autoplay: true,
           enterBg: {
             color: "rgba(0,0,0,0.87)"
             },
            enterLogo: {
                //视频加载页logo
                url: "https://www.baidu.com/img/bd_logo1.png",
                width: 231,
                height: 60
            },
            enterTips: {
                //视频加载页加载特效
                background:
                    "linear-gradient(to right, rgba(0,0,0,0.87), #3D96FD, rgba(86,195,248), #3D96FD, rgba(0,0,0,0.87))"
            }

        }
    }
    export default{
        components:{
            Xgplayer,
            [Icon.name]: Icon,
            [Popup.name]: Popup,
            [Button.name]: Button,
            [PopupTitleBar.name]: PopupTitleBar,
        },
        data(){
            return{
                config:getConfig(),
                topTitle:true,
                isPopupShow: {},
            }
        },
        mounted(){
            this.config = getConfig("/480P_600K_186216841.mp4");
            this.$refs.x.init();
            setTimeout(()=>{
                this.topTitle=false;
            },3000);



        },
        methods:{
            Player($event){
                $event.on('pause', ()=> {
                    this.topTitle=true
                })
            },
            showPopUp(type) {
                console.log(1);
                this.$set(this.isPopupShow, type, true)
                console.log(this.isPopupShow);
            },
            hidePopUp(type) {
                this.$set(this.isPopupShow, type, false)
            },
        }
    }
</script>
<style>
    .video-play{
        height: 100%;
        overflow: hidden;

    }
    .video-play-warp{
        height: 450px;
        position: relative;
    }
    .video-play-main{
        overflow-y: scroll;
        height: 0;
        min-height: 0;
        background: #fff;
        color: #000;
    }
    #vs{
        background: #000;
    }
    .video-paly-warp-back-title{
        position: absolute;
        left: 0;
        top: 0;
        height: 100px;
        width: 100%;
        background: rgba(0, 0, 0, 0.16);
        color: #fff;
        padding: 0 20px;
        box-sizing: border-box;
    }
    .video-paly-warp-back-title .md-icon{
        font-size: 55px !important;
        color: #b78a55 !important;
    }
    .video-paly-warp-back-title label{
        font-size: 30px;
       text-indent: 20px;
    }


    /**/
    .video-play-main{
        padding: 0 20px;
    }
    .video-play-main-title-title{

        font-size: 35px;
        font-weight: bold;
    }
    .video-play-main-title-date{
        font-size: 25px;
        color: #a2a2a2;
    }
    .video-play-main-title-date label{
        color: #b78a55;
    }

    .video-play-main-title-intro{
        margin-top: 30px;
        font-size: 30px;
        padding: 30px 30px;
        background: #f6f8fb;
    }
    .video-play-main-title-intro p{
        margin: 0px;
        color: #ababab;
    }
    .video-play-main-title-intro-more{
        color: #b78a55;
        margin-top: 20px;
    }
    .video-play-main-title-intro-more .md-icon{
        font-size: 30px !important;
        font-weight: bold;
        margin-left: 10px;
    }

    /**/
    .video-play-warp-bottom{
        background:#f9fafb;
    }

    /*简介弹框*/
    .video-play-warp-popup{
        padding: 0 20px 20px;
    }

    .video-play-warp-bottom{
        border-top: 1px solid #ebedef;
    }

    .video-play-warp-popup p{
        color:#a0a0a0;
        font-size: 30px;
    }
    .video-play-warp-popup p label{
        display: inline-block;
        padding: 10px 30px;
        background: #e9ddd3;
        margin-right: 20px;
        font-size: 25px;
        color: #5d5d5d;
        border-radius:10px;
    }
    .video-play-warp-popup-intro{
        border-top: 1px solid #ebedef;
    }
    .video-play-warp-popup .video-play-warp-popup-intro-title{
        font-size: 40px;
        color: #000;
        font-weight: bold;

    }
    .video-play-warp-popup  .video-play-warp-popup-intro-content{
        font-size: 30px;
        color: #6f6f6f;
    }
</style>