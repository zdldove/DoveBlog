<template>
    <div class="wrap">
        <div class="wrap-main">
            <tab :is="model" v-loading="loading" />
        </div>
    </div>
</template>
<script>
export default {
    name: 'Note',
    data() {
        return {
            m: '',
            loading: true,
            model: {},
        }
    },
    created: function() {
        this.init()
    },
    methods: {
        init: function() {
            this.m = this.$route.query.m || 'NoteIndex';
            this.model = () => import('@/components/Note/' + this.m);
            this.loading = false;
        }
    },
    watch: {
        $route: function(to, from) {
            this.loading = true;
            this.init();
        }
    }
}

</script>
<style>
.list {
    line-height: 3rem;
}
.list ul,
.list ul li ol,
.list ul li ol li {
    width: 100%;
    float: left;
    padding: 0;
    margin: 0;
}
.list ul li {
    font-size: 16px;
    font-weight: bold;
    margin: .2rem 0;
    width: 98%;
    padding: 0 1%;
    float: left;
    border: 1px solid #0000;
}
.list ul li ol li {
    font-size: 14px;
    font-weight: normal;
    cursor: pointer;
    width: 22%;
    max-width: 12rem;
    min-width: 4.26rem;
    margin: .5rem;
    overflow: hidden;
    height: 3.1rem
}
.list ul li ol li dd {
    float: left;
    width: 4.06rem;
    height: 2.9rem;
    border-radius: .3rem;
    background-size: auto 100%;
    background-position: center center;
    padding: 0;
    margin: .1rem;
}
.list ul li ol li span {
    margin-right: -4.06rem;
    height: 3rem;
    text-indent: .2rem;
    word-break: keep-all;
    width: auto;
    display: block;
    text-align: left;
    white-space:nowrap;
}
.list ol li:hover {
    background: #000
}

</style>
