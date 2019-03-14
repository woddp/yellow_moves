<template>
    <div class="login">
        <div class="login-top-banner" :style="{background: `url('${img}') no-repeat center`,backgroundSize:'cover'}">
            <div class="login-top-banner-zz">
                <md-icon class="login-top-banner-back" name="arrow-left" size="lg"></md-icon>

            </div>
        </div>
        <div class="login-login-nav" flex="dir:left">
            <div class="login-login-nav-label "  :class="{'login-login-nav-label-active':isLogin}"  flex-box="1" flex="cross:center main:center" @click="tabSwitch(true)">
                <label>账号登陆</label>
            </div>
            <div class="login-login-nav-label"  :class="{'login-login-nav-label-active':!isLogin}"   flex-box="1"  flex="cross:center main:center" @click="tabSwitch(false)">
                <label>账号注册</label>
            </div>
        </div>
        <div class="login-login-from" v-show="isLogin">
            <md-field>
                <md-input-item
                        ref="input11"
                        placeholder="账号"
                >
                    <i class="iconfont" slot="left">&#xe603;</i>
                </md-input-item>
            </md-field>
            <md-field>
                <md-input-item
                        ref="input11"
                        placeholder="密码"
                        type="password"
                >
                    <i class="iconfont" slot="left">&#xe62f;</i>
                </md-input-item>
            </md-field>
            <p class="login-login-fowget-password">忘记密码？</p>
            <md-button type="default" round>登陆</md-button>
        </div>
        <div class="login-login-from"  v-show="!isLogin">
            <md-field>
                <md-input-item
                        ref="input11"
                        placeholder="账号"
                >
                    <i class="iconfont" slot="left">&#xe603;</i>
                </md-input-item>
            </md-field>
            <md-field>
                <md-input-item
                        ref="input11"
                        placeholder="密码"
                        type="password"
                >
                    <i class="iconfont" slot="left">&#xe62f;</i>
                </md-input-item>
            </md-field>
            <p class="login-login-fowget-password">忘记密码？</p>
            <md-button type="default" round>登陆</md-button>
        </div>
    </div>
</template>
<script>
    import {Icon, InputItem, Field, Button} from 'mand-mobile'
    export default{
        components: {
            [Icon.name]: Icon,
            [InputItem.name]: InputItem,
            [Field.name]: Field,
            [Button.name]: Button,
        },
        data(){
            return {
                isLogin:true,
                img: require('@/assets/img/moves/login_bg.jpg'),
            }
        },
        methods:{
            tabSwitch(sbool){
                console.log(sbool);
                this.isLogin=sbool;
            }
        }
    }
</script>
<style>
    .login-top-banner {
        position: relative;
        height: 400px;
        padding: 30px;
    }
    .login-top-banner-zz{
        box-sizing: border-box;
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background: rgba(208, 132, 58, 0.24);
        padding: 30px;
    }

    .login-top-banner-back {
        background: #35353538;
        border-radius: 100%;
        padding: 6px;
        text-align: center;
        color: #fbfbfb !important;
        font-size: 60px !important;

    }

    .login-login-nav {
        background: #fff6ef;
        height: 100px;
        width: 100%;
    }
    .login-login-nav .login-login-nav-label {
        color: #eccfae;
        font-size: 30px;
    }

    .login-login-nav .login-login-nav-label-active label {
        color: #d2b38f !important;
        font-weight: bold;
        font-size: 30px;
    }

    .login-login-nav .login-login-nav-label-active {
        position: relative;
    }

    .login-login-nav .login-login-nav-label-active::after {
        position: absolute;
        top: 80px;
        content: "";
        display: block;
        width: 0;
        height: 0;
        border-left: 40px solid transparent;
        border-right: 40px solid transparent;
        border-bottom: 50px solid #ffffff;

    }

    /**/
    .login-login-from {
        padding: 0 20px;
    }

    .login-login-from .iconfont {
        font-size: 45px;
        color: #d2b38f;
    }

    .login-login-from fieldset {
        padding-top: 0;
        padding: 10px 0px;
    }

    .login-login-fowget-password {
        margin: 40px 0px;
        text-align: right;
        color: #808080;
        font-size: 25px;
        padding: 0 0px;
    }

    .login-login-from .md-button {
        background: #e8b98d;
        color: #fff;
    }

    .login-login-from .md-button.default::after {
        border: solid 0.03rem #e8b98d;
    }

    .login-login-from .md-input-item-input, .md-input-item-fake{
        font-size: 0.22rem;
    }
    .login-login-from .md-button.default.active:active {
        background-color: #e8cba4;
    }
</style>