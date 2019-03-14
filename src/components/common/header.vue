<template>
    <div class="header" flex="dir:left" >
            <slot ></slot>
    </div>
</template>
<script>
    export default{
        components:{

        },
        data(){
            return {

            }
        },
        mounted(){

        }
    }
</script>
<style>
    .header{
        background: #000;
        height:100px;
        padding: 0 50px;

    }


</style>