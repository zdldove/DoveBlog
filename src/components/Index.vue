<template>
    <div class="Index">
        <b>{{ msg }}</b>
        <!-- <div v-html="data" id="demo"></div> -->
    </div>
</template>
<script>
export default {
    name: 'Index',
    data() {
        return {
            msg: 'WelCome To My Page',
            // data: '',
        }
    },
    created: function() {
        // this.do();
        this.$nextTick(function() {
            //dom已更新
            // this.do();
        })
    },
    methods: {}
}

</script>
<style>
.Index {
    width: 100%;
    float: left;
    text-align: center;
    line-height: 12rem
}

</style>
