<template>
    <div class="category" flex="dir:top">
        <header class="category-header"  flex="dir:left cross:center">
                  <div class="category-header-left" flex-box="1" @click="back()">
                      <md-icon name="arrow-left" slot="left"  ></md-icon>
                  </div>
                  <div class="category-title" flex-box="1" flex="main:center">
                      全部高清影片
                  </div>
                  <div class="category-search" flex-box="1" flex="main:right">
                      <md-icon name="search" slot="left"  @click.native="onClick"></md-icon>
                  </div>
         </header>
        <main class="main category-main" flex-box="1">
                <div class="category-select" :style="{ padding: scrollUpDown?'0':'0.2rem 0.2rem',height: scrollUpDown?'0':'auto'}">
                           <w-cross-scroll  >
                               <div class="category-select-play-type" flex="dir:left cross:center">
                                    <button class="category-select-buttom category-select-on" @click="onType()">综合</button>
                                    <button class="category-select-buttom" @click="onType()">最多播放</button>
                                    <button class="category-select-buttom" @click="onType()">最近更新</button>
                                    <button class="category-select-buttom" @click="onType()">最多喜欢</button>
                               </div>
                           </w-cross-scroll>
                        <w-cross-scroll >
                            <div class="category-select-play-type category-select-play-cate" flex="dir:left cross:center" ref="item">
                                <button class="category-select-buttom category-select-on" @click="onType()">全部</button>
                                <button class="category-select-buttom" @click="onType()">无码</button>
                                <button class="category-select-buttom" @click="onType()">各行各业</button>
                                <button class="category-select-buttom" @click="onType()">辣妹大奶</button>
                                <button class="category-select-buttom" @click="onType()">校色扮演</button>
                                <button class="category-select-buttom" @click="onType()">制服诱惑</button>
                                <button class="category-select-buttom" @click="onType()">人妻熟女</button>
                            </div>
                        </w-cross-scroll>
                </div>
                <div class="category-list">
                    <md-scroll-view
                            ref="scrollView"
                            :scrolling-x="false"
                            @scroll="$_onScroll"
                            @endReached="$_onEndReached"
                    >
                        <div class="home-moves-moves" flex="dir:left">
                            <div class="home-moves-moves-item" v-for="item in list" >
                                <router-link :to="`/play/${item.vKey}`">
                                    <div class="home-moves-moves-item-cover"
                                         :style="{background: 'url(\''+item.thumb+'\') no-repeat center',backgroundSize:'cover'}">

                                    </div>
                                    <p class="home-moves-moves-item-title">{{item.title}}</p>
                                </router-link>
                            </div>

                        </div>
                        <md-scroll-view-more
                                slot="more"
                                :is-finished="isFinished"
                        >
                        </md-scroll-view-more>
                    </md-scroll-view>
                </div>
        </main>
    </div>
</template>
<script>
    import { Icon} from 'mand-mobile'
    import {ScrollView, ScrollViewMore,ScrollViewRefresh} from 'mand-mobile'
    import wCrossScroll from '../../common/crossScroll.vue'
    export default{
        components:{
            wCrossScroll,
          [Icon.name]:Icon,
            [ScrollView.name]: ScrollView,
            [ScrollViewMore.name]: ScrollViewMore,
            [ScrollViewRefresh.name]: ScrollViewRefresh,
        },
        data(){
            return {
                list: [],
                isFinished: true,

                scrollNums:[],
                scrollTime:null,
                scrollUpDown:false,

                img: require('@/assets/img/moves/1.jpg'),
                img2: require('@/assets/img/moves/2.jpg'),

            }
        },
        mounted(){
//                console.log(this.$refs.item)
            this.getList();
        },
        methods:{
            back(){
                this.$router.go(-1)
            },
            onType(i){
            },
            $_onEndReached() {
//                if (this.isFinished) {
//                    return
//                }
                // async data
//                setTimeout(() => {
//                    this.list += 5
//                    if (this.list >= 20) {
//                        this.isFinished = true
//                    }
//                    this.$refs.scrollView.finishLoadMore()
//                }, 1000)
            },
            $_onScroll({scrollLeft, scrollTop}) {
                clearInterval(this.scrollTime);
                this.scrollNums.unshift(scrollTop);
                if(this.scrollNums.length===4){
                    this.scrollNums.pop();
                }
                if(scrollTop<0){
                    console.log("向上滚动");
//                    this.scrollUpDown=true;
                    return;
                }
               this.scrollTime=setTimeout(()=>{
                    if(this.scrollNums[0]>this.scrollNums[2]){
                        console.log("向下滚动")
//                        this.scrollUpDown=false;
                    }else{
                        console.log("向上滚动")
//                        this.scrollUpDown=true;
                    }
                },100);

            },

            getList(){
                fetch('/api/paging?id=1&page=2')
                    .then((response) =>{
                        return response.json();
                    })
                    .then((myJson)=> {
                        this.list=myJson.data;
                        this.$nextTick(() => {
                            this.$refs.scrollView.finishLoadMore()
                        })
                    });
            }
        }
    }
</script>
<style>
    .category-main{
        background: #fff;
        color: #000;
    }
    .category-header{
        height: 100px;
        background: #323232;
    }
    .category-title{
        color: #fcd964;
        font-size: 32px;
    }
    .category-header-left .md-icon{
        margin-left: 20px;
    }
    .category-search .md-icon{
        margin-right: 25px;
    }
    .category-header .md-icon{
        color: #fcd964;
        font-size: 50px !important;
    }

    /**
    条件选择
     */
    .category-select{
         overflow: hidden;
        height: auto;
        background: #fff;
        padding: 0.2rem 0.2rem;
        -webkit-box-shadow: 0px 1px 0.8rem #d6d6d6;
        box-shadow: 0px 1px 0.8rem #d6d6d6;
    }
    .category-select-buttom{
        /*min-width: 100px;*/
        background: transparent;
        border: 0;
        padding: 4px 30px;
        height: 50px;
    }

    .category-select-buttom.category-select-on{
        background: #fce860;
        color: #827033;
        border-radius:30px ;
    }

    .category-select-play-type{
        height: 80px;
    }
    .category-select-play-type .category-select-buttom{
        font-size: 25px;
    }

    .category-select-play-cate{
        width:1500px ;
    }
    /*列表*/
    .category-list{
        height: calc(100% - 80px - 50px);
    }
    .scroll-view-item{
        padding:30px 0;
        text-align: center;
        font-size: 32px;
        font-family: DINAlternate-Bold;
        border-bottom :.5px solid #efefef ;
    }

   .category-main .home-moves-moves {
        flex-wrap: wrap;
    }

  .category-main  .home-moves-moves-item-cover {
        width: 100%;
        height: 250px;
        border-radius: 3px;
    }

   .category-main .home-moves-moves-item {
        width: 50%;
        margin-bottom: 10px;
    }



   .category-main .home-moves-moves-item-title {
        font-size: 20px;
        color: #8d8989;
        text-align: center;
    }

</style>