<template>
    <div>
        <w-header>
            <div class="home-header-search"  flex-box='1'>
                <md-input-item
                        class="header-search-input"
                        ref="input11"
                        placeholder="输入关键字查找片源"
                >
                    <md-icon name="search" slot="left"  @click.native="onClick"></md-icon>
                </md-input-item>
            </div>
            <div class="home-header-option"  flex-box='2' flex="cross:center main:right">
                <md-icon name="user" slot="left"  @click.native="onClick"></md-icon>
            </div>
        </w-header>
    </div>
</template>
<script>
    import wHeader  from '@/components/common/header.vue';
    import {InputItem, Icon,} from 'mand-mobile'
    export default{
        components:{
            wHeader,
            [InputItem.name]: InputItem,
            [Icon.name]: Icon,
        },
        data(){
            return {

            }
        }
    }
</script>
<style>
    .home-header-search  .md-icon {
        color: #fcd964;
        vertical-align: middle;
    }
    .home-header-search  .md-field-item-content::before {
        background-color: transparent;
    }
    .home-header-search .md-input-item-input{
        color: #fcd964;
    }
    .home-header-option .md-icon{
        font-size: 45px !important;
        color: #fcd964;
    }
</style>