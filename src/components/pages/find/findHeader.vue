<template>
    <div>
        <w-header>
            <div class="find-header"  flex-box='1' flex="cross:center main:center">

            </div>
            <div class="find-header"  flex-box='1' flex="cross:center main:center">
                <label>热点发现</label>
            </div>
            <div class="find-header"  flex-box='1' flex="cross:center main:right">
                <md-icon name="search" slot="left"  ></md-icon>
            </div>
        </w-header>
    </div>
</template>
<script>
    import wHeader  from '@/components/common/header.vue';
    import { Icon} from 'mand-mobile'
    export default{
        components:{
            wHeader,
            [Icon.name]:Icon,
        },
        data(){
            return {

            }
        }
    }
</script>
<style>
    .find-header{
        color: #fcd964;
        font-size: 34px;
    }

</style>