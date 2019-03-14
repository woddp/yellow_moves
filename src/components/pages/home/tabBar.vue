<template>
    <div class="tabBar">
            <md-tab-bar
                    v-model="current"
                    :items="items"
                    :has-ink="false"
                    @change="onChange"
            >
                <template slot="item" slot-scope="{ item }">
                    <router-link :to="item.path" class="custom-item">
                        <div class="icon">
                            <md-icon :name="item.icon" />
                        </div>
                        <div class="text">
                            <span v-text="item.label"></span>
                        </div>
                    </router-link>
                </template>
            </md-tab-bar>
    </div>
</template>
<script>
    import {TabBar, Icon} from 'mand-mobile'
    import {mapState,mapActions} from 'vuex'
    export default{
        components: {
            [TabBar.name]: TabBar,
            [Icon.name]: Icon,
        },
        computed:{
            ...mapState('page',{
                currPageIndex:state=>state.currPageIndex
            }),


        },
        data(){
            return {
                current: -1,
                items: [
                    {name: 1, label: '首页', icon: 'home', path: '/home'},
                    {name: 2, label: '专题', icon: 'card-bag', path: '/special'},
                    {name: 3, label: '热门', icon: 'discovery', path: '/hot'},
                    {name: 4, label: '我的', icon: 'user', path: '/me'}
                    ],
            }
        },
        mounted(){
            this.current=this.currPageIndex+1;
        },
        methods:{
            onChange(item, index, prevIndex){
               this.add(index);
            },
            ...mapActions({
                add: 'page/pageOnChange'
            })
        }
    }
</script>
<style>
    .tabBar{
        height:100px;

    }
    .tabBar .md-tab-bar{
        background: #323232;
    }

    .tabBar   .custom-item{

        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:center;
        height:100%;
        flex:1;
        font-size: 20px;
        color: #908e8e;
    }
    .tabBar   .custom-item .text{
        margin-top: 10px;
    }
    .tabBar   .custom-item .icon{
        /*color: #fcd964;*/
    }
    .tabBar   .router-link-active {
        color: #fcd964;
    }
</style>
