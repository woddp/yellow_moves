<template>
    <div flex="dir:top" class="home" >
        <main class="main" flex-box="1">
            <router-view></router-view>
        </main>
        <w-tab-bar ></w-tab-bar>
    </div>
</template>
<script>
    import wTabBar from './tabBar.vue'
    import wHomeHeader from './homeHeader.vue'
    import wHome from './home.vue'


    import {mapState} from 'vuex'
    export default{
        components: {
            wTabBar,
            wHomeHeader,
            wHome,


        },
        data(){
            return {
                tabIndex:0,
            }
        },
        computed:{
            ...mapState('page',{
//                  currPageIndex:state=>state.currPageIndex
            }),
        },
        mounted() {

        },
        methods: {

        }

    }
</script>
<style>

</style>