<template>
        <div class=" corssScroll" >
            <md-scroll-view
                    ref="scrollView"
                    :scrolling-y="false"
            >
                <slot></slot>
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
            }
        },
        mounted(){

        },
        methods:{

        }
    }
</script>
<style>

   .corssScroll .md-scroll-view{
       height: auto !important;
   }
   .corssScroll-md-scroll-view{
       display:flex;
       align-items:center;
   }
   /*.corssScroll-scroll-view-list{*/
        /*width:10000px;*/
       /*flex-wrap: wrap;*/
    /*}*/
   .corssScroll-scroll-view-item{

    }



</style>