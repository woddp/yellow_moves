<template>
        <div class=" crossScroll" >
            <md-scroll-view
                    ref="scrollView"
                    :scrolling-y="false"
            >
                <slot :minWidth="divWidth"></slot>
            </md-scroll-view>
    </div>
</template>
<script>
    import {ScrollView} from 'mand-mobile'
    export default{
        props:['wHeight'],
        components:{
            [ScrollView.name]: ScrollView,
        },
        data(){
            return {
                divWidth:0,
            }
        },
        mounted(){

        },
        methods:{

        }
    }
</script>
<style>

   .crossScroll .md-scroll-view{
       height: auto !important;
   }
   .crossScroll-md-scroll-view{
       display:flex;
       align-items:center;
   }
   /*.crossScroll-scroll-view-list{*/
        /*width:10000px;*/
       /*flex-wrap: wrap;*/
    /*}*/
   .crossScroll-scroll-view-item{

    }



</style>