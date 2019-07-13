<template>
    <div class="CommonLayout" v-show="CommonLayout">
        <div class="CommonLayout-background" @click="CommonLayout=false"></div>
        <div class="CommonLayout-layout">
            <diybox :is="currentTab"></diybox>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Welcome',
    data() {
        return {
            CommonLayout: false,
            currentTab: () => import('@/components/Layout/Login.vue'),
        }
    },
    created: function() {
        this.CommonJs.this_commonlayout = this;
    }
}

</script>
<style>
.CommonLayout {
    width: 100%;
    height: 100%;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 999;
    background: #0006
}
.CommonLayout div.CommonLayout-layout {
    width: 510px;
    position: relative;
    float: none;
    margin: 180px auto;
}
.CommonLayout div.CommonLayout-layout>* {
    width: 510px;
    position: relative;
    float: none;
    margin: 180px auto;
}
.CommonLayout div.CommonLayout-layout>*:after {
    position: absolute;
    right: 0;
    top: -20px;
    width: 20px;
    height: 20px;
    line-height: 20px;
    text-align: center;
    background: red;
    color: #fff;
    content: '×';
    z-index: -1;
    font-size: bold;
}
.CommonLayout div.CommonLayout-background {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
}

</style>
