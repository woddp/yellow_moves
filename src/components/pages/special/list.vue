<template>
    <div class="special-page-list">
        <!--</md-scroll-view>-->
        <md-scroll-view
                ref="scrollView"
                :scrolling-x="false"
                :bouncing="false"
                @endReached="$_onEndReached"
        >
            <div class="special-page-list-cover">
                <div class="special-page-list-back" flex="cross:center main:center">
                    <md-icon name="arrow-left" slot="left"  @click.native="back()"></md-icon>
                </div>
                <img src="@/assets/img/moves/listBf.jpg"/>

            </div>
            <p class="special-page-list-title">
                国外大奶系列
            </p>
            <p class="special-page-list-info">小牙签也有大梦想，不要怂就是干！</p>

            <div class="special-page-scroll-view-list" flex="dir:left" >
                    <div class="special-page-scroll-view-list-item">
                        <div class="special-page-scroll-view-list-item-cover" :style="{background: 'url('+img+') no-repeat center',backgroundSize:'cover'}"><label>无码</label></div>
                        <p class="special-page-scroll-view-item-title"> 气氛刚刚好气氛刚刚好气氛刚刚好</p>
                    </div>
                <div class="special-page-scroll-view-list-item">
                    <div class="special-page-scroll-view-list-item-cover" :style="{background: 'url('+img+') no-repeat center',backgroundSize:'cover'}"><label>无码</label></div>
                    <p class="special-page-scroll-view-item-title"> 气氛刚刚好气氛刚刚好气氛刚刚好</p>
                </div>
                <div class="special-page-scroll-view-list-item">
                    <div class="special-page-scroll-view-list-item-cover" :style="{background: 'url('+img+') no-repeat center',backgroundSize:'cover'}"><label>无码</label></div>
                    <p class="special-page-scroll-view-item-title"> 气氛刚刚好气氛刚刚好气氛刚刚好</p>
                </div>
                <div class="special-page-scroll-view-list-item">
                    <div class="special-page-scroll-view-list-item-cover" :style="{background: 'url('+img+') no-repeat center',backgroundSize:'cover'}"><label>无码</label></div>
                    <p class="special-page-scroll-view-item-title"> 气氛刚刚好气氛刚刚好气氛刚刚好</p>
                </div>
                <div class="special-page-scroll-view-list-item">
                    <div class="special-page-scroll-view-list-item-cover" :style="{background: 'url('+img+') no-repeat center',backgroundSize:'cover'}"><label>无码</label></div>
                    <p class="special-page-scroll-view-item-title"> 气氛刚刚好气氛刚刚好气氛刚刚好</p>
                </div>
                <div class="special-page-scroll-view-list-item">
                    <div class="special-page-scroll-view-list-item-cover" :style="{background: 'url('+img+') no-repeat center',backgroundSize:'cover'}"><label>无码</label></div>
                    <p class="special-page-scroll-view-item-title"> 气氛刚刚好气氛刚刚好气氛刚刚好</p>
                </div>
                <div class="special-page-scroll-view-list-item">
                    <div class="special-page-scroll-view-list-item-cover" :style="{background: 'url('+img+') no-repeat center',backgroundSize:'cover'}"><label>无码</label></div>
                    <p class="special-page-scroll-view-item-title"> 气氛刚刚好气氛刚刚好气氛刚刚好</p>
                </div>
            </div>
            <md-scroll-view-more
                    slot="more"
                    :is-finished="isFinished"
            >
            </md-scroll-view-more>
        </md-scroll-view>
    </div>
</template>
<script>
    import {ScrollView, ScrollViewMore} from 'mand-mobile'
    import { Icon} from 'mand-mobile'
    export default{
        components:{
            [Icon.name]:Icon,
            [ScrollView.name]: ScrollView,
            [ScrollViewMore.name]: ScrollViewMore,
        },
        data(){
            return{
                isFinished:true,
                img: require('@/assets/img/moves/1.jpg'),
            }
        },
        mounted(){

        },
        methods:{
                 back(){
                     this.$router.go(-1)
                 },
            $_onEndReached() {

            },
        }
    }
</script>
<style>
    .special-page-list{
        height: 100%;
        color: #000;
    }
    .special-page-list-cover{
        position: relative;
        height: 500px;
        border-radius: 100% 100% 100% 100% / 0% 0% 23% 18%;
        overflow: hidden;

    }
    .special-page-list-back{
        position: absolute;
        top: 40px;
        left: 40px;
        width: 80px;
        height: 80px;
        background: rgba(0, 0, 0, 0.54);
        color: #fff;

        text-align: center;
        border-radius: 100%;
    }
    .special-page-list-back .md-icon{
        font-size: 55px !important;
    }
    .special-page-list-cover img{
        width: 100%;
    }


    /**/
    .special-page-list-title{
        font-size: 36px;
        margin-left: 20px;
        font-weight: bold;
    }
    .special-page-list-info{
        font-size: 26px;
        margin-left: 20px;
        margin-bottom: 40px;
    }

    
    /**/
    .special-page-scroll-view-title {
        display: block;
        border-left: 5px solid #fcd964;
        text-indent: 10px;
    }

    .special-page-scroll-view-list {
            padding: 0 20px;
            flex-wrap: wrap;
    }

    .special-page-scroll-view-list-item {
        width: calc((100%  - 40px ) / 3);
        overflow: hidden;
    }

    .special-page-scroll-view-list-item:nth-of-type(3n - 1){
        margin: 0 20px;
        box-sizing: border-box;
    }
    .special-page-scroll-view-list-item-cover {
        position: relative;
        height: 250px;
        width: 100%;
        border-radius: 0;
    }

    .special-page-scroll-view-list-item-cover label {
        position: absolute;
        left: 0;
        top: 0;
        font-size: 10px;
        background: #fcd964;
        padding: 8px;
        border-radius: 15px 0px 0px 0px;
    }

    .special-page-scroll-view-item-title {
        font-size: 20px;
        color: #000;
        /*margin-bottom:0px;*/
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }



</style>