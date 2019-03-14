<template>
    <div flex="dir:top" class="home">
        <w-home-header ></w-home-header>
         <div class="main" flex-box="1">
             <div class="home-banner">
                 <md-swiper
                         @before-change="beforeChange"
                         @after-change="afterChange"
                         ref="swiper"
                         :is-prevent="false"
                         :useNative-driver="false"
                 >
                     <md-swiper-item>
                         <div flex="cross:center main:center" class="banner-item" style="background:red">ascfsfd</div>
                     </md-swiper-item>
                     <md-swiper-item>
                         <div flex="cross:center main:center" class="banner-item" style="background:red">ascfsfd</div>
                     </md-swiper-item>
                 </md-swiper>
             </div>
             <!--分类-->
             <w-home-category-area></w-home-category-area>
             <div class="hr"></div>
             <!--最新片源-->
             <div class="home-moves">
                 <div class="home-label-nav" flex="dir:left">
                     <div flex-box="2" flex="cross:center " class="home-moves-nav-title">
                         <label>最新片源</label>
                     </div>
                     <div class="home-moves-nav-more" flex-box="2" flex="cross:center main:right">
                         <label>更多</label>
                         <md-icon name="arrow-right" size="lg"></md-icon>
                     </div>
                 </div>
                 <div class="home-moves-moves" flex="dir:left">
                     <div class="home-moves-moves-item">
                         <router-link to="/category">
                             <div class="home-moves-moves-item-cover"
                                  :style="{background: 'url('+img+') no-repeat center',backgroundSize:'cover'}">

                             </div>
                             <p class="home-moves-moves-item-title">大太阳下发热的身体</p>
                         </router-link>
                     </div>
                     <div class="home-moves-moves-item">
                         <router-link to="/category">
                             <div class="home-moves-moves-item-cover"
                                  :style="{background: 'url('+img+') no-repeat center',backgroundSize:'cover'}">

                             </div>
                             <p class="home-moves-moves-item-title">大太阳下发热的身体</p>
                         </router-link>
                     </div>
                     <div class="home-moves-moves-item">
                         <router-link to="/category">
                             <div class="home-moves-moves-item-cover"
                                  :style="{background: 'url('+img+') no-repeat center',backgroundSize:'cover'}">

                             </div>
                             <p class="home-moves-moves-item-title">大太阳下发热的身体</p>
                         </router-link>
                     </div>
                     <div class="home-moves-moves-item">
                         <router-link to="/category">
                             <div class="home-moves-moves-item-cover"
                                  :style="{background: 'url('+img+') no-repeat center',backgroundSize:'cover'}">

                             </div>
                             <p class="home-moves-moves-item-title">大太阳下发热的身体</p>
                         </router-link>
                     </div>

                 </div>

             </div>
             <div class="hr"></div>
             <!--重磅热播-->
             <div class="home-moves">
                 <div class="home-label-nav" flex="dir:left">
                     <div flex-box="2" flex="cross:center " class="home-moves-nav-title">
                         <label>重磅热播</label>
                     </div>
                     <div class="home-moves-nav-more" flex-box="2" flex="cross:center main:right">
                         <label>更多</label>
                         <md-icon name="arrow-right" size="lg"></md-icon>
                     </div>
                 </div>
                 <div class="home-moves-moves" flex="dir:left">
                     <div class="home-moves-moves-item">
                         <router-link to="/category">
                             <div class="home-moves-moves-item-cover"
                                  :style="{background: 'url('+img+') no-repeat center',backgroundSize:'cover'}">

                             </div>
                             <p class="home-moves-moves-item-title">大太阳下发热的身体</p>
                         </router-link>
                     </div>
                     <div class="home-moves-moves-item">
                         <router-link to="/category">
                             <div class="home-moves-moves-item-cover"
                                  :style="{background: 'url('+img+') no-repeat center',backgroundSize:'cover'}">

                             </div>
                             <p class="home-moves-moves-item-title">大太阳下发热的身体</p>
                         </router-link>
                     </div>
                     <div class="home-moves-moves-item">
                         <router-link to="/category">
                             <div class="home-moves-moves-item-cover"
                                  :style="{background: 'url('+img+') no-repeat center',backgroundSize:'cover'}">

                             </div>
                             <p class="home-moves-moves-item-title">大太阳下发热的身体</p>
                         </router-link>
                     </div>
                     <div class="home-moves-moves-item">
                         <router-link to="/category">
                             <div class="home-moves-moves-item-cover"
                                  :style="{background: 'url('+img+') no-repeat center',backgroundSize:'cover'}">

                             </div>
                             <p class="home-moves-moves-item-title">大太阳下发热的身体</p>
                         </router-link>
                     </div>
                 </div>
                 <!--换一批-->
                 <div class="home-moves-refresh" flex="cross:center main:center">
                     <md-icon name="refresh" size="lg"></md-icon>
                     <label>换一批</label>
                 </div>
             </div>
             <div class="hr"></div>
             <!--猜你喜欢-->
             <div class="home-guess-love">
                 <div class="home-label-nav" flex="cross:center">
                     <label class="home-guess-love-title">猜你喜欢</label>
                 </div>
             </div>
             <w-cross-scroll  >
                 <div class="home-guess-love-list" flex="dir:left">
                     <div class="home-guess-love-list-item">
                         <div class="home-guess-love-list-item-cover"
                              :style="{background: 'url('+img2+') no-repeat center',backgroundSize:'cover'}">
                             <label>无码</label>
                         </div>
                         <p class="home-guess-love-item-title"> 气氛刚刚好气氛刚刚好气氛刚刚好</p>
                     </div>
                     <div class="home-guess-love-list-item">
                         <div class="home-guess-love-list-item-cover"
                              :style="{background: 'url('+img2+') no-repeat center',backgroundSize:'cover'}">
                             <label>中出</label>
                         </div>
                         <p class="home-guess-love-item-title">气氛刚刚好气氛刚刚好气氛刚刚好</p>
                     </div>
                     <div class="home-guess-love-list-item">
                         <div class="home-guess-love-list-item-cover"
                              :style="{background: 'url('+img2+') no-repeat center',backgroundSize:'cover'}">
                             <label>中出</label>
                         </div>
                         <p class="home-guess-love-item-title">气氛刚刚好气氛刚刚好气氛刚刚好</p>
                     </div>
                     <div class="home-guess-love-list-item">
                         <div class="home-guess-love-list-item-cover"
                              :style="{background: 'url('+img2+') no-repeat center',backgroundSize:'cover'}">
                             <label>中出1</label>
                         </div>
                         <p class="home-guess-love-item-title">气氛刚刚好气氛刚刚好气氛刚刚好</p>
                     </div>
                     <div class="home-guess-love-list-item">
                         <div class="home-guess-love-list-item-cover"
                              :style="{background: 'url('+img2+') no-repeat center',backgroundSize:'cover'}">
                             <label>中出1</label>
                         </div>
                         <p class="home-guess-love-item-title">气氛刚刚好气氛刚刚好气氛刚刚好</p>
                     </div>
                     <div class="home-guess-love-list-item">
                         <div class="home-guess-love-list-item-cover"
                              :style="{background: 'url('+img2+') no-repeat center',backgroundSize:'cover'}">
                             <label>中出1</label>
                         </div>
                         <p class="home-guess-love-item-title">气氛刚刚好气氛刚刚好气氛刚刚好</p>
                     </div>
                 </div>
             </w-cross-scroll>
         </div>
    </div>
</template>
<script>
    import wHomeCategoryArea from './homeCategoryArea.vue'
    import wCrossScroll from '@/components/common/crossScroll.vue'
    import wHomeHeader from './homeHeader.vue'
    import {Swiper, SwiperItem, Icon} from 'mand-mobile'
    export default{
        components:{
            wHomeHeader,
            wHomeCategoryArea,
            wCrossScroll,
            [Swiper.name]: Swiper,
            [SwiperItem.name]: SwiperItem,
            [Icon.name]: Icon,
        },
        data(){
            return {
                img: require('@/assets/img/moves/1.jpg'),
                img2: require('@/assets/img/moves/2.jpg'),
            }
        },
        mounted(){

        },
        methods:{
            beforeChange(from, to) {

            },
            afterChange(from, to) {

            },
        }
    }
</script>
<style>
    .home{
        height: 100%;
    }
    .home-banner {
        height: 300px;
    }

    .home-banner .banner-item {
        height: 100%;

    }

    /*分割*/
    .hr {
        height: 20px;
        background: #000;
    }

    /*最新片源*/
    .home-moves {
    }

    .home-moves .home-moves-nav-title label {
        font-size: 30px;
    }

    .home-moves .home-moves-nav {
        padding: 0px 40px;
    }

    .home-moves-nav-more {
        text-align: right;
    }

    .home-moves-nav-more label {
        font-size: 25px;
        color: #908e8e;
    }

    .home-moves-nav-more .md-icon {
        font-size: 25px !important;
    }

    .home-moves-moves {
        flex-wrap: wrap;
    }

    .home-moves  .home-moves-moves-item-cover {
        width: 100%;
        height: 250px;
        border-radius: 3px;
        box-shadow: -10px -1px 25px #4a4e4a;
    }

    .home-moves .home-moves-moves-item {
        width: 48%;
        margin-bottom: 10px;
    }

    .home-moves .home-moves-moves-item:nth-of-type(even) {
        margin-left: 4%;
    }

    .home-moves .home-moves-moves-item-title {
        font-size: 25px;
        color: #908e8e;
        text-align: center;
    }

    /*换一批*/
    .home-moves-refresh {
        color: #fcd964;
        font-size: 25px;
        margin-bottom: 20px;
    }

    .home-moves-refresh .md-icon {
        vertical-align: middle;
        margin-right: 10px;
    }

    /*猜你喜欢*/
    .home-guess-love {
        /*margin-top:40px;*/
    }

    .home-guess-love-title {
        display: block;
        border-left: 5px solid #fcd964;
        text-indent: 10px;
    }

    /*.home-guess-love-list {*/
        /*width: 1000px;*/
        /*!*flex-wrap: wrap;*!*/
    /*}*/

    .home-guess-love-list-item {
        margin-left: 20px;
        width: 250px;
    }

    .home-guess-love-list-item-cover {
        position: relative;
        height: 300px;
        width: 250px;
        border-radius: 15px;
    }

    .home-guess-love-list-item-cover label {
        position: absolute;
        left: 0px;
        top: 0px;
        font-size: 10px;
        background: #fcd964;
        padding: 8px;
        border-radius: 15px 0px 0px 0px;
    }

    .home-guess-love-item-title {
        font-size: 25px;
        color: #908e8e;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
</style>