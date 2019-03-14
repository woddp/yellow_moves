<template>
    <div>
        <w-header>
            <div class="special-header"  flex-box='1' flex="cross:center main:center">
                <label>专题推荐</label>
            </div>
        </w-header>
    </div>
</template>
<script>
    import wHeader  from '@/components/common/header.vue';
    export default{
        components:{
            wHeader
        },
        data(){
            return {

            }
        }
    }

</script>
<style>
    .special-header{
        color: #fcd964;
        font-size: 34px;
    }

</style>