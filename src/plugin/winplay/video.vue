<template>
    <div class="win-play-video">
        <Xgplayer ref="x" :config="config" @player="Player = $event"/>
    </div>
</template>
<script>
    import Xgplayer from 'xgplayer-vue';
    const getConfig = url => {
        return {
            id: 'vs',
            url,
            whitelist: [
                ""
            ],
            autoplay: true
//         "fluid": true
        }
    }
    export default{
        components:{
            Xgplayer
        },
        data(){
            return{
                type: '',
                url: '',
                config: getConfig(),
                Player: null
            }
        },
        mounted(){
            console.log("win-play-video")
        },
        methods:{
            play(type, url) {
                this.type = type;
                this.config = getConfig(url);
                this.$refs.x.init()
//                console.log(this.config.url);
                // do someing
            }
        }
    }

</script>
<style>
    .win-play-video{
        width: 100%;
        height: 100%;
        z-index: 9;
        position: absolute;
        left: 0;
        top: 0;
    }
    #vs{
        width: 100% !important;
        height: 100% !important;
    }
</style>